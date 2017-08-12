import { h, Component } from 'preact'
import styles from './styles.css'
import services from '../../services'
import { route } from 'preact-router'

import Profiles from '../../components/profiles'
const profiles = [
  {
    name: 'Parent'
  },
  {
    name: 'First Child'
  },
  {
    name: 'Second Child'
  }
]

export default class ProfilesRoute extends Component {
  changeProfile = profile => {
    services.changeProfile(profile)

    route('/tasks')
  }
  render() {
    return (
      <div class={styles.profiles}>
        <Profiles profiles={profiles} changeProfile={this.changeProfile} />
      </div>
    )
  }
}
