
import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownProps> = ({ targetDate }) => {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      // Time calculations
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update state
      setDays(days);
      setHours(hours);
      setMinutes(minutes);
      setSeconds(seconds);

      // Clear interval if countdown finished
      if (distance < 0) {
        clearInterval(interval);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);

    // Clean up interval
    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-8">
      <div className="bg-white/90 border border-green-200 rounded-lg shadow-lg p-4">
        <div className="text-center">
          <span className="block text-4xl md:text-6xl font-black text-ifal-green">
            {String(days).padStart(2, '0')}
          </span>
          <span className="block text-sm md:text-base text-green-700 uppercase font-medium mt-1">
            DIAS
          </span>
        </div>
      </div>
      
      <div className="bg-white/90 border border-green-200 rounded-lg shadow-lg p-4">
        <div className="text-center">
          <span className="block text-4xl md:text-6xl font-black text-ifal-green">
            {String(hours).padStart(2, '0')}
          </span>
          <span className="block text-sm md:text-base text-green-700 uppercase font-medium mt-1">
            HORAS
          </span>
        </div>
      </div>
      
      <div className="bg-white/90 border border-green-200 rounded-lg shadow-lg p-4">
        <div className="text-center">
          <span className="block text-4xl md:text-6xl font-black text-ifal-green">
            {String(minutes).padStart(2, '0')}
          </span>
          <span className="block text-sm md:text-base text-green-700 uppercase font-medium mt-1">
            MINUTOS
          </span>
        </div>
      </div>
      
      <div className="bg-white/90 border border-green-200 rounded-lg shadow-lg p-4">
        <div className="text-center">
          <span className="block text-4xl md:text-6xl font-black text-ifal-green">
            {String(seconds).padStart(2, '0')}
          </span>
          <span className="block text-sm md:text-base text-green-700 uppercase font-medium mt-1">
            SEGUNDOS
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
