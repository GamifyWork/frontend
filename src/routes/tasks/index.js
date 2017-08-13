import { h, Component } from 'preact'
import { connect } from 'preact-redux'
import styles from './styles.css'

import services from '../../services'
import Tasks from '../../components/tasks'

class TasksRoute extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   loading: true,
    //   error: null,
    //   tasks: []
    // }

    // services.__getAllTasks__()

    services.getTasks().then(tasks => {
      // this.setState({ loading: false, tasks })
    })
  }
  render(props, state) {
    return (
      <div class={styles.tasks}>
        <Tasks tasks={props.tasks} />
      </div>
    )
  }
}

export default connect(state => {
  let tasks
  if (state.role === 'PARENT') {
    tasks = state.tasks
  } else {
    tasks = state.tasks_per_profile[String(state.profile_id)]
  }
  return {
    tasks
  }
})(TasksRoute)
