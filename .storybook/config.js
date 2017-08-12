import { configure } from '@storybook/react'

const requires = require.context('../src', true, /story\.jsx?$/)

function loadStories() {
  require('../src/stories/index')
  requires.keys().forEach(requires)
}

configure(loadStories, module)
