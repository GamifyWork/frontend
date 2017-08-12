import { h, Component } from 'preact'
import styles from './styles.css'

import services from '../../services'
import TaskInfo from '../../components/taskInfo'

export default class TaskRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      task: null
    }

    if (!props.id) {
      console.error('id is missing')
    }

    services.getTask(parseInt(props.id)).then(task => {
      this.setState({ loading: false, task })
    })
  }
  render(props, { loading, error, task }) {
    return (
      <div class={styles.task}>
        {loading ? <p>Loading...</p> : <TaskInfo {...task} />}
      </div>
    )
  }
}
