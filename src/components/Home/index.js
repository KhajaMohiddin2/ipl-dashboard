// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {teamsData: [], isLoading: true}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))
    this.setState({teamsData: updatedData, isLoading: false})
  }

  renderTeamsList = () => {
    const {teamsData} = this.state
    return (
      <ul className="list-teams">
        {teamsData.map(each => (
          <TeamCard each={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="home-con">
        <div className="teams-list-con">
          <div className="home-header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-heading">IPL DASHBOARD</h1>
          </div>
          {isLoading ? (
            <div testid="loader" className="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            this.renderTeamsList()
          )}
        </div>
      </div>
    )
  }
}
export default Home
