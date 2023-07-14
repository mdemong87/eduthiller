import React from 'react'
import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loadingWrp}>

    <div className={`${styles.loader} ${styles.book}`}>
        <figure className={styles.page}>

        </figure>
        <figure className={styles.page}>

        </figure>
        <figure className={styles.page}>

        </figure>
    </div>

</div >
  )
}
