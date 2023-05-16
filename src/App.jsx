import { useEffect, useState } from 'react';
import { ref, onValue , getDatabase} from 'firebase/database';
import { database } from './firebase.app';


function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const database = getDatabase();
    console.log(database);
  }, []);

  return (
    <div className="App">
      <h1>Real-time Database</h1>
      <p>Data: {data}</p>
    </div>
  );
}

export default App;
