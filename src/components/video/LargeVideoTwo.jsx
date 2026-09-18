"use client"; 
import Link from 'next/link';

import React, { useRef, useEffect, useState } from 'react';

function LargeVideoTwo() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play(); // Autoplay the video
        }
    }, []);

    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

  return (
    <div>
        <div className="tmp-video-section-start-one tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="large-video-playing">
                        <video width="560" height="719" src="assets/images/video/intro-2.mp4" title="Video player" frameBorder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            ref={videoRef}
            onClick={togglePlayPause}
            autoPlay
            muted
        ></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default LargeVideoTwo