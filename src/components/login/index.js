import { h } from 'preact'
import styles from './styles.css'

import { Link } from 'preact-router'
import Button from '../button'
import LoadingIcon from '../icons/loading'

const Login = ({ onLogin, loading, error }) => {
  let emailInput
  let passwordInput

  const onSubmit = event => {
    event.preventDefault()

    const email = emailInput.value
    const password = passwordInput.value

    onLogin({ email, password })
  }

  let content
  if (loading) {
    content = (
      <div class={`${styles.container} ${styles.loadingContainer}`}>
        <LoadingIcon />
        <p>Loading...</p>
      </div>
    )
  } else if (error) {
    content = (
      <div class={styles.container}>
        <p>
          Error {JSON.stringify(error, null, 2)}
        </p>
      </div>
    )
  } else {
    content = (
      <form onSubmit={onSubmit} class={styles.container}>
        <label class={`${styles.block} ${styles.label}`}>
          Email:
          <input
            class={styles.block}
            ref={e => (emailInput = e)}
            type="email"
          />
        </label>
        <label class={`${styles.block} ${styles.label}`}>
          Password:
          <input
            class={styles.block}
            ref={e => (passwordInput = e)}
            type="password"
          />
        </label>
        <Button type="submit" value="Login" />
        <Link href="/register">Don't have an Account?</Link>
      </form>
    )
  }
  return (
    <div class={styles.login}>
      {content}
    </div>
  )
}
export default Login
