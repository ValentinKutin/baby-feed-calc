import { useState } from "react";
import {
  AgeInput,
  CalculationsPreview,
  WeightInput,
} from "./modules/Calculator";

function App() {
  const [weight, setWeight] = useState(2890);
  const [age, setAge] = useState<number>(0);

  return (
    <div style={{ fontFamily: "ui-sans-serif, system-ui, Arial", padding: 24 }}>
      <h1>Baby Feed Calc</h1>
      <WeightInput value={weight} onChange={setWeight} />
      <AgeInput value={age} onChange={setAge} />
      <CalculationsPreview input={{ weight, age }} />
    </div>
  );
}

export default App;
