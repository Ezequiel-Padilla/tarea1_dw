import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CampeonesLOL = () => {
  const [campeones, setCampeones] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getCampeones = async () => {
      try {
        const response = await axios.get('http://ddragon.leagueoflegends.com/cdn/11.14.1/data/en_US/champion.json');
        setCampeones(Object.values(response.data.data));
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('fallo axios', err);
        setError('Hubo un error al traer los campeones de League of Legends');
      }
    };
    getCampeones();
  }, []);

  return (
    <div>
      <h1>Campeones de League of Legends</h1>
      <p>Aqui podemos ver todos los nombres de los campiones de League of Legends</p>
      <p>
        Link a la conversación de reddit:
        {' '}
        <a href="https://www.reddit.com/r/leagueoflegends/comments/blyasg/riot_api_list_of_champion_ids/" target="_blank" rel="noreferrer">Conversación</a>
      </p>
      {error}
      {campeones.map((campeon) => (
        <>
          <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${campeon.id}_0.jpg`} alt={campeon.name} />
          <h1 key={campeon.name}>{campeon.name}</h1>
          <h3 key={campeon.title}>{campeon.title}</h3>
          <p key={campeon.blurb}>{campeon.blurb}</p>
        </>
      ))}
    </div>
  );
};

export default CampeonesLOL;
