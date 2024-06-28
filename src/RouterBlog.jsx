import React from 'react'
import HeaderFunction from './compontests/HeaderFunction'
import FooterFunction from './compontests/FooterFunction'
import { Routes } from 'react-router-dom'
import { Navigate, RouterProvider} from "react-router-dom"
import MainFunction from './compontests/MainFunction'
import {Route} from "react-router-dom"
function RouterBlog() {
  return (
    <React.Fragment>
            <HeaderFunction name = "Muhammet Akduman"/>
        <div className="contanier">
            <Routes>
                <Route path={"/"} elementName={<MainFunction />} />
                <Route path={"/index"} elementName={<MainFunction />} />
                <Route path={"*"} elementName={<Navigate to={"/"} />} />
            </Routes>
        </div>
        <MainFunction/>
        <FooterFunction/>
    </React.Fragment>
  )
}
export default  RouterBlog