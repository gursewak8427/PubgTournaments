// tournament details
import { useEffect, useState } from "react"
import style from "./pubg.module.css"
import Dropdown from "@/components/Dropdown";
import Popup from "@/components/Popup";
import { CircleStackIcon, ExclamationTriangleIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/router";

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
                price: "Per Kill 5",
                enter_fee: "10",
                participents: [{
                    pubg_id: "123214123",
                    pubg_id_name: "LIGER'44",
                    payment: {
                        paymentId: "pi12312fdsfsd",
                        status: "PAID"
                    },
                    upiId: "9041912970@ybl"
                }]
            })
        }, 1000);
    }, [])

    if (!tournamentDetails)
        return <>Wait</>

    const { name, date, time, price, enter_fee, participents } = tournamentDetails;

    return (
        <div>
            <h1>{name}</h1>
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Price: {price}</p>
            <p>Entry Fee: {enter_fee}</p>

            <h2>Participants:</h2>
            <ul>
                {participents.map((participant) => (
                    <li key={participant.pubg_id}>
                        <p>Pubg ID: {participant.pubg_id}</p>
                        <p>Pubg ID Name: {participant.pubg_id_name}</p>
                        <p>Payment Status: {participant.payment.status}</p>
                        <p>UPI ID: {participant.upiId}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}