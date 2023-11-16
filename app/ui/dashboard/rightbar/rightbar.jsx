import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.bgContainer}>
                    <Image src="/astronaut.png" alt="astronaut" fill className={styles.bg} />
                </div>
                <div className={styles.text}>
                    <span className={styles.notification}>Available Now</span>
                    <h3 className={styles.title}>How to use the new version the admin Dashboard?</h3>
                    <span className={styles.subtitlte}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        Lorem ipsum.....
                    </p>
                    <button className={styles.button}>
                        <MdPlayCircleFilled />
                        Watch
                    </button>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.text}>
                    <span className={styles.notification}>Coming Soon</span>
                    <h3 className={styles.title}>How to use the new version the admin Dashboard?</h3>
                    <span className={styles.subtitlte}>Takes 4 minutes to learn</span>
                    <p className={styles.desc}>
                        Lorem ipsum.....
                    </p>
                    <button className={styles.button}>
                        <MdReadMore />
                        Learn
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Rightbar;