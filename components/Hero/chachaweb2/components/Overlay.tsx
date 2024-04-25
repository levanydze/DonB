import styles from "./Overlay.module.css";

export default function Overlay() {
  return (
    <div className={styles.boxesWrapper}>
      <div className={styles.overlay}></div>
      <div className={styles.blueBox}></div>
      <div className={styles.greenBox}></div>
      <div className={styles.orangeBox}></div>
      <div className={`darkGradient2 ${styles.shapeOfBox}`}></div>
    </div>
  );
}
