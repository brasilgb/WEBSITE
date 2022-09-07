import React, { Fragment, useEffect } from "react";
import { IconContext } from "react-icons";
import { IoAddOutline, IoArrowBack, IoReload, IoSave, IoTrash } from 'react-icons/io5';
import { CgSpinner } from "react-icons/cg";
import { Link } from "@inertiajs/inertia-react";

export const AButomReload = ({ reload }) => {

    return (
        <Fragment>
            <Link
                href=""
                as="button"
                type="button"
                className="flex items-center justify-start bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded shadow-md"
            >
                <IconContext.Provider value={{ color: '#FFF', className: "font-bold text-xl mr-1" }}>
                    <div>
                        <IoReload />
                    </div>
                </IconContext.Provider>
            </Link>
        </Fragment>
    )
};

export const AButomAdd = ({ url }) => {

    return (
        <Fragment>
            <Link
                href={route(url)}
                as="button"
                type="button"
                className="flex items-center justify-start bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded shadow-md"
            >
                <IconContext.Provider value={{ color: '#FFF', className: "font-bold text-xl mr-1" }}>
                    <div>
                        <IoAddOutline />
                    </div>
                </IconContext.Provider>
                <span>Adicionar</span>
            </Link>
        </Fragment>
    )
};

export const AButomBack = ({ url }) => {
    return (
        <Fragment>
            <Link
                href={route(url)}
                as="button"
                type="button"
                className="flex items-center justify-start bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded shadow-md"
            >
                <IconContext.Provider value={{ color: "#FFF", className: "font-bold text-xl mr-1" }}>
                    <div>
                        <IoArrowBack />
                    </div>
                </IconContext.Provider>
                <span>Voltar</span>
            </Link>
        </Fragment>
    )
};

export const AButtonSave = ({ loading }) => {
    return (
        <Fragment>
            <button
                type="submit"
                className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white py-2 w-24 rounded shadow-md">
                {loading
                    ?
                    <IconContext.Provider value={{ color: '#FFF', className: "text-2xl animate-spin " }}>
                        <CgSpinner />
                    </IconContext.Provider>
                    :
                    <>
                        <IconContext.Provider value={{ color: '#FFF', className: "text-md mr-1" }}>
                            <IoSave />
                        </IconContext.Provider>
                        <div>Salvar</div>
                    </>
                }

            </button>
        </Fragment>
    )
};

export const AButtonExcuir = (({ onclick }) => {
    return (
        <Fragment>
            <Link
                type="button"
                as="button"
                onClick={onclick}
                className="flex items-center justify-start bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded shadow-md"
            >
                <IconContext.Provider value={{ color: '#FFF', className: "text-md mr-1" }}>
                    <IoTrash />
                </IconContext.Provider>
                <div>Excluir</div>
            </Link>
        </Fragment>
    )
})