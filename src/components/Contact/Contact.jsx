import React, { useEffect } from "react";
import styles from "./Contact.module.css";


export default function Contact() {

   useEffect(() => {
    document.title = "Contact";
  }, []);



  return (
    <section className={styles.contact}>
      <div className="container text-center">
        <h2 className={`${styles.title} text-uppercase fw-bolder mb-3`}>
          Contact Section
        </h2>

        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className={`${styles.line} me-3`}></div>
          <i className="fa-solid fa-star fa-2x text-dark"></i>
          <div className={`${styles.line} ms-3`}></div>
        </div>

        <form className="mx-auto w-75 text-start">
          <label className={`${styles.label}`} htmlFor="username">
            userName
          </label>
          <input
            id="username"
            type="text"
            className={`form-control mb-4 ${styles.input}`}
          />

          <label className={`${styles.label}`} htmlFor="userage">
            userAge
          </label>
          <input
            id="userage"
            type="number"
            className={`form-control mb-4 ${styles.input}`}
          />

          <label className={`${styles.label}`} htmlFor="email">
            userEmail
          </label>
          <input
            id="email"
            type="email"
            className={`form-control mb-4 ${styles.input}`}
          />

          <label className={`${styles.label}`} htmlFor="password">
            userPassword
          </label>
          <input
            id="password"
            type="password"
            className={`form-control mb-4 ${styles.input}`}
          />

          <button className="btn btn-success">send Message</button>
        </form>
      </div>
    </section>
  );
}
