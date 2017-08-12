import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Login from './index'

storiesOf('Login', module)
  .add('default', () => <Login />)
  .add('with action', () => <Login onLogin={action('onLogin')} />)
  .add('loading', () => <Login onLogin={action('onLogin')} loading={true} />)
  .add('error', () =>
    <Login
      onLogin={action('onLogin')}
      error={new Error('something went wrong')}
    />
  )
