import { h } from 'preact'
import { Link } from 'preact-router'

const Register = ({ loading, error }) => {
  let content
  if (loading) {
    content = <p>Loading...</p>
  } else if (error) {
    content = (
      <p>
        Error: {JSON.stringify(error, null, 2)}
      </p>
    )
  } else {
    content = (
      <form>
        <label>
          Email:
          <input />
        </label>
        <label>
          Password:
          <input type="password" />
        </label>
        <Link href="/login">Already have an Account?</Link>
      </form>
    )
  }
  return (
    <div>
      {content}
    </div>
  )
}

export default Register
