'use client'

import { useState, useEffect } from 'react';
import CustomSwitch from '../../components/CustomSwitch'

export default function Page() { 

    const [hrs, setHrs] = useState(false)
    const [min, setMin] = useState(false)
    const [sec, setSec] = useState(false)
    const [error, setError] = useState(null);
    const [futureDate, setFutureDate] = useState('')
    const [timeLeft, setTimeLeft] = useState({})

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date()
            const difference = new Date(futureDate) - now
            const timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60))),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }

            setTimeLeft(timeLeft)
        },1000)

        return () => clearInterval(timer)
    }, [futureDate])

    const generateTime = (event) => {
        setFutureDate(event.target.value);
    }

    return(
        <section>
            <h1 className="text-2xl font-extrabold mb-6">Create Your Custom Countdown Timer!</h1>
            <div className="space-x-6 flex items-center mb-6">
                <div className="flex items-center space-x-1">
                    <p>Hours</p>
                    <CustomSwitch enabled={hrs} setEnabled={setHrs} />
                </div>
                <div className="flex items-center space-x-1">
                    <p>Minutes</p>
                    <CustomSwitch enabled={min} setEnabled={setMin} />
                </div>
                <div className="flex items-center space-x-1">
                    <p>Seconds</p>
                    <CustomSwitch enabled={sec} setEnabled={setSec} />
                </div>
            </div>
            <div className="mb-6">
                <input 
                    type="datetime-local" 
                    className="border border-gray-800 rounded-md p-2 w-full"
                    value={futureDate} 
                    onChange={generateTime}
                />
                {error && <p className="text-red-500">{error}</p>}
                <div className='text-5xl font-bold mt-6 text-fuchsia-600'>
                    {hrs && <span>{`${timeLeft.hours || '00'}:`}</span>}
                    {min && <span>{`${timeLeft.minutes || '00'}:`}</span>}
                    {sec &&<span>{`${timeLeft.seconds || '00'}`}</span>}
                </div>
            </div>
        </section>
    )
}