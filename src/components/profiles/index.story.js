import { h } from 'preact'
import { storiesOf } from '@storybook/react'
import Profiles from './index'

const profiles = [
  {
    id: 'p|1',
    name: 'Parent',
    role: 'PARENT'
  },
  {
    id: 'p|2',
    name: 'Child 1',
    role: 'CHILD'
  }
]
const manyProfiles = [
  ...profiles,
  {
    id: 'p|3',
    name: 'Child 2',
    role: 'CHILD'
  },
  {
    id: 'p|4',
    name: 'Child 3',
    role: 'CHILD'
  },
  {
    id: 'p|5',
    name: 'Child 4',
    role: 'CHILD'
  },
  {
    id: 'p|6',
    name: 'Second Parent',
    role: 'PARENT'
  }
]
storiesOf('Profiles', module)
  .add('default', () => <Profiles />)
  .add('multiple', () => <Profiles profiles={profiles} />)
  .add('many', () => <Profiles profiles={manyProfiles} />)
