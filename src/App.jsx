import dayjs from "dayjs";
import { useState, useEffect } from "react";

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

    function AddZero(value) {
        let last = ~~(value % 10);
        let first = ~~(value / 10);
        // also can use math.trunc()
        // console.log("f :" + first + ~~last);
        return first.toString() + last;
    }

    return (
        <div className="flex justify-center items-center w-screen h-screen bg-black">
            <div className="flex text-[20rem] overflow-hidden green select-none  h-[30vh] max-h-[30vh] justify-center items-center m-1 p-1 ">
                <div className="grad h-full w-full absolute pointer-events-none max-h-[29vh]"></div>
                <div className="h-full w-full absolute pointer-events-none shadow"></div>
                <h1>{AddZero(hour) % 12 === 0 ? "12" : AddZero(hour) % 12}</h1>
                <span>:</span>
                <h1>{AddZero(minute)}</h1>
                <span>:</span>
                <div className=" flex flex-col h-[30vh]">
                    <h1 className="h-full  flex items-center ">
                        {AddZero(second)}
                    </h1>
                    <h1 className="h-full  flex items-center">
                        {AddZero(second + 1)}
                    </h1>
                </div>
                <h1 className="text-5xl h-full flex items-end mb-4">
                    {hour > 12 ? "PM" : "AM"}
                </h1>
            </div>
        </div>
    );
}

export default App;
