import Link from 'next/link';
import React from 'react';

const Register = () => {
    return (
        <div className="registerForm flex justify-center items-center min-h-screen bg-dark text-white">
            <div className="w-96 p-8 rounded-lg shadow-md bg-div">
                <h2 className="mb-6 text-2xl font-bold underline">Register Here</h2>
                <label className="block mb-4">
                    Pubg ID:
                    <input
                        placeholder='123123123123'
                        type="text"
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    /> ,
                </label>
                <label className="block mb-4">
                    Pubg username:
                    <input
                        placeholder='It is your pubg username'
                        type="text"
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                </label>
                <label className="block mb-4">
                    Email:
                    <input
                        placeholder='Enter Email'
                        type="text"
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                </label>
                <label className="block mb-4">
                    UPI Id:
                    <input
                        type="password"
                        placeholder='UPI Id is used to send prize money'
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                    {/* <small><i></i></small> */}
                </label>
                <label className="block mb-4">
                    Password:
                    <input
                        placeholder='Password'
                        type="password"
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                </label>
                <label className="block mb-4">
                    Confirm Password:
                    <input
                        placeholder='Confirm Password'
                        type="password"
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                </label>
                <button
                    type="submit"
                    className="w-full px-4 py-2 rounded text-white cursor-pointer"
                >
                    Register
                </button>
                <div className='float-left mt-3'>
                    <p>Already a member, <Link style={{ color: "goldenrod" }} href="/login">Login Here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Register;
