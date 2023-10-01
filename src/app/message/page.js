"use client"

import React, { useEffect } from "react";
import Image from "next/image";
import Sidebar from "../Components/Sidebar";
import Topbar from "../Components/Topbar";
import { useState } from "react";

export default function page() {
    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        fetch("/fakedata/message.json")
            .then(res => {
                setLoading(false)
                return res.json()

            })
            .then(json => setMessages(json))
    }, [])
    const [limit, setLimit] = useState(6)
    const [selected, setSelected] = useState(false)

    return (
        <section className="w-full flex justify-between ">
            <div className="container-1">
                <Sidebar />
            </div>
            <div className="container-2 px-5 h-screen overflow-y-auto">

                <Topbar headLine={"Messages"} />
                {
                    loading ? <div className="loading-sp flex justify-center w-full p-5">
                        <span className="loading loading-dots loading-lg"></span>
                    </div>
                        :
                        <div className="grid grid-cols-12 gap-5 w-full mt-10">
                            <div className="w-full col-span-4  h-[85vh] p-5 overflow-y-auto">
                                <div className="message-search flex justify-between  items-center">
                                    <div className='w-[300px] h-[40px] relative'>
                                        <Image src={'/Images/magnifier.png'} height={20} width={20}
                                            className='absolute top-2 bottom-0'
                                            alt='This is Image' />
                                        <input className='w-full h-full bg-white pl-6 pr-3 rounded-lg focus:outline-none text-[#A098AE]' type="text" name="" id="" placeholder='Search Here...' />
                                    </div>
                                    <button className="plus-icon bg-color-1 p-2 rounded-lg">
                                        <Image src={'/Images/icon/plus.png'} alt="plus" height={18} width={18}
                                        />
                                    </button>
                                </div>

                                <div className="your-chat mt-7">
                                    <h4 className="text-zinc-400 text-lg font-semibold ">Your Chat</h4>

                                    <section className="chat-users mt-5">
                                        {
                                            messages.map((m, index) => {
                                                return <>
                                                    {
                                                        index <= limit && <UserCard data={m} set={setSelected} />
                                                    }
                                                </>
                                            })
                                        }
                                    </section>
                                    {
                                        limit === messages.length ?
                                            <></>
                                            :
                                            <button
                                                onClick={() => {
                                                    setLimit(messages.length)
                                                }}
                                                className="w-96 mx-auto block h-14 rounded-2xl shadow border border-yellow-500">
                                                <div className="text-yellow-500 text-[18px] font-semibold ">View More</div>
                                            </button>
                                    }


                                </div>
                            </div>
                            <div className="col-span-8 w-full  h-[85vh] p-10 relative">
                                {
                                    selected ?
                                        <>
                                            <div className="flex justify-between">
                                                <div className="flex">
                                                    <div className="w-16 h-16 bg-stone-300 rounded-2xl" />
                                                    <div className="ml-3">
                                                        <h2 className="text-zinc-800 text-2xl font-bold ">{selected.name ? selected.name : "Driver"}</h2>
                                                        <div className="flex items-center">
                                                            <div className="w-4 h-4 bg-lime-400 rounded" />
                                                            <p className="text-zinc-400 text-lg font-normal ml-3 ">Online</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center">
                                                    <button>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                                        </svg>

                                                    </button>
                                                    <button className="ml-5">
                                                        <Image src={'/Images/icon/3-dot.svg'} width={20} height={10} />
                                                    </button>
                                                </div>
                                            </div>
                                            {/* Chats  */}
                                            <Chats chats={selected.chats ? selected.chats : []} />

                                            {/* Chat Send Box  */}
                                            <div className="flex justify-between items-center absolute bottom-0 left-0 right-0 p-5" >
                                                <div className='w-[300px] h-[40px] relative'>

                                                    <input className='w-full h-full bg-white pl-6 pr-3 rounded-lg focus:outline-none text-[#A098AE]' type="text" name="" id="" placeholder='Write Your Message' />
                                                </div>
                                                <div>
                                                    <button>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13" />
                                                        </svg>
                                                    </button>
                                                    <button className="ml-5">
                                                        <Image src={'/Images/icon/3-dot.svg'} width={20} height={10} />
                                                    </button>
                                                    <button className="w-32 h-14 px-5 py-2 ml-5 bg-yellow-500 rounded-2xl justify-center items-center gap-2 inline-flex">
                                                        <div className="text-white text-lg font-semibold ">Send</div>
                                                        <Image src={'/Images/icon/Sent.png'} width={20} height={12} />

                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <div className="flex justify-center items-center w-full h-full">
                                            <h1 className="text-4xl">Select a Driver</h1>
                                        </div>
                                }







                            </div>

                        </div>
                }



            </div>


        </section>
    )
}
const UserCard = ({ data, set }) => {
    return (
        <div
            onClick={() => set(data)}
            className="flex hover:bg-slate-100 p-2 rounded-lg hover:cursor-pointer justify-between items-center mb-4">
            <div className="flex">
                <div className="w-14 h-14 bg-stone-300 rounded-2xl" />
                <div className="ml-4">
                    <div className="flex justify-between">
                        <h3 className="text-zinc-800 text-lg font-semibold ">{data.name}</h3>

                    </div>
                    <p className="text-zinc-400 text-sm font-normal ">{data.messages}...</p>
                </div>
            </div>
            <div>
                <p className="text-zinc-400 text-sm font-normal">12:45 PM</p>

            </div>
        </div>
    )
}

const Chats = ({ chats }) => {
    return <section className="w-full mt-10 ">
        {/* <h2 className="text-zinc-800 text-lg font-semibold">Driver</h2> */}
        {
            chats.map((chat, index) => <>
                {
                    chat.side === "left" ?
                        <div key={index} className="flex items-end justify-start mt-4">
                            <div className="w-14 h-14 relative">
                                <div className="w-14 h-14 left-0 top-0 absolute bg-stone-300 rounded-2xl" />
                                <div className="w-4 h-4 left-[44px] top-[44px] absolute bg-lime-400 rounded border border-white" />
                            </div>

                            <div className="ml-5">
                                <div className=" opacity-80 bg-yellow-500 rounded-2xl px-5 py-2 mt-5" >
                                    <p className="text-zinc-800 text-lg font-normal ">{chat.message}</p>
                                </div>
                            </div>
                        </div>
                        :
                        <div key={index} className="flex items-end justify-end mt-4">
                            <div className="mr-5">
                                <div className=" opacity-80 bg-yellow-500 rounded-2xl px-5 py-2 mt-5" >
                                    <p className="text-zinc-800 text-lg font-normal ">{chat.message}</p>
                                </div>
                            </div>
                            <div className="w-14 h-14 relative">
                                <div className="w-14 h-14 left-0 top-0 absolute bg-stone-300 rounded-2xl" />
                                <div className="w-4 h-4 left-[44px] top-[44px] absolute bg-lime-400 rounded border border-white" />
                            </div>
                        </div>
                }
            </>)
        }

    </section>
}