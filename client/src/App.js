import React, { useEffect, useState } from "react"
import axios from 'axios';
import config from './config'
const UsingFetch = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    let uri = `${config.API_URL}/test`;
    console.log(uri)
    axios.get(uri).then(response => {
      setUsers(response.data);
    }).catch((error) => {
      console.log(error);
    });
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UsingFetch