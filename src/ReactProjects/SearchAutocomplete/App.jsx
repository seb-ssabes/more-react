import { useEffect, useState } from "react"
import Suggestions from "./Suggestions"

export default function Autocomplete() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [error, setError] = useState(null)
  const [searchParam, setSearchParam] = useState("")
  const [showDropdown, setShowDropdown] = useState(false)
  const [filteredUsers, setFilteredUsers] = useState([])

  async function fetchUsersList() {
    try {
      setLoading(true)
      const response = await fetch('https://dummyjson.com/users')
      const data = await response.json()
      if (data && data.users && data.users.length) {
        setUsers(data.users.map(userItem => userItem.firstName))
        setLoading(false)
        setError(null)
      }

    }catch(error) {
      setLoading(false)
      console.log(error)
      setError(error)
    }
  }

  console.log(error)


  function handleChange(event) {
    const query = event.target.value.toLowerCase()
    setSearchParam(query)

    if (query.length > 1){
      const filteredData = users && users.length
      ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
      : []
      setFilteredUsers(filteredData)
      setShowDropdown(true)
    } else {
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    fetchUsersList()
  }, [])

  function handleClick(event) {
    console.log(event.target.innerText)
    setShowDropdown(false)
    setSearchParam(event.target.innerText)
    setFilteredUsers([])
  }

  console.log(users, filteredUsers)

  return (
    <div className="autocomplete-container">
      <h2 className="title">Autocomplete</h2>
      {
        loading ? (
          <h3>Loading data. Please wait.</h3>
        ) : (
          <input
            className="search-input"
            name="search-users"
            placeholder="Search user here"
            value={searchParam}
            onChange={handleChange}
          />
        )
      }

      {
        showDropdown && (
          <Suggestions handleClick={handleClick} data={filteredUsers} />
        )
      }
    </div>
  )

}
