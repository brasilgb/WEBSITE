import React, { Fragment, useState } from 'react'
import { IoNotificationsOutline, IoPersonOutline } from 'react-icons/io5';

const NavBar = () => {
    const [showLogged, setShowLogged] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    return (
        <Fragment>
            <nav className="md:ml-64 bg-white shadow">
                <div className="px-2 py-4 mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-between">
                            <div className="text-xl font-semibold text-gray-700">
                                {/* <a className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform hover:text-gray-700" href="#">Brand</a> */}
                            </div>

                            {/* <!-- Mobile menu button --> */}
                            <div className="flex md:hidden">
                                <button type="button" className="text-gray-50 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                        <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
                        <div className="flex items-center justify-between">
                            {/* <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                                <a href="#" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0">Join Slack</a>
                                <a href="#" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0">Browse Topics</a>
                                <a href="#" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0">Random Item</a>
                                <a href="#" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0">Experts</a>
                            </div> */}

                            <div className="flex items-center mt-0">
                                <div className="relative">
                                    <button onClick={() => {setShowNotification(!showNotification);setShowLogged(false)}} className="mx-4 text-gray-600">
                                        <IoNotificationsOutline size={24} />
                                    </button>
                                    {showNotification &&
                                        <div className="absolute top-10 right-0 w-64 p-4 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                                            <div className="flex items-center justify-between">
                                                <div>x</div>
                                                <div>5 Notificações</div>
                                            </div>
                                            
                                            <h1>menu notification</h1>
                                        </div>
                                    }
                                </div>

                                <div className="relative">
                                    <button onClick={() => {setShowLogged(!showLogged); setShowNotification(false)}} className="mx-4 text-gray-600">
                                        <IoPersonOutline size={24} />
                                    </button>
                                    {showLogged &&
                                        <div className="absolute top-10 right-0 w-64 p-4 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                                            <div className="flex items-center justify-between">
                                                <div>x</div>
                                                <div>Usuario</div>
                                            </div>
                                            <h1>menu logged</h1><h1>menu logged</h1>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavBar;