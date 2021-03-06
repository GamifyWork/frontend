import store from '../state/store'

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

class Service {
  constructor(baseUrl) {
    this._basebaseUrl = baseUrl

    this._account
    this._profile

    this._tasks
    this._templates
  }
  set account(account) {
    this._account = account
    store.dispatch({
      type: 'CHANGE_ACCOUNT',
      account_id: account.id,
      email: account.email,
      profiles: account.profiles
    })
  }
  set profile(profile) {
    this._profile = profile
    store.dispatch({
      type: 'CHANGE_PROFILE',
      profile_id: profile.id,
      name: profile.name,
      role: profile.role
    })
  }

  get isAuthenticated() {
    return this._account ? true : false
  }
  get currentAccount() {
    return this._account
  }
  get currentProfile() {
    return this._profile
  }
  __fakeLogin__() {
    this.account = {
      id: 1,
      email: 'test@example.com',
      profiles: [
        {
          id: 1,
          name: 'Parent',
          role: 'PARENT'
        },
        {
          id: 2,
          name: 'Child 1',
          role: 'CHILD'
        },
        {
          id: 3,
          name: 'Child 2',
          role: 'CHILD'
        }
      ]
    }
    // this._account = { id: 1 }
    // this._profile = { id: 1 }
    this.profile = {
      id: 1,
      name: 'Parent',
      role: 'PARENT'
    }
  }

  authenticate() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const account = {
          id: 1234,
          email: 'test@example.com'
        }

        this._account = account
        resolve(account)
      }, 1000)
    })
  }
  changeProfile(profile) {
    // this._profile = profile
    this.profile = profile
  }

  getAccount(id) {
    fetch(this._basebaseUrl + '/account/' + id)
      .then(res => res.json())
      .then(account => {
        // console.log(account)
      })
  }
  getTasks() {
    return new Promise((resolve, reject) => {
      if (this._tasks) {
        return resolve(this._tasks)
      }
      store.dispatch({
        type: 'START_LOADING_TASKS'
      })

      return fetch(this._basebaseUrl + '/task')
        .then(res => res.json())
        .then(tasks => {
          this._tasks = tasks

          store.dispatch({
            type: 'FINISH_LOADING_TASKS',
            tasks
          })

          return resolve(tasks)
        })
        .catch(reject)
    })
  }
  getTask(id) {
    return new Promise((resolve, reject) => {
      if (this._tasks) {
        return resolve(this._tasks.find(task => task.task_id === id))
      }
      return this.getTasks().then(() => {
        return resolve(this._tasks.find(task => task.task_id === id))
      })
    })
  }
  createTask({ template_id, children_ids }) {
    if (!this._templates) return new Error('templates need to be set')
    const template = this._templates.find(
      template => template.id === template_id
    )
    this._tasks = null

    const createOneTask = profile_id => {
      const id = getRandomInt(0, 1000)

      const url = this._basebaseUrl + '/task/'
      const body = JSON.stringify({
        ...template,

        // TODO: profile_id
        profile_id,

        id,

        task_id: id,
        task_template_id: template_id,

        // title: 'Task: ' + template_id,
        // description: 'xxx',
        // coins: 20,
        finished: null,
        verified: null
      })

      return fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body
      })
        .then(res => res.json())
        .then(res => {
          // console.log(res)
          return res
        })
        .catch(console.error)
    }
    return Promise.all(children_ids.map(id => createOneTask(id)))
  }
  getTemplates() {
    const url = this._basebaseUrl + '/template'
    return new Promise((resolve, reject) => {
      if (this._templates) {
        return resolve(this._templates)
      }

      fetch(url).then(res => res.json()).then(templates => {
        this._templates = templates
        resolve(templates)
      })
    })
  }
  createTemplate({ title, description, coins }) {
    this._templates = null

    const id = getRandomInt(0, 1000)

    const url = this._basebaseUrl + '/template/'
    // const body = JSON.stringify({ ...data, id })
    const body = JSON.stringify({
      // TODO: account_id
      id,
      title,
      description,
      coins
    })

    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body
    })
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        return res
      })
      .catch(console.error)
  }
  __getAllTasks__() {
    if (!this._account || !this._profile) {
      return new Error('account and profile need to be set')
    }

    const rawTasks = [
      {
        id: 1,
        task_template_id: 2,
        title: 'Die Tribüne aufräumen',
        description: 'all die becher entfernen',
        coins: 16,
        finished: null,
        verified: null,
        profile_id: 1 // <--
      },
      {
        id: 1,
        task_template_id: 2,
        title: 'Die Tribüne aufräumen',
        description: 'all die becher entfernen',
        coins: 16,
        finished: null,
        verified: null,
        profile_id: 2 // <--
      }
    ]

    const tasks = {}
    rawTasks.forEach(task => {
      if (!tasks[task.profile_id]) tasks[task.profile_id] = []

      tasks[task.profile_id].push(task)
    })

    // console.log(tasks)
    return tasks
  }
}

const local = 'http://localhost:3000'
const network = 'http://192.168.1.130:3000'
export default new Service(local)
