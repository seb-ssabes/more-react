


export default function User({user}) {
  const {avatar_url, name, location, bio, followers, following, public_repos, login, created_at} = user

  const createDate = new Date(created_at)

  return (
    <div className="user-card">
      <img src={avatar_url} alt="user" className="avatar" />

      <h2 className="username">
        <a href={`https://github.com/${login}`} target="_blank" rel="noreferrer">
          {name || login}
        </a>
      </h2>

      <p className="join-date">
        Joined on {`${createDate.getDate()} ${createDate.toLocaleString("en-us", { month: "short" })} ${createDate.getFullYear()}`}
      </p>

      <p className="bio">{bio || "This user has no bio."}</p>

      <div className="info-grid">
        <div><p>Location</p><span>{location || "Unknown"}</span></div>
        <div><p>Repos</p><span>{public_repos}</span></div>
        <div><p>Followers</p><span>{followers}</span></div>
        <div><p>Following</p><span>{following}</span></div>
      </div>
    </div>
  )
}
