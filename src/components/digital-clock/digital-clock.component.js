import { useEffect, useState } from 'react';
import './digital-clock.style.css';

function DigitalClock() {
  const [date, setDate] = useState(new Date());
  
  useEffect(() => {
    const timerId = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timerId);
    };

  }, []);
  return (
    <div className='clock-container'>
      <h1>{date.toLocaleTimeString()}</h1>
      <h2>{date.toLocaleDateString()}</h2>
    </div>
      
  );
}

export default DigitalClock;
