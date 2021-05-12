import { useState, useEffect } from 'react';

import Keyboard from './components/Keyboard';
import Hangman from './components/Hangman';
import Input from './components/Input';
import { GetCategories,RandomPhrase } from './components/Categories';

function App() {
  const [guessed, setGuessed] = useState('');
  const [fails, setFails] = useState(0);
  const [phrase, setPhrase] = useState(RandomPhrase('Space')); // default category
  const [keys, setKeys] = useState(Array(26).fill(null));

  const categories = GetCategories();

  // 'cleaning' the previous game //
  const changeCategory = e => {
    // reseting values //
    setGuessed('');
    setFails(0);
    setKeys(Array(26).fill(null)); // enabling keyboard
    // generating random phrase from chosen category //
    const cat = e.target.textContent.substr(0, e.target.textContent.lastIndexOf(' '));
    setPhrase(RandomPhrase(cat));
  };

  // checking for win //
  useEffect(() => {
    // checking if all letters from phrase are in all letters in 'guessed' (clicked letters) //
    if (phrase.replace(/\s/g, '').split('').filter(p => guessed.split('').includes(p)).length === phrase.replace(/\s/g, '').length) {
      alert("You won!");
      setKeys(Array(26).fill(true));
    }
  }, [guessed]);

  const keyClicked = e => {
    const key = e.target.textContent;
    if (phrase.includes(key)) // adding new letter to guessed (if the phrase contains this letter)
      setGuessed(() => guessed + key);
    else
      setFails(() => fails + 1); // increasing the number of fails (user clicked bad letter)
    if (fails <= 5) {
      // updating keys states (disabling clicked keys( //
      const copy = keys;
      copy[key.charCodeAt(0) - 97] = phrase.includes(key);
      setKeys(copy);
    }
    else {
      // 'lost' alert - diabling all keys //
      alert("You lost!");
      setKeys(Array(26).fill(false));
    }
  }

  return (
    <div className="App">
    <header>
      <div style={{textAlign: 'center', fontSize: '50px', color: 'black'}}>Categories:</div>
      {categories.map(c => (
        <button onClick={changeCategory}>{c}</button>
      ))}
    </header>
      <Hangman fails={fails} />
      <Input phrase={phrase} guessed={guessed} />
      <Keyboard click={keyClicked} keys={keys} />
    </div>
  );
}

export default App;
