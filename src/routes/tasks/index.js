import { h, Component } from 'preact'
import styles from './styles.css'

import services from '../../services'
import Tasks from '../../components/tasks'

export default class TasksRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      tasks: []
    }

    services.__getAllTasks__()

    services.getTasks().then(tasks => {
      this.setState({ loading: false, tasks })
    })
  }
  render(props, state) {
    return (
      <div class={styles.tasks}>
        <Tasks tasks={state.tasks} />
      </div>
    )
  }
}
