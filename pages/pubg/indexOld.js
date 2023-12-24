// List of tournaments
import { useState } from "react"
import style from "./Booking.module.css"
import Dropdown from "@/components/Dropdown";
import Popup from "@/components/Popup";
import { CircleStackIcon, ExclamationTriangleIcon, UserIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

export default function Hostelbooking() {
    const [state, setState] = useState({
        hostels: [{
            id: 1,
            name: "Baba deep singh ji hostel",
            gender: "male"
        },
        {
            id: 2,
            name: "Baba Baaz singh ji hostel",
            gender: "male"
        },
        {
            id: 3,
            name: "Bibi Bhani Girls Hostel",
            gender: "female"
        }],

        floors: [{
            id: 1,
            name: "Floor 1"
        },
        {
            id: 2,
            name: "Floor 2"
        },
        {
            id: 3,
            name: "Floor 3"
        },
        {
            id: 4,
            name: "Floor 4"
        }],

        rooms: [{
            id: 1,
            name: "room 101",
            maxStudents: 2,
            currentStudents: [{
                id: 1,
                name: "Rahul"
            }],
            status: "PARTIALLY_AVAILABLE",
        },
        {
            id: 2,
            name: "room 102",
            maxStudents: 2,
            currentStudents: [{
                id: 1,
                name: "Rahul"
            }],
            status: "PARTIALLY_AVAILABLE",
        },
        {
            id: 3,
            name: "room 103",
            maxStudents: 2,
            currentStudents: [{
                id: 1,
                name: "Ram"
            },
            {
                id: 1,
                name: "Sham"
            }],
            status: "OCCUPIED",
        },
        {
            id: 4,
            name: "room 104",
            maxStudents: 2,
            currentStudents: [],
            status: "FULLY_AVAILABLE",
        },
        {
            id: 5,
            name: "room 105",
            maxStudents: 2,
            currentStudents: [],
            status: "BLOCKED",
        }],
    })

    const [userSelection, setUserSelection] = useState({
        hostel: null,
        floor: null,
        room: null,
    });

    const [isModalOpen, setModalOpen] = useState(false);
    const [activeRoomIndex, setActiveRoomIndex] = useState(-1)

    const openModal = (roomIndex) => {
        setActiveRoomIndex(roomIndex)
        setModalOpen(true)
    };
    const closeModal = () => {
        setModalOpen(false)
        setTimeout(() => {
            setActiveRoomIndex(-1)
        }, 300)
    };



    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    const handleDropdownChange = (e) => {
        const { name, value } = e.target;
        setUserSelection({ ...userSelection, [name]: value })
    };


    const ROOM_STATE_AND_CLASS = {
        "OCCUPIED": "occupied",
        "FULLY_AVAILABLE": "fullyAvailable",
        "PARTIALLY_AVAILABLE": "partiallyAvailable",
        "BLOCKED": "blocked",
    }

    const ROOM_STATE_AND_STATUS = {
        "OCCUPIED": "occupied",
        "FULLY_AVAILABLE": "Fully Available",
        "PARTIALLY_AVAILABLE": "Partially Available",
        "BLOCKED": "Blocked",
    }

    const singleRoom = (room, index) => {
        const getColorClass = () => {
            return ROOM_STATE_AND_CLASS[room?.status]

            // if (room?.isBlocked) return ROOM_STATE_AND_CLASS.BLOCKED;
            // if (room?.maxStudents == room?.currentStudents?.length) return ROOM_STATE_AND_CLASS.OCCUPIED;
            // if (room?.currentStudents?.length == 0) return ROOM_STATE_AND_CLASS.FULLY_AVAILABLE;
            // if (room?.currentStudents?.length < room?.maxStudents) return ROOM_STATE_AND_CLASS?.PARTIALLY_AVAILABLE;
        }

        const getRoomState = () => {
            return ROOM_STATE_AND_STATUS[room?.status]

            // if (room?.isBlocked) return ROOM_STATE_AND_STATUS.BLOCKED;
            // if (room?.maxStudents == room?.currentStudents?.length) return ROOM_STATE_AND_STATUS.OCCUPIED;
            // if (room?.currentStudents?.length == 0) return ROOM_STATE_AND_STATUS.FULLY_AVAILABLE;
            // if (room?.currentStudents?.length < room?.maxStudents) return ROOM_STATE_AND_STATUS?.PARTIALLY_AVAILABLE;
        }

        return (<>
            <div onClick={() => openModal(index)} className={`${style.singleRoom} ${style[getColorClass()]}`}>
                <span>{room.name}</span>
                <span>{getRoomState()}</span>
            </div>
        </>)
    }

    return (<>
        <Popup isOpen={isModalOpen} onClose={closeModal}>
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <UsersIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                            {state?.rooms[activeRoomIndex]?.name}
                        </Dialog.Title>
                        <div className="mt-2">
                            <p className="text-sm text-gray-500">
                                Here is room Details
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={() => closeModal(false)}
                >
                    Close
                </button>
                {/* <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                >
                    Cancel
                </button> */}
            </div>
        </Popup>

        <div className="p-2 flex flex-col justify-center items-center">
            <div className="flex w-1/2">
                <Dropdown placeholder={"Select Hostel"} name="hostel" options={state.hostels} labelKey="name" valueKey="id" onChange={handleDropdownChange} />
                <Dropdown placeholder={"Select Floor"} name="floor" options={state.floors} labelKey="name" valueKey="id" onChange={handleDropdownChange} />
            </div>
            <div className="flex flex-wrap items-center justify-center w-1/2">
                {state.rooms.map((room, index) => singleRoom(room, index))}
            </div>
        </div>
        {/* <Dropdown placeholder={"Select Room"} name="room" options={state.rooms} labelKey="name" valueKey="id" onChange={handleDropdownChange} /> */}
    </>)
}