
"use client";
import React, { useEffect } from 'react';

function BackTop() {
    useEffect(() => {
        const progressWrap = document.querySelector('.progress-wrap');
        if (!progressWrap) return;
        const progressPath = progressWrap.querySelector('path');
        if (!progressPath) return;

        const pathLength = progressPath.getTotalLength();
        progressPath.style.transition = 'stroke-dashoffset 10ms linear';
        progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
        progressPath.style.strokeDashoffset = pathLength;

        let ticking = false;
        let lastActive = false;

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const scroll = window.scrollY;
                    const height = document.documentElement.scrollHeight - window.innerHeight;
                    if (height > 0) {
                        const progress = pathLength - (scroll * pathLength / height);
                        progressPath.style.strokeDashoffset = progress;
                    }
                    const shouldBeActive = scroll > 50;
                    if (shouldBeActive !== lastActive) {
                        lastActive = shouldBeActive;
                        if (shouldBeActive) {
                            progressWrap.classList.add('active-progress');
                        } else {
                            progressWrap.classList.remove('active-progress');
                        }
                    }
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        const handleClick = (event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        progressWrap.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('scroll', onScroll);
            progressWrap.removeEventListener('click', handleClick);
        };
    }, []);

  return (
    <div className="progress-wrap">
        <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
        >
            <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
                transition: "stroke-dashoffset 10ms linear 0s",
                strokeDasharray: "307.919, 307.919",
                strokeDashoffset: "307.919"
            }}
            />
        </svg>
    </div>

  )
}

export default BackTop