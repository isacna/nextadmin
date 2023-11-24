"use client"

import { useState } from "react";
import styles from "@/app/ui/dashboard/rupture/oltList/oltList.module.css";

export default function OltList({list}){
    const [showAllList, setShowAllList] = useState(false);
    
    function handleClick(){
        setShowAllList(!showAllList)
    }
    
    return(
        <>
            {list.map((pon) => {
                if(!showAllList && list.indexOf(pon) < 3){
                    return (
                        <p key={pon} className={pon}>
                            {pon}
                        </p>
                    );
                }else if(showAllList){
                    return(
                        <p key={pon} className={pon}>
                            {pon}
                        </p>
                    )
                }
            })}

            {list.length > 3 &&
            <button onClick={handleClick} className={styles.button}>
                {
                    showAllList ? "Fechar" : "Mostrar mais"
                }
            </button>}
        </>
    )
}