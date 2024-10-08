// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {each} = props
  const {name, id, teamImageUrl} = each
  return (
    <li className="team-card">
      <Link className="link-item" to={`/team-matches/${id}`}>
        <img src={teamImageUrl} alt={name} className="teamImg" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
