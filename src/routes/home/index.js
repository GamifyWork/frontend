import { h, Component } from 'preact'
import { Link } from 'preact-router'
import styles from './styles.css'

export default class Home extends Component {
  render() {
    return (
      <div class={styles.home}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    )
  }
}
