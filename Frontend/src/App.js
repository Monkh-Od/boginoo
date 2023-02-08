import React from "react";
import Index from "./Pages/index";
import { Provider } from "./Providers/Provider";

function App() {
  return (
    <Provider>
      <Index />
    </Provider>
  );
}

export default App;
