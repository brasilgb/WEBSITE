import { Link } from '@inertiajs/inertia-react';
import React, { Fragment } from 'react';

import { IconContext } from 'react-icons';
import { IoHome } from 'react-icons/io5';

const SubBar = ({ breadcumb, titleBlock }) => {

    return (
        <Fragment>
            <div className="flex items-center justify-between px-4 py-2">

                <div className="flex items-center">
                    <IconContext.Provider value={{ color: "#666", className: "font-bold text-3xl" }}>
                        <div className="pr-1">
                            {titleBlock[0].icon}
                        </div>
                    </IconContext.Provider>
                    <h1 className="md:block hidden text-3xl text-gray-500">{titleBlock[0].title}</h1>
                </div>


                <div>
                    <ul className="flex items-center justify-start text-base">
                        <Link
                        href={route('home')}
                        >
                            <IconContext.Provider value={{ color: "#666", className: "font-bold text-xl" }}>
                                <div className="pr-1">
                                    <IoHome />
                                </div>
                            </IconContext.Provider>
                        </Link>
                        {breadcumb[0].value&&<span className={'mx-3 text-gray-500 dark:text-gray-300'}>/</span>}
                        {breadcumb.map((bc, index) => (
                            <li key={index}>
                                {bc.url
                                    ?
                                    <>
                                        <Link
                                            className="text-blue-600 dark:text-blue-400 hover:underline"
                                            href={route(bc.url)}
                                        >
                                            {bc.value}
                                        </Link>
                                        <span className={`${bc.separator ? 'mx-5 text-gray-500 dark:text-gray-300' : ''}`}>{bc.separator}</span>
                                    </>
                                    :
                                    <>
                                        <span className="text-gray-600">{bc.value}</span>
                                        <span className={`${bc.separator ? 'mx-5 text-gray-500 dark:text-gray-300' : ''}`}>{bc.separator}</span>
                                    </>
                                }
                            </li>

                        ))}
                    </ul>
                </div>
            </div>
        </Fragment>
    )
}

export default SubBar;