"use client";

import styles from "@/app/ui/dashboard/rupture/page/addRupture/rupture.add.module.css";
import { useState } from "react";

const data = [
  {
    OLT_COTIA_01: [
      "0/1",
      "0/2",
      "0/3",
      "0/4",
      "0/5",
      "0/6",
      "0/7",
      "0/8",
      "0/11",
      "0/12",
      "0/13",
      "0/14",
      "0/15",
      "0/16",
      "0/17",
      "0/18",
    ],
  },
  {
    OLT_COTIA_02: [
      "0/1",
      "0/2",
      "0/3",
      "0/4",
      "0/5",
      "0/6",
      "0/7",
      "0/8",
      "0/11",
      "0/12",
      "0/13",
      "0/14",
      "0/15",
      "0/16",
      "0/17",
      "0/18",
    ],
  },
  {
    OLT_COTIA_03: [
      "0/1",
      "0/2",
      "0/3",
      "0/4",
      "0/5",
      "0/6",
      "0/7",
      "0/8",
      "0/11",
      "0/12",
      "0/13",
      "0/14",
      "0/15",
      "0/16",
      "0/17",
      "0/18",
      "0/19",
    ],
  },
  {
    OLT_COTIA_04: [
      "0/1",
      "0/2",
      "0/3",
      "0/4",
      "0/5",
      "0/6",
      "0/7",
      "0/10",
      "0/11",
      "0/12",
      "0/13",
      "0/14",
      "0/15",
      "0/16",
    ],
  },
  {
    OLT_EMBU_01: [
      "0/1",
      "0/2",
      "0/3",
      "0/4",
      "0/5",
      "0/6",
      "0/7",
      "0/10",
      "0/11",
      "0/12",
      "0/13",
      "0/14",
      "0/15",
      "0/16",
      "0/17",
    ],
  },
  {
    OLT_ITPV_01: ["0/0", "0/1", "0/2", "0/3", "0/4", "0/5"],
  },
  {
    OLT_TRMS_01: [
      "0/1",
      "0/2",
      "0/3",
      "0/4",
      "0/5",
      "0/6",
      "0/7",
      "0/10",
      "0/11",
      "0/12",
      "0/13",
      "0/14",
      "0/15",
      "0/16",
    ],
  },
  {
    OLT_TRMS_02: [
      "0/1",
      "0/2",
      "0/3",
      "0/4",
      "0/5",
      "0/6",
      "0/7",
      "0/10",
      "0/11",
      "0/12",
      "0/13",
      "0/14",
      "0/15",
      "0/16",
    ],
  },
  {
    OLT_VGPA_01: [
      "0/1",
      "0/2",
      "0/3",
      "0/4",
      "0/5",
      "0/6",
      "0/7",
      "0/10",
      "0/11",
      "0/12",
      "0/13",
      "0/14",
      "0/15",
      "0/16",
    ],
  },
  {
    OLT_CCDA_01: [
      "0/1",
      "0/2",
      "0/3",
      "0/4",
      "0/5",
      "0/6",
      "0/7",
      "0/10",
      "0/11",
      "0/12",
      "0/13",
      "0/14",
      "0/15",
      "0/16",
    ],
  },
  {
    OLT_GRVN_01: [
      "0/1",
      "0/2",
      "0/3",
      "0/4",
      "0/5",
      "0/6",
      "0/7",
      "0/10",
      "0/11",
      "0/12",
      "0/13",
      "0/14",
      "0/15",
      "0/16",
    ],
  },
];
const ports = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
];

const AddRupturePage = () => {
  const [showFrameSlot, setShowFrameSlot] = useState("");
  function handleClick(event) {
    setShowFrameSlot(event.target.value);
  }

  return (
    <>
    <div className={styles.container}>
      <form className={styles.form}>
        <select
          name="selecOlt"
          id="selecOlt"
          value={showFrameSlot}
          onChange={handleClick}
        >
          <option value={false}>Selecione a OLT</option>
          {data.map((olt) => (
            <option value={Object.keys(olt)} key={Object.keys(olt)}>
              {Object.keys(olt)}
            </option>
          ))}
        </select>
        {!showFrameSlot ? null : (
          <select name="selectFrame" id="selectFrame">
            <option value={false}>Selecione o F/S</option>
            {data
              .filter((items) => items[showFrameSlot])
              .map((item) => {
                return item[showFrameSlot].map((fs) => (
                  <option value={fs} key={fs}>
                    {fs}
                  </option>
                ));
              })}
          </select>
        )}
        {!showFrameSlot ? null : (
          <select name="selectPort" id="selectPort">
            <option value={false}>Selecione a porta</option>
            {ports.map((port) => (
                <option value={port} key={port}>
                    {port}
                </option>
                )
            )}
          </select>
        )}
      </form>
      <div className={styles.buttonAdd}>
        <button className={styles.button}>Adicionar</button>
      </div>
    </div>
    <div className={styles.container}>

    </div>
    </>
  );
};

export default AddRupturePage;
