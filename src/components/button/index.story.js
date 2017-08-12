// import React from 'react'
import { h } from 'preact'
// import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './index'

storiesOf('Button', module)
  .add('default', () => <Button />)
  .add('with text', () => <Button>Text</Button>)
