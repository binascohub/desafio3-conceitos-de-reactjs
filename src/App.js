import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response =>{
      setRepositories(response.data);
    });
  }, []);

  async function handleAddRepository() {

    //setRepositories([...repositories, `novo projeto ${Date.now()}`]);
    //console.log(repositories);

    api.post('repositories',{
      "title": `Desafio 1 GoStack ${Date.now()}`,
      "url": "https://github.com/Rocketseat/bootcamp-gostack-desafios/tree/master/desafio-conceitos-nodejs",
      "techs": ["Node,js", "React"]
    });
    
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => <li key={repository.id}>{repository.title}</li>)}
        <li>
          Repositório 1

          <button onClick={() => handleRemoveRepository(1)}>
            Remover
          </button>
        </li>
      </ul>

      <button type="button" onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
