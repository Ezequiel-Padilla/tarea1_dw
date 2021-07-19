import React from 'react';
import styles from './App.module.scss';
import Paises from './components/Paises';
import Campeones from './components/CampeonesLoL';

const App = () => (
  <div className={styles.App}>
    <h1>Tarea 1</h1>
    <Paises />
    <Campeones />
  </div>
);

export default App;
