// tournament details
import { useEffect, useState } from "react"
import style from "./pubg.module.css"
import Dropdown from "@/components/Dropdown";
import Popup from "@/components/Popup";
import { CircleStackIcon, ExclamationTriangleIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function pubg() {
    const router = useRouter();
    const { tournamentId } = router.query;
    const [tournamentDetails, setTournamentDetails] = useState(null)

    useEffect(() => {
        setTimeout(() => {
            setTournamentDetails({
                name: "Pubg Tournament 2023",
                date: "25 Dec, 2023",
                time: "08:00 PM",
                price: "5",
                enter_fee: "10",
                participents: [{
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }, {
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }, {
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }, {
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }, {
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }, {
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }, {
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }, {
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }, {
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }, {
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }, {
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }, {
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }, {
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }, {
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }, {
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }, {
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }]
            })
        }, 0);
    }, [])

    if (!tournamentDetails)
        return <>Wait</>

    const { name, date, time, price, enter_fee, participents } = tournamentDetails;

    return (
        <div>
            <img src="/tournament.jpg" className={style.coverImage} />
            <h1 className={style.name}>{name}</h1>
            <div className={style.datetime}>
                <div>
                    <p>Entry Fee : {enter_fee}</p>
                    <p>Per Kill : {price}</p>
                </div>
                <div>
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
            </div>

            <h2 className={style.heading}>
                <span>Participants</span>
                {/* <button>Register Here</button> */}
                <button>Join Now</button>
            </h2>

            <ul>
                {participents.map((participant, index) => (
                    <li key={participant.pubg_id} className={style.listItem}>
                        <div>
                            {/* <p>{participant.pubg_id}</p>
                        <p>{participant.pubg_id_name}</p> */}
                            <p>{index + 1 < 10 ? `0${index + 1}` : index + 1}</p>
                            <p>{participant.pubg_id} <span>({participant.pubg_id_name})</span></p>
                            {/* <p>Pubg ID Name: </p> */}
                        </div>
                        {/* <div>
                        <p>Payment {participant.payment.paymentId} ({participant.payment.status})</p>
                        <p>UPI ID: {participant.upiId}</p>
                    </div> */}
                    </li>
                ))}
            </ul>
        </div>
    );
}