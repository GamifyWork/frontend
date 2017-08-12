import { h } from 'preact'
import styles from './styles.css'

import Coins from '../coins'

const TaskInfo = ({ coins, title, description }) =>
  <div class={styles.task}>
    <div class={styles.header}>
      <p class={styles.title}>
        {title}
      </p>
      <div class={styles.right}>
        <Coins amount={coins} />
      </div>
    </div>
    <p class={styles.description}>
      {description}
    </p>
  </div>
export default TaskInfo
