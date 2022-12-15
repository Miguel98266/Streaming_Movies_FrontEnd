import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import React from 'react'

export const SharedLayout = () => {
  return (
    <>
    <Header />
      <Outlet />
    </>
  )
}
