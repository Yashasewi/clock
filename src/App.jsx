import dayjs from 'dayjs';
import { useState, useEffect } from 'react';

function App() {
  const [minute, setMinute] = useState(dayjs().minute());
  const [second, setSecond] = useState(dayjs().second());
  const [hour, setHour] = useState(dayjs().hour());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMinute(dayjs().minute());
      setSecond(dayjs().second());
      setHour(dayjs().hour());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-black">
      <div className="flex text-[20rem] font-bold text-white select-none">
        <h1>{hour}</h1>
        <span>:</span>
        <h1>{minute}</h1>
        <span>:</span>
        <h1>{second}</h1>
      </div>
    </div>
  );
}

export default App;



