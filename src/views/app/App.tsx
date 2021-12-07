import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [pessoas, setPessoas] = useState([] as any);

  useEffect(() => {
    setPessoas([{ id: 1, nome: "Leo", idade: 25 }, { id: 2, nome: "Leo 2", idade: 26 }])
  }, []);

  function ListItem(props: any) {
    return <li>{props.pessoa.id}/{props.pessoa.nome}/{props.pessoa.idade}</li>;
  }

  const handleClick = () => {
    setCount(count + 1);
  }

  const listItems = pessoas.map((pessoa: any) =>
    <ListItem pessoa={pessoa} />
  );


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div>
          <p>You clicked {count} times</p>
          <button onClick={handleClick}>
            Click me
          </button>
        </div>
        {listItems}
      </header>
    </div>
  );
}

export default App;
