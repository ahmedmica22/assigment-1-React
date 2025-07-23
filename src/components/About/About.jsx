import React, { useEffect } from "react";
import styles from "./About.module.css";


export default function About() {
   useEffect(() => {
    document.title = "About";
  }, []);





  return (
    <section className={styles.about}>
      <div className="text-center text-white w-100 px-4 ">
        <h2 className="text-uppercase fw-bolder mb-3">about component</h2>

        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className={`${styles.line} me-3`}></div>
          <i className="fa-solid fa-star fa-2x"></i>
          <div className={`${styles.line} ms-3`}></div>
        </div>

        <div className="d-flex flex-column flex-md-row w-100 px-md-5">
          <div className="w-100 px-3">
            <p className="lead text-start">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="w-100 px-3">
            <p className="lead text-start">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
