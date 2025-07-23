import React, { useEffect, useState } from "react";
import styles from "./protofolio.module.css";

import port1 from "../../assets/port1.png";
import port2 from "../../assets/port2.png";
import port3 from "../../assets/port3.png";
import port4 from "../../assets/port4.png";
import port5 from "../../assets/port5.png";
import port6 from "../../assets/port6.png";

const images = [port1, port2, port3, port4, port5, port6];

export default function Protofolio() {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);
  const [selectedImg, setSelectedImg] = useState(null);

  const openModal = (img) => {
    setSelectedImg(img);
  };

  const closeModal = () => {
    setSelectedImg(null);
  };

  return (
    <section className={styles.portfolio}>
      <div className="container text-center">
        <h2 className="text-uppercase fw-bolder mb-3">portfolio component</h2>
        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className={`${styles.line} me-3`}></div>
          <i className="fa-solid fa-star fa-2x text-dark"></i>
          <div className={`${styles.line} ms-3`}></div>
        </div>

        <div className="row g-4">
          {images.map((img, index) => (
            <div className="col-md-4" key={index}>
              <div className={`${styles["portfolio-item"]} position-relative`}>
                <img
                  src={img}
                  alt={`portfolio ${index + 1}`}
                  className="w-100 rounded"
                  style={{ maxHeight: "250px", objectFit: "cover" }}
                />
                <div
                  className={`${styles.overlay} d-flex justify-content-center align-items-center`}
                  onClick={() => openModal(img)}
                >
                  <i className="fa-solid fa-plus fa-3x text-white cursor-pointer"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      
      {selectedImg && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <i
              className={`fa-solid fa-xmark ${styles.closeBtn}`}
              onClick={closeModal}
            ></i>

            <img src={selectedImg} alt="Enlarged Portfolio" />
          </div>
        </div>
      )}
    </section>
  );
}
