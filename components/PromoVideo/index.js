import styles from './PromoVideo.module.css'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

export default function VideoPromo() {
        const [isPlaying, setIsPlaying] = useState(true);
        const videoRef = useRef(null);
        useEffect(() => {
            const video = videoRef.current;
            if (isPlaying) {
                video.play();
            } else {
                video.pause();
            }
            const pauseVideo = () => {
                setIsPlaying(false);
            };
            const playVideo = () => {
                setIsPlaying(true);
            };
            document.addEventListener('keydown', (event) => {
                if (event.code === 'Space') {
                    if (isPlaying) {
                        pauseVideo();
                    } else {
                        playVideo();
                    }
                }
            });
            return () => {
                document.removeEventListener('keydown', pauseVideo);
            };
        }, [isPlaying]);

        const handlePlayPause = () => {
            setIsPlaying(!isPlaying);
        };

    return (
        <div className={styles.videoContainer}>
            <video ref={videoRef} autoPlay className={styles.video}>
                <source src="/promovideo.mp4" type="video/mp4" />
            </video>
            <button className={styles.playpauseBtn} onClick={handlePlayPause}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
        </div>
    )
}

