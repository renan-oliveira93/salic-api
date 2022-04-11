import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [itens, setItens] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  async function getData() {
    try {
      await fetch('http://api.salic.cultura.gov.br/v1/projetos/?limit=100&format=json')
        .then((res) => res.json())
        .then((data) => setItens(data._embedded))

    } catch (error) {
      console.log(error)
    }

  };

  console.log(itens);

  return (
    <div className="App">
      <h1>Projetos</h1>

      <div>
        <div className='card_container'>
          {itens.projetos && Object.values(itens.projetos).map((item) => (
            <div className='card'>
              <p className='card_rouanet'>ROUANET</p>
              <p className='card_nome'>{item.nome}</p>
              <p className='card_municipio'>{item.municipio} - {item.UF}</p>
              <p className='card_valor'>Aprovado <span>R$ {item.valor_aprovado}</span></p>
              <p className='card_valor'>Captado <span>R$ {item.valor_captado}</span></p>
              <p className='card_interacao'>
                <button>ADICIONAR</button>
                <img className='card_fav_icon' src='../assets/coracao.png' alt='icone_favoritos' />
              </p>
            </div>
          ))}
        </div>
      </div>

    </div >
  );
}

export default App;
