import { h } from 'preact'
import { Link } from 'preact-router'
import styles from './styles.css'

import AddIcon from '../icons/add'

const Fab = ({ items = [], open, onClick }) =>
  <div class={`${styles.container} ${open ? styles.openContainer : ''}`}>
    <div class={styles.items}>
      {items.map(item =>
        <Link class={styles.smallButton} href={item.path}>
          {item.icon}
        </Link>
      )}
    </div>
    <button onClick={onClick} class={styles.button}>
      <AddIcon />
    </button>
  </div>
export default Fab
