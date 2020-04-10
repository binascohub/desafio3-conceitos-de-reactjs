import React, { useState } from "react";
import api from "./services/api";

import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState(['projeto 1','projeto 2']);

  async function handleAddRepository() {
    //repositories.push(`novo projeto ${Date.now()}`);

    setRepositories([...repositories, `novo projeto ${Date.now()}`]);

    console.log(repositories);
    
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => <li key={repository}>{repository}</li>)}
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
