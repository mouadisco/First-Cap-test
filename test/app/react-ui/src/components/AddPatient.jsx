import React, { useState } from 'react';

const AddPatient = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateNaissance: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:4004/api/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!res.ok) throw new Error('Erreur POST');

      const newPatient = await res.json();
      onAdd(newPatient);
      setFormData({ nom: '', prenom: '', dateNaissance: '' });

    } catch (err) {
      console.error('Erreur ajout patient:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Ajouter un patient</h3>
      <input
        type="text"
        name="nom"
        placeholder="Nom"
        value={formData.nom}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="prenom"
        placeholder="Prénom"
        value={formData.prenom}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dateNaissance"
        value={formData.dateNaissance}
        onChange={handleChange}
        required
      />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddPatient;
