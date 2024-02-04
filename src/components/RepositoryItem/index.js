import './index.css'

const RepositoryItem = props => {
  const {eachRepository} = props

  const {name, issuesCount, forksCount, starsCount, avatarUrl} = eachRepository

  return (
    <li className="li-item">
      <img className="avatar-image" alt="avatar" src={avatarUrl} />
      <p className="name">{name}</p>
      <div className="stars-count">
        <img
          className="icons-size"
          alt="stars"
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
        />
        <p className="para-count">{starsCount} stars</p>
      </div>
      <div className="stars-count">
        <img
          className="icons-size"
          alt="forks"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
        />
        <p className="para-count">{forksCount} forks</p>
      </div>
      <div className="stars-count">
        <img
          className="icons-size"
          alt="open issues"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
        />
        <p className="para-count">{issuesCount} count</p>
      </div>
    </li>
  )
}

export default RepositoryItem
