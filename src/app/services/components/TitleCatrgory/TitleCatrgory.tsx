import styles from "./TitleCatrgory.module.css";
interface TitleProps {
  servicesCat: string;
}
export default function TitleCatrgory({ servicesCat }: TitleProps) {
  return (
    <>
      {servicesCat === "Restaurant" && (
        <h3 className={`title6 ${styles.title}`}>Restaurant Digital Front</h3>
      )}
      {servicesCat === "Construction" && (
        <h3 className={`title6 ${styles.title}`}>Construction Web Mastery</h3>
      )}
      {servicesCat === "Gardening" && (
        <h3 className={`title6 ${styles.title}`}>Gardening Online Growth</h3>
      )}
      {servicesCat === "Other" && (
        <h3 className={`title6 ${styles.title}`}>The Way We Work</h3>
      )}
    </>
  );
}
