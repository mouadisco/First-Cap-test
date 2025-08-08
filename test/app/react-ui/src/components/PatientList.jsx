import React, { useEffect, useState } from 'react';

const PatientList = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch('http://localhost:4004/api/patients');
        if (!res.ok) throw new Error('Erreur lors de la récupération des patients');
        const data = await res.json();
        setPatients(data.value); // attention à .value si tu utilises OData
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchPatients();
  }, []);

  if (loading) return <p>Chargement des patients...</p>;

  return (
    <div>
      <h3>Liste des patients</h3>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Date de naissance</th>
          </tr>
        </thead>
        <tbody>
          {patients.map(patient => (
            <tr key={patient.ID}>
              <td>{patient.nom}</td>
              <td>{patient.prenom}</td>
              <td>{patient.dateNaissance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
