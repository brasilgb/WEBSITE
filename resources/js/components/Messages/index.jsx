import React, { Fragment } from 'react'
import { IoAlertCircleSharp, IoCheckmarkCircleSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';

export const AMessageError = ({ message }) => {

    return (
        <Fragment>
            <div class="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 border border-red-200 shadow-sm" role="alert">
            <IconContext.Provider value={{ color:"", className:"text-xl mr-2"}}>
                    <IoAlertCircleSharp/>
                </IconContext.Provider>
                <div>
                    {message}
                </div>
            </div>
        </Fragment>

    )
}

export const AMessageSuccess = ({ message }) => {

    return (
        <Fragment>
            <div class="flex p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                <IconContext.Provider value={{ color:"", className:"text-xl mr-2"}}>
                    <IoCheckmarkCircleSharp/>
                </IconContext.Provider>
                <div>
                    {message}
                </div>
            </div>
        </Fragment>

    )
}
