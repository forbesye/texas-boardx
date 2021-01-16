import React from 'react'

export default function Navbar() {
    return (
        <nav className="text-gray-800 shadow-md">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative flex items-center justify-between h-16">
                <div className="absolute inset-y-0 left-0 flex items-center">
                    <a href="#" className="m-6 font-bold text-3xl text-left cursor-pointer select-none">Texas BoardX</a>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <button className="p-1 rounded ring-2 ring-gray-800 text-gray-800">
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                </div>
            </div>
            
        </nav>
    )
}