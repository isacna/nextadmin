"use client";

import styles from "@/app/ui/dashboard/rupture/rupturesAdded/rupturesAdded.module.css";
import Formulario from "@/app/ui/dashboard/rupture/rupturePrevision/index";
import { useState } from "react";

export default function RupturesAdded({ ruptures }) {
    const [exibirFormulario, setExibirFormulario] = useState(false);

  const abrirFormulario = () => {
    setExibirFormulario(true);
  };

  const fecharFormulario = () => {
    setExibirFormulario(false);
  };

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
        {ruptures.length > 0 ? <button type="submit" className={styles.buttonSubmit} onClick={abrirFormulario}>Submit</button> : null}
        {exibirFormulario && (
          <Formulario
            mostrarFormulario={exibirFormulario}
            fecharFormulario={fecharFormulario}
          />
        )}
    </div>
  );
}
