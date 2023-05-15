import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const database = firebase.database();
    const dataRef = database.ref('data');

    dataRef.on('value', (snapshot) => {
      const value = snapshot.val();
      setData(value);
    });
  }, []);

  return (
    <div className="App">
      <h1>Real-time Database</h1>
      <p>Data: {data}</p>
    </div>
  );
}

export default App;
