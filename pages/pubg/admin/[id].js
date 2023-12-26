// tournament details
import { useEffect, useState } from "react"
import style from "../pubg.module.css"
import Dropdown from "@/components/Dropdown";
import Popup from "@/components/Popup";
import { CircleStackIcon, ExclamationTriangleIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";
import Image from "next/image";
import axios from "axios";
import Register from "../../register";
import JoinForm from "../../joinForm";
import UpdateParticipents from "@/pages/updateParticipents";
import NewTournament, { copyToClipboard } from "@/pages/newTournament";

export default function Pubg() {
    // const [userId, setUserId] = useState(null)
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [isPopupNewTournament, SetIsPopupNewTournament] = useState(false)
    const [isPopupUpdateTournament, SetIsPopupUpdateTournament] = useState(false)
    const [activeParticipent, setActiveParticipent] = useState(-1)
    const [userRole, setUserRole] = useState("ADMIN")
    const [isMatchEnd, setIsMatchEnd] = useState(false)

    const [statusUpdating, setStatusUpdating] = useState(false);

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


    const updateMatch = async (status) => {

        try {
            setStatusUpdating(status);
            // creating a new order
            const result = await axios.patch(`/api/tournament/${id}`, {
                "status": status,
            });
            setStatusUpdating(false);
            alert("Update Successfully")
            window.location.reload();

        } catch (e) {
            alert(e?.message || "Something Went Wrong")
        }
    }

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
                    <UpdateParticipents id={id} activeParticipent={activeParticipent} tournamentDetails={tournamentDetails} />
                </Popup>
            }
            {
                <Popup isOpen={isPopupNewTournament} onClose={() => {
                    SetIsPopupNewTournament(false)
                }}>
                    <NewTournament />
                </Popup>
            }
            {
                <Popup isOpen={isPopupUpdateTournament} onClose={() => {
                    SetIsPopupUpdateTournament(false)
                }}>
                    <NewTournament oldData={tournamentDetails} oldId={id} />
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
            <div className={style.headingWithButton}>
                <h1 className={style.name}>{name}</h1>
                <div>
                    <span onClick={() => SetIsPopupNewTournament(true)}>New</span>
                    <span onClick={() => SetIsPopupUpdateTournament(true)}>Update</span>
                </div>
            </div>
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

            <h2 className={`${style.heading} ${style.admin}`}>
                <span>Participants ({participents?.length}/{max_participents})</span>
                <div>
                    <button onClick={() => statusUpdating != false ? null : updateMatch("OPEN")} className={tournamentDetails?.status == "OPEN" && `${style.active}`}>
                        {
                            statusUpdating == "OPEN" ? "Loading..." : "Open"
                        }
                    </button>
                    <button onClick={() => statusUpdating != false ? null : updateMatch("START")} className={tournamentDetails?.status == "START" && `${style.active}`}>
                        {
                            statusUpdating == "START" ? "Loading..." : "Started"
                        }
                    </button>
                    <button onClick={() => statusUpdating != false ? null : updateMatch("END")} className={tournamentDetails?.status == "END" && `${style.active}`}>
                        {
                            statusUpdating == "END" ? "Loading..." : "End"
                        }
                    </button>
                </div>
                {/* <button>Register Here</button> */}
                {/* {
                    participents?.length == max_participents ?
                        <button onClick={() => alert("Seats are full")}>Seat Full</button> :
                        tournamentDetails?.status === "PENDING" ?
                            <button onClick={() => alert("Match is Pending")}>PENDING</button> :
                            tournamentDetails?.status === "OPEN" ?
                                <button onClick={() => alert("You are admin")}>
                                    Join Now
                                </button> :
                                tournamentDetails?.status === "START" ?
                                    <button onClick={() => alert("Match is already Started")}>In Progress</button> :
                                    tournamentDetails?.status === "END" &&
                                    <button onClick={() => alert("This Match is END")}>Match End</button>
                } */}
                {/* <button>Join Now</button> */}
            </h2>
            <i><p className={style.heading2}>Minimum {min_participents} Participants are required to start the match otherwise your money will be refunded</p></i>
            <ul>
                {participents.map((participant, index) => (
                    <li onClick={() => {
                        setActiveParticipent(index)
                        setIsPopupOpen(true)
                    }} key={participant.pubg_id} className={style.listItem}>
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