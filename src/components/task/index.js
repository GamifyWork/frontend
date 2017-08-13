import { h } from 'preact'
import { Link } from 'preact-router'
import styles from './styles.css'

import Coins from '../coins'

const Task = ({ title, description, coins, task_id, profile_id }) =>
  <Link class={styles.task} href={'/task/' + task_id}>
    <p class={styles.title}>
      {title} (profile #{profile_id})
    </p>
    <div class={styles.right}>
      <Coins amount={coins} />
    </div>
  </Link>
export default Task
