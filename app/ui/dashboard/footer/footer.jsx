import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Zack Dev</div>
      <div className={styles.text}>© 2023 All rights reserved</div>
    </div>
  );
};

export default Footer;
