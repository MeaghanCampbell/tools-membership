'use client'

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from 'react';

export default function Page() {

    const [names, setNames] = useState([]);
    const [inputName, setInputName] = useState('');
    const [error, setError] = useState(null);
    const [randomName, setRandomName] = useState('')

    const handleInputChange = (event) => {
        setInputName(event.target.value);
        setError(null); // Clear error when user starts typing
    }

    const handleButtonClick = (event) => {
        event.preventDefault();
        if (inputName.trim() === '') {
            setError('Please enter a name.');
        } else {
            setNames([...names, inputName]);
            setInputName('');
        }
    }

    const randomize = () => {
        setRandomName('')
        const randomIndex = Math.floor(Math.random() * names.length);
        const item = names[randomIndex];
        setRandomName(item)
    }

    const clear = () => {
        setRandomName('')
        setNames([])
    }

    return (
        <div className="text-lg max-w-md">
            <h1 className="text-2xl font-extrabold mb-4">Welcome To The Randomizer!</h1>
            <p className="mb-2">Please input one name at a time and click randomize to choose a winner.</p>
             <form onSubmit={handleButtonClick} className="flex items-center">
                <input 
                    className="border border-gray-800 rounded-md p-2 flex-grow mr-1" 
                    type="text" 
                    value={inputName} 
                    onChange={handleInputChange}
                />
                <button 
                    className="bg-fuchsia-500 transition border border-fuchsia-500 hover:bg-fuchsia-600 text-white rounded-md py-2.5 px-4 text-xl font-bold tracking-wide"
                    type="submit"
                >
                    <ArrowRightIcon className="h-6 w-6 text-white" />
                </button>
            </form>
            {error && <p className="text-red-500">{error}</p>}
            <ul className="mt-2">
                {names.map((name, index) => <li key={index}>{name}</li>)}
            </ul>
            <div className="flex space-x-2 items-center">
                <button onClick={randomize} className="border-2 border-fuchsia-500 hover:border-fuchsia-600 bg-fuchsia-500 transition hover:bg-fuchsia-600 text-white rounded-md py-2 px-4 text-xl font-bold tracking-wide mt-2">Choose a Winner</button>
                <button onClick={clear} className="border-2 border-fuchsia-500 transition hover:border-fuchsia-600 hover:text-fuchsia-600 text-fuchsia-500 rounded-md py-2 px-4 text-xl font-bold tracking-wide mt-2">Clear Names</button>
            </div>
            <p className="pt-4 font-bold text-3xl">{randomName}</p>
        </div>
    )
}