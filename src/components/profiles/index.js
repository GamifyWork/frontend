import { h } from 'preact'
import styles from './styles.css'

const noProfiles = <p style={{ padding: '10px 20px' }}>No Profiles yet.</p>

const Profile = ({ name, onClick }) =>
  <div class={styles.profile} onClick={onClick}>
    <div class={styles.info}>
      <p>
        {name}
      </p>
    </div>
    <img src={`https://api.adorable.io/avatars/100/${name}@adorable.io.png`} />
  </div>
const Profiles = ({ profiles = [], changeProfile }) => {
  const onClick = profile => event => {
    changeProfile(profile)
  }
  return (
    <div class={styles.profiles}>
      <h2>Profiles:</h2>
      <div class={styles.list}>
        {profiles.length === 0
          ? noProfiles
          : profiles.map(profile =>
              <Profile
                key={profile.id}
                {...profile}
                onClick={onClick(profile)}
              />
            )}
      </div>
    </div>
  )
}
export default Profiles
