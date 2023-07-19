import './App.css';
import React, { useState, useEffect } from 'react';
import { db } from './config/firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

function App() {
  const [website, setWebsite] = useState([]);

  // Reference to the "Websites" collection in Firestore
  const websitesCollection = collection(db, "Websites");

  // Function to update the status of a website
  const updateStatus = async (status, id) => {
    console.log(status)
    const usedoc = doc(db, "Websites", id);
    if (status === 'available') {
      status = "allocated";
    }
    else{
      alert("this site already selled")
    }

    console.log(status);
    await updateDoc(usedoc, { Status: status });

  };

  useEffect(() => {
    // Fetch the websites data from Firestore
    const buyWeb = async () => {
      const data = await getDocs(websitesCollection);
      // Store the fetched data in the website state
      setWebsite(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    buyWeb();
  }, []);

  return (
    <div className="App">
      {website.map((web) => (
        <div key={web.id}>
          <h1>Status: {web.Status}</h1>
          <button onClick={() => updateStatus(web.Status, web.id)}>Buy</button>
        </div>
      ))}
    </div>
  );
}

export default App;
