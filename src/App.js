import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DataTable from './components/DataTable';


const App = () => {
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

// Fetching data using Axios
useEffect(() => {
  const fetchData = async () => {
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(response.data);
      setLoading(false);
    }
    catch (error){
      setError(error);
      setLoading(false);
    }
  };

  fetchData();
}, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return(
    <div>
      <h1>User Data Table</h1>
      <DataTable data={data} />
    </div>
  );
};


export default App;