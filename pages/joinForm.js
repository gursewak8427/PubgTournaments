import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';


const JoinForm = ({ id, tournamentDetails }) => {

    const setLocalData = (obj) => {
        let keys = Object.keys(obj)
        let key = keys[0]
        let value = obj[key]
        console.log({ [key]: value })
        localStorage.setItem(key, value)
    }

    const getLocalData = (key) => localStorage.getItem(key)

    const [isJoining, setJoining] = useState(false)

    const router = useRouter();
    const [state, setState] = useState({
        pubg_id: getLocalData("pubg_id"),
        pubg_id_name: getLocalData("pubg_id_name"),
        upi_id: getLocalData("upi_id"),
        phone: getLocalData("phone"),
    })



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

            let oldUser = tournamentDetails?.participents?.filter(p => {
                if (p?.pubg_id == state.pubg_id) return p;
            })

            if (oldUser?.length != 0) {
                alert("You already Join")
                return;
            }

            let { pubg_id, pubg_id_name, upi_id, phone } = state;
            if (pubg_id == "" || pubg_id_name == "" || upi_id == "" || phone == "") return;
            if (!pubg_id || !pubg_id_name || !upi_id || !phone) return;
            // if (!userId) window.location.href = "/login"
            setLocalData({ pubg_id })
            setLocalData({ pubg_id_name })
            setLocalData({ upi_id })
            setLocalData({ phone })

            setJoining(true)

            const res = await loadScript(
                "https://checkout.razorpay.com/v1/checkout.js"
            );

            if (!res) {
                alert("Razorpay SDK failed to load. Are you online?");
                return;
            }

            // creating a new order
            const result = await axios.post("/api/payment/order/", {
                // const result = await axios.post("https://pubg-tournaments.onrender.com//api/payment/order/", {
                "amount": tournamentDetails?.entery_fees,
                "tournamentId": id,
                "pubg_id": state.pubg_id,
                "pubg_id_name": state.pubg_id_name,
                "upi_id": state.upi_id,
                "phone": state.phone
            });

            if (!result) {
                alert("Server error. Are you online?");
                return;
            }

            // Getting the order details back
            const { orderId } = result.data;

            const options = {
                key: process.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
                amount: tournamentDetails?.entery_fees.toString(),
                currency: "INR",
                name: "Jashan Pubg Tournaments",
                description: "Jashan Pubg Tournaments",
                // image: { logo },
                order_id: orderId,
                handler: async function (response) {
                    console.log({ response })


                    setJoining(false)
                    window.location.reload();

                    // const data = {
                    //     orderCreationId: orderId,
                    //     razorpayPaymentId: response.razorpay_payment_id,
                    //     razorpayOrderId: response.razorpay_order_id,
                    //     razorpaySignature: response.razorpay_signature,
                    // };

                    // const result = await axios.post("http://localhost:5000/payment/success", data);

                    // alert(result.data.msg);
                },
                prefill: {
                    name: "Soumya Dey",
                    email: "SoumyaDey@example.com",
                    contact: "9999999999",
                },
                notes: {
                    address: "Soumya Dey Corporate Office",
                },
                theme: {
                    color: "#61dafb",
                },
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (e) {
            alert(e?.message || "Something Went Wrong")
        }
    }



    return (
        <div className="registerForm flex justify-center items-center bg-dark text-white">
            <div className="w-96 p-8 rounded-lg shadow-md bg-div">
                {/* <h2 className="mb-6 text-2xl font-bold underline">JoinForm Here</h2> */}
                <label className="block mb-4">
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
                </label>
                <label className="block mb-4">
                    UPI Id:
                    <input
                        name='upi_id'
                        onChange={handleChange}
                        value={state.upi_id}
                        type="text"
                        placeholder='Enter Your UPI Id'
                        className="w-full px-4 py-2 mt-2 rounded bg-input text-white"
                    />
                    {/* <small><i></i></small> */}
                </label>
                <label className="block mb-4">
                    Phone :
                    <input
                        name='phone'
                        onChange={handleChange}
                        value={state.phone}
                        type="text"
                        placeholder='Enter Phone Number'
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
                        isJoining ? "Joining..." :
                            `Pay ₹${tournamentDetails?.entery_fees} and Join Tournament`
                    }
                </button>
                {/* <div className='float-left mt-3'>
                    <p>Already a member, <Link style={{ color: "goldenrod" }} href="/login">Login Here</Link></p>
                </div> */}
            </div>
        </div>
    );
}

export default JoinForm;
