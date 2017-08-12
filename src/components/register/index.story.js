import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Register from './index'

storiesOf('Register', module)
  .add('default', () => <Register />)
  .add('with action', () => <Register onRegister={action('onRegister')} />)
  .add('loading', () =>
    <Register onRegister={action('onRegister')} loading={true} />
  )
  .add('error', () =>
    <Register
      onRegister={action('onRegister')}
      error={new Error('something went wrong')}
    />
  )
