import Image from "next/image";
import { useState } from "react";
import styles from "./Carousel.module.css";

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/carousel-images/player1.png",
    "/carousel-images/player2.png",
    "/carousel-images/player3.png",
    "/carousel-images/player4.png",
  ];

  const changeImage = (direction) => {
    if (direction === "backward") {
      setCurrentImage((prevImage) =>
        prevImage === 0 ? 3 : prevImage - 1
      );
    } else if (direction === "forward") {
      setCurrentImage((prevImage) =>
        prevImage === 3 ? 0 : prevImage + 1
      );
    }
  };

  return (
    <>
      <div className={styles.carouselContainer}>
      <div className={styles.arrows}>
          <Image
            src={"/icons/leftArrow.png"}
            alt={"/icons/leftArrow.png"}
            width={75}
            height={70}
            onClick={() => changeImage("backward")}
          />
            </div>
        <div className={styles.carouselImages}>
          {[-1, 0, 1].map((offset) => {
            const index = (currentImage + offset + 4) % 4; // To handle negative and overflow indexes
            return (
              <div key={offset} className={styles.image}>
                <Image
                  src={images[index]}
                  alt={`Image ${index}`}
                  width={190}
                  height={200}
                />
              </div>
            );
          })}
        </div>
      
            <div>
          <Image
            src={"/icons/rightArrow.png"}
            alt={"/icons/rightArrow.png"}
            width={75}
            height={70}
            onClick={() => changeImage("forward")}
          />
        </div>
      </div>
    </>
  );
}