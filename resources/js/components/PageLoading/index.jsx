import React, { Fragment } from 'react'
import { IconContext } from 'react-icons';
import { CgSpinnerTwo } from 'react-icons/cg';

const PageLoading = () => {
  return (
    <Fragment>
        <IconContext.Provider value={{color: "#555", className:"text-4xl animate-spin"}}>
            <CgSpinnerTwo />
        </IconContext.Provider>
        </Fragment>

  )
}

export default PageLoading;