import React from 'react';
import AddPatient from './components/AddPatient';
import PatientList from './components/PatientList';

function App() {
  return (
    <div className="App">
      <h1>Gestion des patients</h1>
      <AddPatient onAdd={() => window.location.reload()} />
      <PatientList />
    </div>
  );
}

export default App;
