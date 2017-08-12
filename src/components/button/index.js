// import React from 'react'
import { h } from 'preact'
import styles from './styles.css'

const Button = ({ type = 'button', children, props }) => {
  if (type === 'button') {
    return (
      <button class={styles.button} {...props}>
        {children}
      </button>
    )
  } else if (type === 'submit') {
    return <input type="submit" class={styles.button} {...props} />
  }
}

export default Button
