import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';


export function copyToClipboard(text) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');

    // Set the value of the textarea to the text you want to copy
    textarea.value = text;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Execute the "copy" command to copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the temporary textarea from the document
    document.body.removeChild(textarea);

    alert("Copied")
}


const NewTournament = ({ oldId, oldData }) => {
    const [isJoining, setJoining] = useState(false)

    const router = useRouter();
    const [id, setId] = useState(oldId || null)
    const [state, setState] = useState(oldId ? {
        "roomId": oldData?.roomId,
        "name": oldData?.name,
        "date": oldData?.date,
        "time": oldData?.time,
        "entery_fees": oldData?.entery_fees,
        "price": oldData?.price,
        "max_participents": oldData?.max_participents,
        "min_participents": oldData?.min_participents
    } : {
        "roomId": "1234",
        "name": "Pubg Match 2024",
        "date": "26/12/2023",
        "time": "09:00 PM",
        "entery_fees": "20",
        "price": "10",
        "max_participents": "5",
        "min_participents": "2"
    })



    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value
        })
    }

    async function submitNow() {
        if (!window.confirm("Are you sure ?")) return;

        try {
            if (state.t_id == "" || state.t_status == "") return;
            setJoining(true);
            // creating a new order

            if (oldId) {
                const result = await axios.patch(`/api/tournament/${oldId}`, {
                    "roomId": state.roomId,
                    "name": state.name,
                    "date": state.date,
                    "time": state.time,
                    "entery_fees": state.entery_fees,
                    "price": state.price,
                    "max_participents": state.max_participents,
                    "min_participents": state.min_participents,
                });

                setJoining(false);
                alert("Match Update Successfully")
                window.location.reload();
            } else {
                const result = await axios.post("/api/tournament", {
                    "roomId": state.roomId,
                    "name": state.name,
                    "date": state.date,
                    "time": state.time,
                    "entery_fees": state.entery_fees,
                    "price": state.price,
                    "max_participents": state.max_participents,
                    "min_participents": state.min_participents,
                });

                if (result) {
                    let id = result.data._id
                    setId(id)
                }

                setJoining(false);
                alert("Match Create Successfully")
                // window.location.reload();
            }

        } catch (e) {
            alert(e?.message || "Something Went Wrong")
        }
    }



    return (
        <div className="registerForm flex justify-center items-center bg-dark text-white">
            <div className="w-96 p-8 rounded-lg shadow-md bg-div">
                {/* <h2 className="mb-6 text-2xl font-bold underline">NewTournament Here</h2> */}
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
                <h1>Create New Tournament</h1>
                <hr />
                <br />
                <label className="block mb-4">
                    Room Id :
                    <input
                        name='roomId'
                        onChange={handleChange}
                        value={state.roomId}
                        type="text"
                        placeholder='Enter Transaction Id'
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                    {/* <small><i></i></small> */}
                </label>
                <label className="block mb-4">
                    Name :
                    <input
                        name='name'
                        onChange={handleChange}
                        value={state.name}
                        type="text"
                        placeholder='Enter Transaction Id'
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                    {/* <small><i></i></small> */}
                </label>
                <label className="block mb-4">
                    Date :
                    <input
                        name='date'
                        onChange={handleChange}
                        value={state.date}
                        type="date"
                        placeholder='Enter Transaction Status PAID/ELIMINATE'
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                    {/* <small><i></i></small> */}
                </label>
                <label className="block mb-4">
                    Time :
                    <input
                        name='time'
                        onChange={handleChange}
                        value={state.time}
                        type="time"
                        placeholder='Enter Kills'
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                    {/* <small><i></i></small> */}
                </label>
                <label className="block mb-4">
                    Entry Fees :
                    <input
                        name='entery_fees'
                        onChange={handleChange}
                        value={state.entery_fees}
                        type="text"
                        placeholder='Enter Transaction Status PAID/ELIMINATE'
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                    {/* <small><i></i></small> */}
                </label>
                <label className="block mb-4">
                    Per Kill Prize :
                    <input
                        name='price'
                        onChange={handleChange}
                        value={state.price}
                        type="text"
                        placeholder='Enter Kills'
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                    {/* <small><i></i></small> */}
                </label>
                <label className="block mb-4">
                    Max Participants :
                    <input
                        name='max_participents'
                        onChange={handleChange}
                        value={state.max_participents}
                        type="text"
                        placeholder='Enter Transaction Status PAID/ELIMINATE'
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                    {/* <small><i></i></small> */}
                </label>
                <label className="block mb-4">
                    Min Participants :
                    <input
                        name='min_participents'
                        onChange={handleChange}
                        value={state.min_participents}
                        type="text"
                        placeholder='Enter Kills'
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                    {/* <small><i></i></small> */}
                </label>
                <button
                    onClick={submitNow}
                    type="submit"
                    className="w-full px-4 py-2 rounded text-white cursor-pointer"
                >
                    {
                        isJoining ? "Creating..." :
                            oldId ? `Update` : `Create`
                    }
                </button>
                {id &&
                    <button
                        onClick={() => {
                            copyToClipboard(window.location.host + "/pubg/" + id)
                        }}
                        className="w-full px-4 py-2 rounded text-white cursor-pointer"
                    >
                        Copy User Link
                    </button>
                }
                {id &&
                    <button
                        onClick={() => {
                            copyToClipboard(window.location.host + "/pubg/admin/" + id)
                        }}
                        className="w-full px-4 py-2 rounded text-white cursor-pointer"
                    >
                        Copy Admin Link
                    </button>
                }
                {
                    <button
                        onClick={() => {
                            if (window.confirm("Are you sure ?"))
                                window.location.reload();
                        }}
                        className="w-full px-4 py-2 rounded text-white cursor-pointer"
                    >
                        Cancel
                    </button>
                }
                {/* <div className='float-left mt-3'>
                    <p>Already a member, <Link style={{ color: "goldenrod" }} href="/login">Login Here</Link></p>
                </div> */}
            </div>
        </div>
    );
}

export default NewTournament;
