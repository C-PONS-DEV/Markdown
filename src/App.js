import React, { useState } from 'react';
import Marked from 'marked';
import './App.css';

function App() {

  // State
  const [texte, setTexte] = useState('# `Prévisualisateur - Markdown`\n### Oh ! De la magie !\n### Cas d\'utilisation\n* *italique*\n* **gras**\n* `monospace`\n* ~~barré~~\n* # h1\n* ## h2\n* ### h3\n* #### etc\n[Clément PONS](https://clement-pons.com)');

  // Fonctions
  const changeTextHandler = event => {
    setTexte(event.target.value);
  };

  const markdownToHTML = () => {
    return {__html: Marked(texte)};
  }

  return (
    <div className="App">
      <div className="elements">

        <div className="element">
          <textarea
            rows="30"
            value={texte}
            onChange={(e) => changeTextHandler(e)}>
          </textarea>
        </div>

        <div className="element">
          <div dangerouslySetInnerHTML={markdownToHTML()}></div>
        </div>

      </div>
    </div>
  );
}

export default App;