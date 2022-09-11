import React from "react";

/* Function that displays a countdown timer to a specific date. Automatically update the ui every second.
for example: <Countdown time="September 13,2022" /> */

export default function Countdown({ time }) {
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const getTimeRemaining = () => {
    const total = Date.parse(time) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      const time = getTimeRemaining();
      setDays(time.days);
      setHours(time.hours);
      setMinutes(time.minutes);
      setSeconds(time.seconds);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div class="text-6xl text-center flex w-full items-center justify-center">
        <div class="mx-1 p-2 px-4 text-transparent bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text rounded-lg">
            <div class="font-mono leading-none" x-text="days">{days}</div>
            <div class="font-mono uppercase text-sm leading-none">Days</div>
        </div>
        <div class="mx-1 p-2 px-4 text-transparent bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text rounded-lg">
            <div class="font-mono leading-none" x-text="hours">{hours}</div>
            <div class="font-mono uppercase text-sm leading-none">Hours</div>
        </div>
        <div class="mx-1 p-2 px-4 text-transparent bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text rounded-lg">
            <div class="font-mono leading-none" x-text="minutes">{minutes}</div>
            <div class="font-mono uppercase text-sm leading-none">Minutes</div>
        </div>
        <div class="mx-1 p-2 px-4 text-transparent bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text rounded-lg">
            <div class="font-mono leading-none" x-text="seconds">{seconds}</div>
            <div class="font-mono uppercase text-sm leading-none">Seconds</div>
        </div>
    </div>
  );
};



/*
export default function Countdown({ time }) {
    // Get the current time
    const now = new Date().getTime();
    // Get the time of the event
    const eventTime = new Date(time).getTime();
    // Get the difference between the two times
    const diff = eventTime - now;
    
    // Calculate the time until the event
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return (
        <div>
        <h1>Countdown</h1>
        <p className="text-black">
            {days} days {hours} hours {minutes} minutes {seconds} seconds
        </p>
        </div>
    );
};*/