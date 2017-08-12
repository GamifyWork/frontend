const initialState = {
  // logged_in -> account !== null

  // - account / profiles - //
  profiles: [],
  account: null,
  account_loading: false,
  account_error: null,

  // - tasks - //
  tasks: [],
  tasks_loading: false,
  tasks_error: null,

  fab: {
    icon: null,
    items: []
    // color
  },
  fab_shown: false,
  fab_open: false
}

// actions
/*
login -> account
create_account -> account


*/
