import { h, Component } from 'preact'
import { Link } from 'preact-router/match'
import styles from './styles.css'
import services from '../../services'

const User = ({ account, profile }) =>
  <span>
    <span>
      {account.email}
    </span>
    <span>
      {profile.name}
    </span>
  </span>

export default class Header extends Component {
  render() {
    console.log('render header')
    return (
      <header class={styles.header}>
        <h1>GamifyWork</h1>
        <nav>
          <Link activeClassName={styles.active} href="/">
            Home
          </Link>
          <Link activeClassName={styles.active} href="/tasks">
            Tasks
          </Link>
          {/* <Link activeClassName={styles.active} href="/profile/john">
            {services.isAuthenticated
              ? <User
                  account={services.currentAccount}
                  profile={services.currentProfile}
                />
              : 'Not Logged in'}
          </Link> */}
        </nav>
      </header>
    )
  }
}
