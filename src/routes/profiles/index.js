import { h, Component } from 'preact'
import styles from './styles.css'
import services from '../../services'
import { route } from 'preact-router'
import { connect } from 'preact-redux'

import Profiles from '../../components/profiles'

class ProfilesRoute extends Component {
  changeProfile = profile => {
    services.changeProfile(profile)

    route('/tasks')
  }
  render() {
    return (
      <div class={styles.profiles}>
        <Profiles
          profiles={this.props.profiles}
          changeProfile={this.changeProfile}
        />
      </div>
    )
  }
}
export default connect(state => ({
  profiles: state.profiles
}))(ProfilesRoute)
