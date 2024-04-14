import styles from "./RecentProjects.module.css";
import RecProCard from "./components/RecProCard";
export default function RecentProjects() {
  return (
    <div className="container2">
      <section>
        <div className={styles.mainWrapper}>
          <div className={styles.textDiv}>
            <h5 className="text1">OUR WORK</h5>
            <h6 className="title8 font1">Recent Projects</h6>
          </div>
          <div className={styles.cardWrapper}>
            <RecProCard />
            <RecProCard />
          </div>
        </div>
      </section>
    </div>
  );
}
