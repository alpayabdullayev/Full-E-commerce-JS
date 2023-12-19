import React, { useEffect } from "react";
import "./index.scss";
import useCountdownTimer from "../../hooks/useCountDownTimer/"; 

const CountDownTimer = () => {
  const { currentTime, targetDate, getTimeRemaining } = useCountdownTimer(
    "2024-01-30T00:00:00"
  );
  const { days, hours, minutes, seconds } = getTimeRemaining();

  useEffect(() => {
    
  }, [currentTime, targetDate, days, hours, minutes, seconds]);

  return (
    <>
      <div className="block sm:grid sm:grid-cols-12 gap-4 ">
        <div className="flex justify-between sm:block col-span-6 sm:col-span-3 gap-4">
          <span className="">Days</span>
          <p className="font30xl font-bold">{days < 10 ? "0" + days : days}</p>
        </div>

        <div className="flex justify-between sm:block col-span-6 sm:col-span-3 gap-4">
          <span className="">Hours</span>
          <p className="font30xl font-bold">{hours < 10 ? "0" + hours : hours}</p>
        </div>

        <div className="flex justify-between sm:block col-span-6 sm:col-span-3 gap-4">
          <span className="">Minutes</span>
          <p className="font30xl font-bold">
            {minutes < 10 ? "0" + minutes : minutes}
          </p>
        </div>

        <div className="flex justify-between sm:block col-span-6 sm:col-span-3 gap-4">
          <span className="">Second</span>
          <p className="font30xl font-bold">
            {seconds < 10 ? "0" + seconds : seconds}
          </p>
        </div>
      </div>
    </>
  );
};

export default CountDownTimer;
