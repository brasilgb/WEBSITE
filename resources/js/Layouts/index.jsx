import React, { Fragment } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
const Layouts = ({ children }) => {

    return (
        <Fragment>

            <div className='font-Roboto relative min-h-screen flex'>
                {/* Sidebar e componentes*/}
                <SideBar />
                <div className='flex flex-col bg-gray-100 w-full'>
                    <div>
                        <NavBar />
                    </div>
                    <div className="flex-grow md:ml-64">
                        {children}
                    </div>
                    <Footer />
                </div>
            </div>

        </Fragment>
    )
}

export default Layouts;