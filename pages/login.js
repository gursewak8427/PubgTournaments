import Link from 'next/link';
import React from 'react';

const login = () => {
    return (
        <div className="registerForm flex justify-center items-center min-h-screen bg-dark text-white">
            <div className="w-96 p-8 rounded-lg shadow-md bg-div">
                <h2 className="mb-6 text-2xl font-bold underline">Login Here</h2>
                <label className="block mb-4">
                    Pubg ID:
                    <input
                        placeholder='123123123123'
                        type="text"
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                </label>
                <label className="block mb-4">
                    Password:
                    <input
                        placeholder='Password'
                        type="password"
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                    <div className='float-right mt-1'>
                        <p><Link style={{ color: "whitesmoke", }} href="/login">Forgot Password</Link></p>
                    </div>
                </label>
                <button
                    onClick={() => {
                        window.location.href = "/"
                    }}
                    type="submit"
                    className="w-full px-4 py-2 rounded text-white cursor-pointer"
                >
                    Login
                </button>
                <div className='float-left mt-3'>
                    <p>Not a member, <Link style={{ color: "goldenrod" }} href="/register">Register Here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default login;
