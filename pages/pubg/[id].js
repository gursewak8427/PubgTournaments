// tournament details
import { useEffect, useState } from "react"
import style from "./pubg.module.css"
import Dropdown from "@/components/Dropdown";
import Popup from "@/components/Popup";
import { CircleStackIcon, ExclamationTriangleIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import Register from "../register";
import JoinForm from "../joinForm";
import { copyToClipboard } from "../newTournament";

var futureDate = null
export default function Pubg() {
    // const [userId, setUserId] = useState(null)
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [userRole, setUserRole] = useState("ADMIN")
    const [isMatchEnd, setIsMatchEnd] = useState(false)

    const [sortBy, setSortBy] = useState(1)
    const router = useRouter();
    const { id } = router.query;
    const [tournamentDetails, setTournamentDetails] = useState(null)



    const getData = async () => {
        try {
            console.log({ id: router.query })
            if (id == -1) return;
            let response = await axios.get(`/api/tournament/${id}`)
            console.log({ response })
            if (response?.data) {
                setTournamentDetails(response?.data || null)
            }
        } catch (err) {
            console.log(err?.response?.data?.message)
            console.log({ err })
            alert(err?.response?.data?.message || "Something went wrong")
        }
    }



    function updateCountdown() {
        // Get the current date and time (in UTC)
        if (!futureDate) return;

        const currentDate = new Date().getTime();

        // Calculate the time difference
        const timeDifference = futureDate - currentDate;
        console.log({ futureDate, timeDifference })
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // Display the countdown
        document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        // Check if the countdown has reached zero
        if (timeDifference <= 0) {
            document.getElementById('countdown').innerHTML = 'Countdown expired';
            // You can add additional actions to perform when the countdown reaches zero
        }
    }


    useEffect(() => {
        if (!id) return;

        getData();

        // localStorage.setItem('matchId', id || "");
        // let userId = localStorage.getItem("user")
        // if (userId && userId != "") {
        //     setUserId(userId)
        // } else {
        //     setUserId(null)
        //     // router.push("/login")
        // }

        // setTimeout(() => {
        //     setTournamentDetails({
        //         name: "Pubg Tournament 2023",
        //         date: "25 Dec, 2023",
        //         time: "08:00 PM",
        //         price: "5",
        //         enter_fee: "10",
        //         max_participents: 100,
        //         min_participents: 10,
        //         participents: [{
        //             pubg_id: "12321412",
        //             pubg_id_name: "LIGER'44",
        //             payment: {
        //                 paymentId: "pi12312fdsfsd",
        //                 status: "PAID"
        //             },
        //             upiId: "9041912970@ybl"
        //         }, {
        //             pubg_id: "123214123",
        //             pubg_id_name: "LIGER'44",
        //             payment: {
        //                 paymentId: "pi12312fdsfsd",
        //                 status: "PAID"
        //             },
        //             upiId: "9041912970@ybl"
        //         }, {
        //             pubg_id: "123214123",
        //             pubg_id_name: "LIGER'44",
        //             payment: {
        //                 paymentId: "pi12312fdsfsd",
        //                 status: "PAID"
        //             },
        //             upiId: "9041912970@ybl"
        //         }, {
        //             pubg_id: "123214123",
        //             pubg_id_name: "LIGER'44",
        //             payment: {
        //                 paymentId: "pi12312fdsfsd",
        //                 status: "PAID"
        //             },
        //             upiId: "9041912970@ybl"
        //         }, {
        //             pubg_id: "123214123",
        //             pubg_id_name: "LIGER'44",
        //             payment: {
        //                 paymentId: "pi12312fdsfsd",
        //                 status: "PAID"
        //             },
        //             upiId: "9041912970@ybl"
        //         }, {
        //             pubg_id: "123214123243",
        //             pubg_id_name: "LIGER'44",
        //             payment: {
        //                 paymentId: "pi12312fdsfsd",
        //                 status: "PAID"
        //             },
        //             upiId: "9041912970@ybl"
        //         }, {
        //             pubg_id: "123214123",
        //             pubg_id_name: "LIGER'44",
        //             payment: {
        //                 paymentId: "pi12312fdsfsd",
        //                 status: "PAID"
        //             },
        //             upiId: "9041912970@ybl"
        //         }, {
        //             pubg_id: "123214123",
        //             pubg_id_name: "LIGER'44",
        //             payment: {
        //                 paymentId: "pi12312fdsfsd",
        //                 status: "PAID"
        //             },
        //             upiId: "9041912970@ybl"
        //         }, {
        //             pubg_id: "123214123",
        //             pubg_id_name: "LIGER'44",
        //             payment: {
        //                 paymentId: "pi12312fdsfsd",
        //                 status: "PAID"
        //             },
        //             upiId: "9041912970@ybl"
        //         }, {
        //             pubg_id: "123214123",
        //             pubg_id_name: "LIGER'44",
        //             payment: {
        //                 paymentId: "pi12312fdsfsd",
        //                 status: "PAID"
        //             },
        //             upiId: "9041912970@ybl"
        //         }, {
        //             pubg_id: "123214123",
        //             pubg_id_name: "LIGER'44",
        //             payment: {
        //                 paymentId: "pi12312fdsfsd",
        //                 status: "PAID"
        //             },
        //             upiId: "9041912970@ybl"
        //         }, {
        //             pubg_id: "123214123",
        //             pubg_id_name: "LIGER'44",
        //             payment: {
        //                 paymentId: "pi12312fdsfsd",
        //                 status: "PAID"
        //             },
        //             upiId: "9041912970@ybl"
        //         }, {
        //             pubg_id: "123214123",
        //             pubg_id_name: "LIGER'44",
        //             payment: {
        //                 paymentId: "pi12312fdsfsd",
        //                 status: "PAID"
        //             },
        //             upiId: "9041912970@ybl"
        //         }, {
        //             pubg_id: "123214123",
        //             pubg_id_name: "LIGER'44",
        //             payment: {
        //                 paymentId: "pi12312fdsfsd",
        //                 status: "PAID"
        //             },
        //             upiId: "9041912970@ybl"
        //         }, {
        //             pubg_id: "123214123",
        //             pubg_id_name: "LIGER'44",
        //             payment: {
        //                 paymentId: "pi12312fdsfsd",
        //                 status: "PAID"
        //             },
        //             upiId: "9041912970@ybl"
        //         }, {
        //             pubg_id: "123214123",
        //             pubg_id_name: "LIGER'44",
        //             payment: {
        //                 paymentId: "pi12312fdsfsd",
        //                 status: "PAID"
        //             },
        //             upiId: "9041912970@ybl"
        //         }]
        //     })
        // }, 0);
    }, [id])

    // if (id == -1) {
    //     return "Please open invite Link"
    // }

    if (id == -1)
        return <>Please Open Invite Link</>

    if (!tournamentDetails)
        return <>Wait</>

    const { roomId, name, date, time, price, entery_fees, participents, max_participents, min_participents } = tournamentDetails;

    return (

        <div id={style.mainPage}>
            {
                <Popup isOpen={isPopupOpen} onClose={() => {
                    setIsPopupOpen(false)
                }}>
                    <JoinForm id={id} tournamentDetails={tournamentDetails} />
                </Popup>
            }
            {/* {
                userId &&
                <div className={style.top}>
                    <span className={style.name}>{userId}</span>
                    <button onClick={() => {
                        localStorage.removeItem("user")
                        window.location.href = "/login"
                    }}>Logout</button>
                </div>
            } */}
            <img src="/tournament.jpg" className={style.coverImage} />
            <h1 className={style.name}>{name}</h1>
            {/* <h1 className={style.name} id="countdown"></h1> */}
            <div className={style.datetime}>
                <div>
                    <p>Room Id  : {roomId || "--"}
                        <img src="/copy-icon.svg" className={style.copyIcon} onClick={() => copyToClipboard(roomId)} />
                    </p>
                    <p>Entry Fee : ₹{entery_fees}</p>
                    <p>Per Kill : ₹{price}</p>
                </div>
                <div>
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
            </div>

            <h2 className={style.heading}>
                <span>Participants ({participents?.length}/{max_participents})</span>
                {/* <button onClick={() => displayRazorpay(entery_fees)}>Join Now</button> */}
                {/* <button>Register Here</button> */}
                {
                    participents?.length == max_participents ?
                        <button onClick={() => alert("Seats are full")}>Seat Full</button> :
                        tournamentDetails?.status === "PENDING" ?
                            <button onClick={() => alert("Match is Pending")}>PENDING</button> :
                            tournamentDetails?.status === "OPEN" ?
                                <button onClick={() => setIsPopupOpen(true)}>
                                    Join Now
                                </button> :
                                tournamentDetails?.status === "START" ?
                                    <button onClick={() => alert("Match is already Started")}>In Progress</button> :
                                    tournamentDetails?.status === "END" &&
                                    <button onClick={() => alert("This Match is END")}>Match End</button>
                }
                {/* <button>Join Now</button> */}
            </h2>
            <i><p className={style.heading2}>Minimum {min_participents} Participants are required to start the match otherwise your money will be refunded</p></i>
            <ul>
                {participents.map((participant, index) => (
                    <li key={participant.pubg_id} className={style.listItem}>
                        <div>
                            <p>{index + 1 < 10 ? `0${index + 1}` : index + 1}</p>
                            <p>{participant.pubg_id} <span>({participant.pubg_id_name})</span></p>
                        </div>
                        <div>
                            {
                                tournamentDetails?.status == "END" && <p>{participant?.kills} Kills</p>
                            }
                            {
                                userRole != "ADMIN" && <>
                                    {/* participant?.pubg_id == userId && userRole != "ADMIN" && <> */}
                                    <p style={{ color: "orange" }}>UPI : {participant.upi_id}</p>
                                    <p>Entery Fee : {participant?.entery_fees?.paymentId} ({participant?.entery_fees?.status})</p>
                                    {
                                        tournamentDetails?.status == "END" && <>
                                            <p>Transaction Id : {participant?.payment?.paymentId} ({participant?.payment?.status})</p>
                                        </>
                                    }
                                </>
                            }
                        </div>

                        {userRole == "ADMIN" && <div>
                            <p style={{ color: "orange" }}>UPI : {participant?.upi_id}</p>
                            {
                                tournamentDetails?.status == "END" && <>
                                    <p>Transaction Id : {participant?.payment?.paymentId} ({participant?.payment?.status})</p>
                                </>
                            }
                            <p>Entery Fee : {participant?.entery_fees?.paymentId} ({participant?.entery_fees?.status})</p>
                        </div>
                        }
                    </li>
                ))}
            </ul>
        </div >
    );
}