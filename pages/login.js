import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const login = () => {
    const router = useRouter();
    const [state, setState] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const loginNow = async () => {
        try {
            let response = await axios.post(`/api/user/login`, {
                email: state.email,
                password: state.password
            })
            console.log({ response })
            if (response?.data) {
                // Login Successfully
                alert("Login Successfully")
                localStorage.setItem('user', response?.data?._id || "");
                let matchId = localStorage.getItem('matchId')
                if (!matchId || matchId == "") matchId = -1
                router.push("/pubg/" + matchId)
            }
        } catch (err) {
            console.log(err?.response?.data?.message)
            console.log({ err })
            alert(err?.response?.data?.message || "Something went wrong")
        }
    }

    return (
        <div className="registerForm flex justify-center items-center min-h-screen bg-dark text-white">
            <div className="w-96 p-8 rounded-sm bg-div">
                <h2 className="mb-6 text-2xl font-bold underline">Login Here</h2>
                <label className="block mb-4">
                    Email:
                    <input
                        onChange={handleChange}
                        name='email'
                        value={state.email}
                        placeholder='123123123123'
                        type="text"
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                </label>
                <label className="block mb-4">
                    Password:
                    <input
                        onChange={handleChange}
                        name='password'
                        value={state.password}
                        placeholder='Password'
                        type="password"
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                    <div className='float-right mt-1'>
                        <p><Link href="/login">Forgot Password</Link></p>
                    </div>
                </label>
                <button
                    onClick={() => {
                        loginNow();
                    }}
                    type="submit"
                    className="w-full px-4 py-2 rounded cursor-pointer"
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
