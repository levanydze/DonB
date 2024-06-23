import styles from "./NestedDetails.module.css";
import Link from "next/link";
import AlbumSlider from "../../../../../../components/Sliders/AlbumSlider/AlbumSlider";

//mapping and routes
import { findDataById } from "../../DataFetch";
import { ProjectProps } from "../../ItemsServicesArray/ItemsServicesArray";
interface MenuDetailsProps {
  arrayId: string;
}

export default async function NestedDetails({ arrayId }: MenuDetailsProps) {
  const data: ProjectProps = await findDataById(arrayId);

  return (
    <>
      <div className="container2">
        <AlbumSlider images={data.images} title={data.titleSVE} />
        <section>
          <div className={styles.mainWrapper}>
            <h1 className="title4">{data.textSVE}</h1>
            <div className={styles.textWrapper}>
              <h2 className="title6">{data.titleSVE}</h2>
              <p className="text1 ">{data.describtionSVE}</p>
            </div>
            <Link className="button3" href="/se/contact">
              Skaffa din
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
