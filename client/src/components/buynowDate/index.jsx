import React, { useEffect } from "react";
import useCountdownTimer from "../../hooks/useCountDownTimer";

const BuyNowDate = () => {
  const { currentTime, targetDate, getTimeRemaining } = useCountdownTimer(
    "2024-01-28T00:00:00"
  );
  const { days, hours, minutes, seconds } = getTimeRemaining();

  useEffect(() => {}, [currentTime, targetDate, days, hours, minutes, seconds]);

  return (
    <>
      <div className="flex  items-start flex-wrap gap-4 py-4">
        <div className="date-groups">
          <p className="font-bold">{days < 10 ? "0" + days : days}</p>
          <p className="text-xs">days</p>
        </div>
        <div className="date-groups">
          <p className="font-bold">{hours < 10 ? "0" + hours : hours}</p>
          <span className="text-xs">Hours</span>
        </div>
        <div className="date-groups">
          <p className="font-bold"> {minutes < 10 ? "0" + minutes : minutes}</p>
          <span className="text-xs">Minute</span>
        </div>
        <div className="date-groups">
          <p className="font-bold"> {seconds < 10 ? "0" + seconds : seconds}</p>
          <span className="text-xs">Second</span>
        </div>
      </div>
    </>
  );
};

export default BuyNowDate;
