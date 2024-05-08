import Image from "next/image";
import styles from "./Hero.module.css";
import ImageOverlay from "./Overlay/ImageOverlay";
import imagesJson from "../../../json/images.json";

interface HomePageMainProps {
  outline?: boolean;
  overlay?: boolean;
}

export default function Hero({ outline, overlay }: HomePageMainProps) {
  const { headImage } = imagesJson;
  return (
    <div
      className={` ${styles.mainWrapper} ${outline ? styles.outline : null}`}
    >
      <ImageOverlay
        button1Target="/contact"
        button1Value="Get Started"
        mainTitle="Natural. Elegant. Timeless"
        text="Turn your imagination into reality."
      />
      {overlay ? <div className={styles.imageDarkLayer}></div> : null}
      <Image
        className={styles.mainImage}
        src={headImage}
        width={3000}
        height={2000}
        alt="clouds"
        priority
      ></Image>
      {/* <CldVideoPlayer
        width="1920"
        height="1080"
        src={`https://res.cloudinary.com/demrevo8i/video/upload/donabygg/CASK-HOME-1280X720_eledkw.mp4`}
        className={styles.mainImage}
        autoplay
      /> */}
    </div>
  );
}

{
  /* <video
        src={"../../../public/_next-video/CASK-HOME-1280X720.mp4"}
        autoPlay
        muted
        loop
        className={styles.mainImage}
      ></video> */
}
{
  /* <Video src={myVideo} autoPlay loop className={styles.mainImage} />; */
}
