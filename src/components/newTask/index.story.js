import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import NewTask from './index'

storiesOf('NewTask', module)
  .add('default', () => <NewTask />)
  .add('with children & templates', () =>
    <NewTask
      templates={[
        { title: 'Zimmer aufräumen', id: 1 },
        { title: 'Spülmaschine ausräumen', id: 2 }
      ]}
      children={[{ name: 'Child 1', id: 1 }, { name: 'Child 2', id: 2 }]}
      createTask={action('createTask')}
    />
  )
