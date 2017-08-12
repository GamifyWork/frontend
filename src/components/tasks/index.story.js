import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import Tasks from './index'

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

storiesOf('Tasks', module)
  .add('default', () => <Tasks />)
  .add('empty', () => <Tasks tasks={[]} />)
  .add('2 Items', () => <Tasks tasks={tasks} />)
