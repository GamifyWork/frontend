import { h, Component } from 'preact'
// import styles from './styles';
import { connect } from 'preact-redux'
import { route } from 'preact-router'
import NewTask from '../../components/newTask'
import services from '../../services'

class NewTaskRoute extends Component {
  constructor(props) {
    super(props)

    this.state = {
      template_id: null,
      children_state: {},

      templates_loading: true,
      templates_error: null,
      templates_data: []
    }

    services.getTemplates().then(templates_data => {
      this.setState({ templates_data, templates_loading: false })
    })
  }
  changeTemplate = template_id => {
    this.setState({ template_id })
  }
  changeChildren = (id, checked) => {
    this.setState({
      children_state: {
        ...this.state.children_state,
        [id]: checked
      }
    })
  }
  createTask = () => {
    const { template_id, children_state } = this.state
    const children_ids = Object.keys(children_state)
      .filter(key => children_state[key])
      .map(key => parseInt(key))

    if (!template_id) {
      console.error('template must be set')
    }
    if (children_ids.length === 0) {
      console.error('atlead one children must be selected')
    }
    services
      .createTask({
        template_id,
        children_ids
      })
      .then(res => {
        route('/tasks')
      })
  }
  render(props, { template_id, children_state, templates_data }) {
    const templates = templates_data.map(template => {
      return {
        ...template,
        checked: template.id === template_id
      }
    })

    // const templates = [
    //   { title: 'Zimmer aufräumen', id: 1 },
    //   { title: 'Spülmaschine ausräumen', id: 2 }
    // ]
    // const children = [{ name: 'Child 1', id: 1 }, { name: 'Child 2', id: 2 }]

    return (
      <div style={{ padding: '60px 20px' }}>
        <NewTask
          templates={templates}
          children={props.children.map(child => {
            return {
              ...child,
              checked: children_state[child.id]
            }
          })}
          createTask={this.createTask}
          changeTemplate={this.changeTemplate}
          changeChildren={this.changeChildren}
        />
      </div>
    )
  }
}
export default connect(state => ({
  children: state.profiles.filter(profile => profile.role !== 'PARENT')
}))(NewTaskRoute)
