import { createStore } from 'redux'

let ACTIONS = {
  CHANGE_ACCOUNT: ({ account_id, email, profiles, ...state }, action) => ({
    account_id: action.account_id,
    profile_id: null,

    email: action.email,
    name: null,

    profiles: action.profiles || [],
    ...state
  }),
  CHANGE_PROFILE: ({ profile_id, name, role, ...state }, action) => ({
    profile_id: action.profile_id,
    name: action.name,
    role: action.role,
    ...state
  })

  // ADD_TODO: ({ todos, ...state }, { text }) => ({
  // 	todos: [...todos, {
  // 		id: Math.random().toString(36).substring(2),
  // 		text
  // 	}],
  // 	...state
  // }),

  // REMOVE_TODO: ({ todos, ...state }, { todo }) => ({
  // 	todos: todos.filter( i => i!==todo ),
  // 	...state
  // })
}

const INITIAL = {
  account_id: null,
  profile_id: null,

  email: null,
  name: null,
  role: null,

  profiles: []
}

export default createStore(
  (state, action) =>
    action && ACTIONS[action.type]
      ? ACTIONS[action.type](state, action)
      : state,
  INITIAL,
  window.devToolsExtension && window.devToolsExtension()
)
