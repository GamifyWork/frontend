import { h, Component } from 'preact'
import styles from './styles.css'
import { route } from 'preact-router'

import services from '../../services'
import Login from '../../components/login'

export default class LoginRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: null
    }
  }
  onLogin = ({ email, password }) => {
    this.setState({ loading: true })

    services
      .authenticate({ email, password })
      .then(res => {
        this.setState({ loading: false, error: null })
        route('/profiles')
      })
      .catch(err => {
        this.setState({ loading: false, error: err })
      })
  }
  render(props, state) {
    return (
      <div class={styles.login}>
        <Login onLogin={this.onLogin} {...state} />
      </div>
    )
  }
}
