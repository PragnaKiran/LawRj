
"use client";

import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { CountUp } from 'countup.js';

const CounterUp = ({ end, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once when in view
  });

  const countUpRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const countUp = new CountUp(countUpRef.current, end, {
        duration: 1, // Duration of the counting animation
      });
      countUp.start();
    }
  }, [inView, end]);

  return (
    <h3 ref={ref} className={`title ${className}`}>
      <span ref={countUpRef} className="counter">0</span>+
    </h3>
  );
};

export default CounterUp;
