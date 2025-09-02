import { useEffect, useState } from "react"
import User from "./User"


export default function ProfileFetch() {
  const [userName, setUserName] = useState("seb-ssabes")
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)

  function handleSubmit() {
    fetchProfileData()
  }

  async function fetchProfileData() {
    setLoading(true)

    const response = await fetch(`https://api.github.com/users/${userName}`)
    const data = await response.json()
    if (data) {
      setUserData(data)
      console.log(data)
      setLoading(false)
      setUserName("")
    }
  }

  useEffect(() => {
    fetchProfileData()
  }, [])

  if (loading) {
    return <h1>Loading profile data</h1>
  }

  return (
    <div className="profile-container">
      <div className="input-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            name="search-by-user"
            type="text"
            placeholder="Search GitHub Username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      {userData !== null ? <User user={userData}/> : null}
    </div>
  )
}
