import Image from "next/image";
import { useState } from "react";
import styles from "./AlienCaro.module.css";

export default function AlienCar() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/carousel-aliens/alien1.png",
    "/carousel-aliens/alien2.png",
    "/carousel-aliens/alien3png.png",
    "/carousel-aliens/alien4.png",
    "/carousel-aliens/alien5.png",
    "/carousel-aliens/alien6.png",
    "/carousel-aliens/alien7.png",
    "/carousel-aliens/alien8.png",
    
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
            const index = (currentImage + offset + 8) % 8; // To handle negative and overflow indexes
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