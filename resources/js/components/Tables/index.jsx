import React, { Fragment } from 'react';
export const ATable = ({ children }) => {
    return (
        <Fragment>
            <div className="border border-gray-200 rounded">
                            <table className='w-full'>
                {children}
            </table>
            </div>

        </Fragment>
    );
};

export const ATr = ({ thead, children, colorRow }) => {
    return (
        <Fragment>

            {thead ?
                <thead>
                    <tr>
                        {children}
                    </tr>
                </thead>
                :
                <tbody className="animate__animated animate__fadeIn">
                    <tr className={`${colorRow > 0 ? "bg-gray-50" :"bg-blue-50"} hover:bg-orange-50`}>
                        {children}
                    </tr>
                </tbody>
            }

        </Fragment>
    );
};

export const ATh = ({ children, colspan, className }) => {
    return (
        <Fragment>
            <th
            colSpan={colspan}
                className={`text-left bg-gray-200 px-2 py-2 text-md ${className}`}
            >
                    {children}
            </th>
        </Fragment>
    );
};

export const ATd = ({ children, colspan }) => {
    return (
        <Fragment>
            <td
                colSpan={colspan}
                className='px-2 py-2 border-b border-gray-100 text-md'
            >
                {children}
            </td>
        </Fragment>
    );
};