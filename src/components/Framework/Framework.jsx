import React, { useEffect } from "react";
import styles from "./Framework.module.css";

export default function About() {
  useEffect(() => {
    document.title = "home";
  }, []);

  return (
    <section className={styles.about}>
      <div className="text-center text-white w-100 px-4 ">
        <h2 className="text-uppercase fw-bolder mb-3">Start framework</h2>

        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className={`${styles.line} me-3`}></div>
          <i className="fa-solid fa-star fa-2x"></i>
          <div className={`${styles.line} ms-3`}></div>
        </div>

        <div className="w-100  ">
          <p className="lead text-start text-center">
            Graphic Artist - Web Designer - Illustrator
          </p>
        </div>
      </div>
    </section>
  );
}
