import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';


const UpdateParticipents = ({ id, tournamentDetails, activeParticipent }) => {

    const [isJoining, setJoining] = useState(false)

    const router = useRouter();
    const [state, setState] = useState({
        t_id: "",
        t_status: "",
        kills: ""
    })

    useEffect(() => {
        if (tournamentDetails) {
            setState({
                t_id: tournamentDetails?.participents[activeParticipent]?.payment?.paymentId || "NULL",
                t_status: tournamentDetails?.participents[activeParticipent]?.payment?.status || "ELIMINATE",
                kills: tournamentDetails?.participents[activeParticipent]?.kills || 0
            })
        }

    }, [tournamentDetails])


    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

    function loadScript(src) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }


    async function displayRazorpay() {

        try {
            if (state.t_id == "" || state.t_status == "") return;
            setJoining(true);
            // creating a new order
            const result = await axios.patch("/api/tournament/participents/update", {
                // const result = await axios.post("https://pubg-tournaments.onrender.com/api/tournament/participents/update", {
                "tournamnetId": id,
                "participentPubgId": tournamentDetails?.participents[activeParticipent]?.pubg_id,
                "kills": state.kills,
                "transactionId": state.t_id,
                "transactionStatus": state.t_status
            });
            setJoining(false);
            alert("Update Successfully")
            window.location.reload();

        } catch (e) {
            alert(e?.message || "Something Went Wrong")
        }
    }

    if (!tournamentDetails) return "Wait"


    return (
        <div className="registerForm flex justify-center items-center bg-dark text-white">
            <div className="w-96 p-8 rounded-lg shadow-md bg-div">
                {/* <h2 className="mb-6 text-2xl font-bold underline">UpdateParticipents Here</h2> */}
                {/* <label className="block mb-4">
                    Pubg ID:
                    <input
                        name='pubg_id'
                        onChange={handleChange}
                        value={state.pubg_id}
                        placeholder='123123123123'
                        type="text"
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                </label>
                <label className="block mb-4">
                    Pubg username:
                    <input
                        name='pubg_id_name'
                        onChange={handleChange}
                        value={state.pubg_id_name}
                        placeholder='It is your pubg username'
                        type="text"
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                </label> */}
                <h1>{tournamentDetails?.participents[activeParticipent]?.pubg_id} ({tournamentDetails?.participents[activeParticipent]?.pubg_id_name})</h1>
                <h1>UPI Id : {tournamentDetails?.participents[activeParticipent]?.upi_id}</h1>
                <hr />
                <br />
                <label className="block mb-4">
                    Transaction Id :
                    <input
                        name='t_id'
                        onChange={handleChange}
                        value={state.t_id}
                        type="text"
                        placeholder='Enter Transaction Id'
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                    {/* <small><i></i></small> */}
                </label>
                <label className="block mb-4">
                    Status :
                    <input
                        name='t_status'
                        onChange={handleChange}
                        value={state.t_status}
                        type="text"
                        placeholder='Enter Transaction Status PAID/ELIMINATE'
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                    {/* <small><i></i></small> */}
                </label>
                <label className="block mb-4">
                    Kills :
                    <input
                        name='kills'
                        onChange={handleChange}
                        value={state.kills}
                        type="text"
                        placeholder='Enter Kills'
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                    {/* <small><i></i></small> */}
                </label>
                <button
                    onClick={displayRazorpay}
                    type="submit"
                    className="w-full px-4 py-2 rounded text-white cursor-pointer"
                >
                    {
                        isJoining ? "Submitting..." :
                            `Submit`
                    }
                </button>
                {/* <div className='float-left mt-3'>
                    <p>Already a member, <Link style={{ color: "goldenrod" }} href="/login">Login Here</Link></p>
                </div> */}
            </div>
        </div>
    );
}

export default UpdateParticipents;
