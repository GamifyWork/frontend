// {
//   id: 4,
//   error: null
// }

// {
//   id: null,
//   error: 'ACCOUNT_DUPLICATE'
// }

import { h } from 'preact'
import styles from './styles.css'
import Button from '../button'

const NewTemplate = ({ createTemplate }) => {
  let titleElem
  let descriptionElem
  let coinsElem

  const onSubmit = event => {
    event.preventDefault()

    const title = titleElem.value
    const description = descriptionElem.value
    const coins = parseInt(coinsElem.value, 10)

    titleElem.value = null
    descriptionElem.value = null
    coinsElem.value = null
    createTemplate({ title, description, coins })
  }

  return (
    <form class={styles.form} onSubmit={onSubmit}>
      <h2>New Task Template</h2>
      <label>
        Title
        <input ref={e => (titleElem = e)} />
      </label>
      <label for="description">Description</label>
      <textarea id="description" ref={e => (descriptionElem = e)} />
      <label>
        Coins
        <input type="number" ref={e => (coinsElem = e)} />
      </label>
      <Button type="submit" value="Create Template" />
    </form>
  )
}
export default NewTemplate
