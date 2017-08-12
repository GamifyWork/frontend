import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import Coins from './index'

storiesOf('Coins', module)
  .add('default', () => <Coins />)
  .add('20 Coins', () => <Coins amount={20} />)
