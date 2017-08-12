import { h } from 'preact'
import styles from './styles.css'

import Task from '../task'

const Tasks = ({ tasks = [] }) => {
  const empty = <p style={{ padding: '10px 20px' }}>No Tasks yet.</p>
  return (
    <div class={styles.tasks}>
      {tasks.length === 0 ? empty : tasks.map(task => <Task {...task} />)}
    </div>
  )
}
export default Tasks
