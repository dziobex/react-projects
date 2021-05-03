import './App.css';

import { ItemsProvider } from './components/ItemsContext';
import AddItem from './components/AddItem';

function App() {
  return (
    <ItemsProvider>
      <div className="App">
        <AddItem />
      </div>
    </ItemsProvider>
  );
}

export default App;
