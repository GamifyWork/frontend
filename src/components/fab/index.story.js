import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import Fab from './index'

import ChildIcon from '../icons/child'

storiesOf('Fab', module).add('default', () => <Fab />).add('with items', () =>
  <Fab
    open
    items={[
      {
        name: 'Children Profile',
        path: '/new-profile',
        icon: ChildIcon
      }
    ]}
  />
)
