import React from "react";
import Button from "./elements/Button/Button";

type App = {
  name: string
}

const App = () => {
  const obj: App = {
    name: "sadas"
  }

  return (
    <Button />
  );
};

export default App;