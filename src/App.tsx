import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ fontFamily: 'ui-sans-serif, system-ui, Arial', padding: 24 }}>
      <h1>Baby Feed Calc</h1>
      <p>Vite + React + TypeScript starter</p>
      <button onClick={() => setCount((c) => c + 1)}>count is {count}</button>
    </div>
  );
}

export default App;


