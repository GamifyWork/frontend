import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import { Link } from 'preact-router/match'
import styles from './styles.css'
import services from '../../services'

const User = ({ name, email, profiles = [] }) =>
  <div class={styles.dropdown}>
    <div class={styles.dropdownHover}>
      <span class={styles.name}>
        {name}
      </span>
      <span class={styles.email}>
        {email}
      </span>
    </div>
    <div class={styles.dropdownList}>
      {profiles.map(profile =>
        <a
          onClick={event => {
            event.preventDefault()
            services.changeProfile(profile)
          }}
          href={'#profile-' + profile.id}
        >
          {profile.name}
        </a>
      )}
    </div>
  </div>

class Header extends Component {
  render({ name, email, profiles }) {
    console.log('render header ', this.props)
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
          <User name={name} email={email} profiles={profiles} />
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

export default connect(state => state)(Header)
