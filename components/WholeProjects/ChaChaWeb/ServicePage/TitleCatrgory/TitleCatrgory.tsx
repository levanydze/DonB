import styles from "./TitleCatrgory.module.css";
interface TitleProps {
  servicesCat: string;
}
export default function TitleCatrgory({ servicesCat }: TitleProps) {
  return (
    <div className="container1">
      <section>
        {servicesCat === "Restaurant" && (
          <h3 className={`title8 ${styles.title}`}>Restaurant</h3>
        )}
        {servicesCat === "Construction" && (
          <h3 className={`title8 ${styles.title}`}>Construction</h3>
        )}
        {servicesCat === "Gardening" && (
          <h3 className={`title8 ${styles.title}`}>Gardening </h3>
        )}
        {servicesCat === "Other" && (
          <h3 className={`title8 ${styles.title}`}>The Way We Work</h3>
        )}
      </section>
    </div>
  );
}
