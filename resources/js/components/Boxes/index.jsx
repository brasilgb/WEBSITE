import React, { Fragment } from 'react'

export const ABox = ({ children }) => {
    return (
        <Fragment>
            <div className="relative my-2 mx-4 bg-white shadow rounded border border-gray-50 z-10">
                {children}
            </div>
        </Fragment>
    )
};

export const AboxHeader = ({ children }) => {
    return (
        <Fragment>
            <div className="flex items-center justify-between py-3 px-5 border-b z-10">
                {children}
            </div>
        </Fragment>
    )
};

export const AboxBody = ({ children }) => {
    return (
        <Fragment>
            <div className="py-6 px-5 overflow-x-auto">
                {children}
            </div>
        </Fragment>
    )
};

export const AboxFooter = ({ children }) => {
    return (
        <Fragment>
            <div className="py-2 px-5 border-t z-10">
                {children}
            </div>
        </Fragment>
    )
};
