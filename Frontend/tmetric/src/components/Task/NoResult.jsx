import React from 'react'
import styles from "../../Styles/NoResult.module.css"

const NoResult = () => {
  return (
    <div className={styles.pagewrapper}>
        <div className={styles.imgContBox}>
            <div className={styles.imageCont}>
                <img width="100%" height="100%" src="https://app.tmetric.com/images/empty_table.svg" alt="" />
            </div>
        </div>
        <div className={styles.TextCont}>
            <h2 className={styles.Heading}>Nothing matches your filter.</h2>
            <h5>Try different filter settings.</h5>
        </div>
    </div>
  )
}

export default NoResult