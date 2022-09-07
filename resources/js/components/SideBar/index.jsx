import React, { Fragment, useState } from 'react';
import {
    IoSpeedometerOutline,
    IoPeopleOutline,
    IoTimeOutline,
    IoMenu,
    IoClose
} from 'react-icons/io5';
import { FaWarehouse } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from '@inertiajs/inertia-react';

const SideBar = () => {

    const [showSide, setShowSide] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <Fragment>

            <div className="h-screen w-10 absolute left-0 top-0 items-start z-50 md:hidden">
                <div onClick={() => setShowSide(!showSide)} className="h-10 w-10 pt-3 overflow-hidden grid place-items-center cursor-pointer">
                    {!showSide && <IoMenu size={20} color='#555' />}
                    {showSide && <IoClose size={20} color='#555' />}
                </div>
            </div>

            <div className={`md:flex flex-col z-40 w-64 h-screen p-2 bg-white border-r border-gray-300 shadow-lg fixed ease-in-out duration-300
            ${showSide ? 'translate-x-0' : 'md:translate-x-0 -translate-x-64'}
            `}>

                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full"
                        src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auhref=format&fit=crop&w=634&q=80" alt="avatar" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 hover:underline">Minha empresa</h4>
                </div>

                <hr className="my-6 border-gray-200" />
                <div className="flex flex-col justify-between flex-1 mt-6 text-base">
                    <nav>
                        <Link
                            className={`flex items-center px-4 py-2 transition-colors duration-200 transform rounded-md text-gray-600 hover:bg-gray-200`}
                            href={route('home')}
                        >
                            <IconContext.Provider value={{ color: "#666", className: "font-bold text-xl" }}>
                                <div>
                                    <IoSpeedometerOutline />
                                </div>
                            </IconContext.Provider>
                            <span className="mx-4 font-normal">Dashboard</span>
                        </Link>
                        <Link
                            className={`flex items-center px-4 py-2 mt-2 transition-colors duration-200 transform rounded-md text-gray-600 hover:bg-gray-200`}
                            href={route('ciclos.index')}
                        >
                            <IconContext.Provider value={{ color: "#666", className: "font-bold text-xl" }}>
                                <div>
                                    <IoTimeOutline />
                                </div>
                            </IconContext.Provider>
                            <span className="mx-4 font-normal">Ciclos</span>
                        </Link>
                        <div>
                            <Link
                                onClick={() => setShowMenu(!showMenu)}
                                className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200"
                                href="#"
                            >
                                <FaWarehouse size={20} />
                                <span className="mx-4 font-normal">Lotes/Aviários</span>
                            </Link>
                            <div className="pt-2 pl-4">
                                <div className={`${showMenu ? 'flex' : 'hidden'} flex-col pl-2 pr-2 text-gray-500 border-l border-gray-200`}>
                                    <Link className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200" href="#">
                                        <IoMenu size={20} />
                                        <span className="mx-4 font-normal">Lotes</span>
                                    </Link>
                                    <Link className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200" href="#">
                                        <IoMenu size={20} />
                                        <span className="mx-4 font-normal">Aviários</span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <hr className="my-6 border-gray-200" />
                        <Link className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200" href="#">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span className="mx-4 font-normal">Settings</span>
                        </Link>

                        <Link className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200" href="#">
                            <IoPeopleOutline size={20} />
                            <span className="mx-4 font-normal">Accounts</span>
                        </Link>
                    </nav>
                </div>
            </div>

        </Fragment>
    )
}

export default SideBar;
