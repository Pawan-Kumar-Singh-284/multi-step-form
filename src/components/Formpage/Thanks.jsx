import React from 'react'
import styles from "./Thanks.module.css"
import thank from "../../assets/images/icon-thank-you.svg"

function Thanks() {
  return (
    <>
      <div className={styles.thankYouWrapper}>
        <img src={thank} alt='thank you'/>
        <h1>Thank you!</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </>
  )
}

export default Thanks