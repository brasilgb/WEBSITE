import React, { Fragment } from 'react'
import { ABox } from '../../components/Boxes';
import SubBar from '../../components/SubBar';
import Layout from '../../Layouts'
import { IoSpeedometerOutline } from 'react-icons/io5';

const Home = () => {
    return (
        <Fragment>
            <Layout>
                <SubBar
                    titleBlock={[{
                        'title': "Dashboard",
                        'icon': <IoSpeedometerOutline />
                    }]}
                    breadcumb={[
                        { 'value': false, 'url': false, 'separator': false }
                    ]}
                />
                <ABox>
                    Dashboard
                </ABox>
            </Layout>


        </Fragment>
    )
}

export default Home;