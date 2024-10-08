// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchData
  const getMatchStatusclassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'
  const matchStatusclassName = `match-status ${getMatchStatusclassName(
    matchStatus,
  )}`
  return (
    <li className="recent-match-card">
      <img
        src={competingTeamLogo}
        className="recent-match-img"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusclassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
