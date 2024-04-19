import React from 'react'
const SuccessAlert = ({ message, state }) => {
    if (state) {
        return (
            <div className='z-1 fixed top-[80px] left-[50%] translate-x-[-50%] w-fit min-w-[90%] sm:min-w-fit drop-shadow-lg'>
                <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4">
                    <div className="flex items-start gap-4">
                        <span className="text-green-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </span>
                        <div className="flex-1">
                            <strong className="block font-medium text-green-600"> {message} </strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='z-1 fixed top-[80px] left-[50%] translate-x-[-50%] w-fit min-w-[90%] sm:min-w-fit drop-shadow-lg'>
                <div role="alert" className="rounded-xl border border-gray-100 bg-white p-4">
                    <div className="flex items-start gap-4">
                        <span className="text-[#87adbd]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>
                        </span>
                        <div className="flex-1">
                            <strong className="block font-medium text-[#87adbd]"> {message} </strong>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default SuccessAlert
