import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Paises = () => {
  const [paises, setPaises] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getPaises = async () => {
      try {
        const response = await axios.get('https://restcountries.eu/rest/v2/all?fields=name');
        setPaises(response.data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('fallo axios', err);
        setError('Hubo un error al traer los paises');
      }
    };
    getPaises();
  }, []);

  return (
    <>
      <h1>Paises</h1>
      <select name="paises" id="paises">
        {error}
        {paises.map((pais) => (
          <option value={pais.name} key={pais.name}>{pais.name}</option>
        ))}
      </select>
    </>
  );
};

export default Paises;
