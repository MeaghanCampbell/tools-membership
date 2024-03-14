'use client'

import { useState } from 'react';
import CustomSwitch from '../../components/CustomSwitch'
import { RocketLaunchIcon } from '@heroicons/react/24/outline'


export default function Page() { 

    const [hrs, setHrs] = useState(false)
    const [min, setMin] = useState(false)
    const [sec, setSec] = useState(false)

    let hours = 0
    let minutes = 0
    let seconds = 0

    const currentDate = new Date()

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
                <input type="text" placeholder="Timer End Date..." className="border border-gray-800 rounded-md p-2 w-full" />
                <button className="bg-fuchsia-500 transition hover:bg-fuchsia-600 text-white rounded-md py-2 px-4 text-xl font-bold tracking-wide mt-4">Generate Timer</button>
            </div>
            <div className='text-5xl font-bold mt-6'>
                { hrs && <span>{hours}</span>}
                { min && <span> : {minutes}</span>}
                { sec && <span> : {seconds}</span>}
                { (hrs || min || sec) && <span className='text-2xl font-normal ml-2'> until liftoff <RocketLaunchIcon className='w-6 h-6 inline' /></span>}            
            </div>
        </section>
    )

}