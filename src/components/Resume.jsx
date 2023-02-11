import React from "react";
import PDF from "../images/Tushar_KumarResume.pdf";

const App = () => (
  <embed
    src={PDF}
    type="application/pdf"
    height={800}
    width={500}
  />
);

export default App;