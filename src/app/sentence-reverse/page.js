'use client'

import { useState } from 'react';

export default function Page() {
    const [sentence, setSentence] = useState('');
    const [reversedSentence, setReversedSentence] = useState('');

    const handleReverse = () => {
        const cleanedSentence = sentence.replace(/[^\w\s]/gi, '');
        setReversedSentence(cleanedSentence.split(' ').reverse().join(' '));
    }

    return (
        <div className="text-lg">
            <h1 className="text-2xl font-extrabold mb-4">Welcome To The Sentence Reverse Tool!</h1>
            <p className="mb-2">Please input a sentence that you would like to reverse.</p>
            <textarea 
            value={sentence} 
            onChange={(e) => setSentence(e.target.value)}
            className="border border-gray-800 rounded-md p-2 w-full h-32" />
            <button 
            onClick={handleReverse}
            className="bg-fuchsia-500 transition hover:bg-fuchsia-600 text-white rounded-md py-2 px-4 text-xl font-bold tracking-wide mt-2">Reverse</button>
            <p className="pt-4"><span className="font-bold">New Sentence: </span>{reversedSentence}</p>
        </div>
    )
}