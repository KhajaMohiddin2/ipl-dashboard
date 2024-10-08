// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    id,
    umpires,
    result,
    manofTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails
  return (
    <div className="latest-match-con">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-logo-con">
          <div className="team-details">
            <p className="latest-match-competing-team">{competingTeam}</p>
            <p className="latest-match-date">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
        </div>
        <hr />
        <div className="innings-details">
          <p className="latest-match-details-label">First Innings</p>
          <p className="latest-match-details-value">{firstInnings}</p>
          <p className="latest-match-details-label">Second Innings</p>
          <p className="latest-match-details-value">{secondInnings}</p>
          <p className="latest-match-details-label">Man Of The Match</p>
          <p className="latest-match-details-value">{manofTheMatch}</p>
          <p className="latest-match-details-label">Umpires</p>
          <p className="latest-match-details-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
