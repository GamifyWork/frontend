import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import Task from './index'

const tasks = [
  {
    id: 3,
    finished: null,
    verified: null,

    task_template_id: 1,
    title: 'Zimmer aufräumen',
    description: 'beschreibung',
    coins: 15
  },
  {
    id: 4,
    finished: null,
    verified: null,

    task_template_id: 2,
    title: 'Spülmaschine ausräumen',
    description: 'beschreibung',
    coins: 20
  }
]

storiesOf('Task', module)
  .add('default', () => <Task />)
  .add(tasks[0].title, () => <Task {...tasks[0]} />)
  .add(tasks[1].title, () => <Task {...tasks[1]} />)
