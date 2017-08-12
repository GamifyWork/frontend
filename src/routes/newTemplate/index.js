import { h, Component } from 'preact'
import { route } from 'preact-router'
import NewTemplate from '../../components/newTemplate'
import services from '../../services'

export default class NewTemplateRoute extends Component {
  constructor(props) {
    super(props)
  }
  createTemplate = data => {
    services.createTemplate(data).then(res => {
      route('/tasks')
    })
  }
  render() {
    return (
      <div style={{ padding: '60px 20px' }}>
        <NewTemplate createTemplate={this.createTemplate} />
      </div>
    )
  }
}
