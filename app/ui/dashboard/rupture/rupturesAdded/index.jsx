"use client";

import styles from "@/app/ui/dashboard/rupture/rupturesAdded/rupturesAdded.module.css";

export default function RupturesAdded({ ruptures }) {
  return (
    <div className={styles.container}>
      {ruptures.map((rupture, index) => (
        <div key={index}>
          <div className={styles.item}>
            <div className={styles.text}>
              <h1 className={styles.title}>{Object.keys(rupture)[0]}</h1>
              {rupture[Object.keys(rupture)[0]].map((pon, zindex) => ( 
              <p key={zindex}>
                {pon}
              </p>
              ))}
            </div>
          </div>
        </div>
      ))}
        {ruptures.length > 0 ? <button type="submit" className={styles.buttonSubmit}>Submit</button> : null}
    </div>
  );
}
