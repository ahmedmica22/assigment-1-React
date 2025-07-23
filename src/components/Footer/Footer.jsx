  import React from "react";
  import styles from "./Footer.module.css";

  export default function Footer() {
    return (
      <footer className={styles.Footer}>
        <div className="container-fluid px-5 text-white text-center">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h3>LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            <div className="col-md-4 mb-3">
              <h3>AROUND THE WEB</h3>
              <div className={styles.icons}>
                <i className="fab fa-facebook mx-2"></i>
                <i className="fab fa-twitter mx-2"></i>
                <i className="fab fa-linkedin-in mx-2"></i>
                <i className="fas fa-globe mx-2"></i>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <h3>ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route.
              </p>
            </div>
          </div>
        </div>
        <div className= {`${styles.copyright} text-center py-3 `}>
          <p className="mb-0">Copyright © Your Website 2021</p>
        </div>
      </footer>
    );
  }
