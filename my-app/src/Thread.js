import React from 'react'
import styles from './Thread.module.scss'

const Thread = ({ thread }) => (
  <div className={styles.threadContainer}>
    <h2 className={styles.threadTitle}>{thread.title}</h2>
  </div>
)
export default Thread
