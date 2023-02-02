import React, { useState, useEffect } from 'react';

export default function SelectParty() {
  const [parties, setParties] = useState([]);
  const [selectedParty, setSelectedParty] = useState('');
  const [parliamentaries, setParliamentaries] = useState([]);

  useEffect(() => {
    // Obtenha os partidos políticos através da API
    fetch('https://dadosabertos.camara.leg.br/api/v2/partidos?itens=100')
      .then((response) => response.json())
      .then((data) => {
        setParties(data.dados);
      });
  }, []);

  useEffect(() => {
    fetch(
      'https://dadosabertos.camara.leg.br/api/v2/deputados?itens=100',
    )
      .then((response) => response.json())
      .then((data) => {
        const partidos = data.dados.filter(({ siglaPartido }) => siglaPartido === selectedParty);
        setParliamentaries(partidos);
        console.log(partidos);
      });
  }, [selectedParty]);

  const handleChange = (e) => {
    setSelectedParty(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div className="container">
      <div>
        <select
          value={selectedParty}
          onChange={handleChange}
        >
          <option value="">Selecione um partido</option>
          {parties.map((party) => (
            <option key={party.id} value={party.sigla}>
              {party.sigla}
            </option>
          ))}
        </select>
      </div>
      { selectedParty && (
      <ul>
        {parliamentaries.map((parliamentary) => (
          <li key={parliamentary.id}>{parliamentary.nome}</li>
        ))}
      </ul>
      )}
    </div>
  );
}
