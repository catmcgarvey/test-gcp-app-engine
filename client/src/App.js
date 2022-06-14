import React, { useEffect, useState } from "react"
import config from './config'

const UsingFetch = () => {
  const [users, setUsers] = useState([])
  console.log(`${config.API_URL}/test`)
  const fetchData = () => {
    fetch(`${config.API_URL}/test`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
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