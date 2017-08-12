import { h, Component } from 'preact'
import { Router, route } from 'preact-router'
import { Provider, connect } from 'preact-redux'

import Header from './header'
import Home from '../routes/home'
import Profile from '../routes/profile'
import LoginRoute from '../routes/login'
import TasksRoute from '../routes/tasks'
import TaskRoute from '../routes/task'
import Fab from './fab'
import ChildIcon from './icons/child'
import TaskTemplateIcon from './icons/template'
import TaskIcon from './icons/task'

import NewTaskRoute from '../routes/newTask'
import NewTemplateRoute from '../routes/newTemplate'
import ProfilesRoute from '../routes/profiles'

import services from '../services'
import store from '../state/store'

// import Home from 'async!./home';
// import Profile from 'async!./profile';

class AuthRoute extends Component {
  componentWillMount() {
    this.allowed = services.isAuthenticated
    if (!this.allowed) route('/login')
  }
  render({ route: Route, ...props }) {
    return (
      <div>
        {this.allowed && <Route {...props} />}
      </div>
    )
  }
}

const NotFound = () => <p>Not Found - 404</p>

const fabChildren = [
  { name: 'Children Profile', icon: <ChildIcon />, path: '/new/profile' },
  { name: 'Task Template', icon: <TaskTemplateIcon />, path: '/new/template' },
  { name: 'Task', icon: <TaskIcon />, path: '/new/task' }
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  /** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
  handleRoute = e => {
    this.currentUrl = e.url
  }

  render(props, { open }) {
    return (
      <div id="app">
        <Header />
        {props.profile_id && props.role === 'PARENT'
          ? <Fab
              open={open}
              onClick={() => this.setState({ open: !open })}
              items={fabChildren}
            />
          : null}

        <Router onChange={this.handleRoute}>
          <Home path="/" />

          <LoginRoute path="/login" />

          <AuthRoute path="/tasks" route={TasksRoute} />
          <AuthRoute path="/task/:id" route={TaskRoute} />

          <AuthRoute path="/new/task" route={NewTaskRoute} />
          <AuthRoute path="/new/template" route={NewTemplateRoute} />

          <AuthRoute path="/profiles" route={ProfilesRoute} />

          <NotFound default type="404" />
        </Router>

        <div
          onClick={() => {
            services.__fakeLogin__()
            route('/profiles')
          }}
          style={{ position: 'absolute', bottom: 0, left: 0 }}
        >
          Login
        </div>
      </div>
    )
  }
}
const AppWithData = connect(state => state)(App)
export default () =>
  <Provider store={store}>
    <AppWithData />
  </Provider>
