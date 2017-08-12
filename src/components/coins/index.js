import { h } from 'preact'
import styles from './styles.css'

const Coins = ({ amount = 0 }) =>
  <div class={styles.coins}>
    {amount} Coins
  </div>
export default Coins
