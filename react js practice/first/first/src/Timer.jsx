import React, { useState, useRef } from "react";

function Timer() {
    const [time, setTime] = useState({ sec: 0, min: 0 });
    const [run, setRun] = useState(false);
    const timeref = useRef(null);

    function start() {
        if (!run) {
            setRun(true);
            timeref.current = setInterval(() => {
                setTime(({ sec, min }) => {
                    if (sec >= 59) {
                        return { sec: 0, min: min + 1 }; 
                    }
                    return { sec: sec + 1, min }; 
                });
            }, 1000);
        }
    }

    function stop() {
        clearInterval(timeref.current);
        setRun(false);
    }

    function reset() {
        clearInterval(timeref.current);
        setRun(false);
        setTime({ sec: 0, min: 0 });
    }

    function format() {
        return `${formatNumber(time.min)}:${formatNumber(time.sec)}`;
    }

    function formatNumber(num) {
        return num < 10 ? `0${num}` : num;
    }

    return (
        <div>
            <h1>{format()}</h1>
            <button onClick={start}>Start</button> &nbsp;
            <button onClick={stop}>Stop</button> &nbsp;
            <button onClick={reset}>Reset</button> &nbsp;
        </div>
    );
}

export default Timer;
