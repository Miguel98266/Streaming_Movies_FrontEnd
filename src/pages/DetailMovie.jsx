import React from 'react'
import {  useLocation } from "react-router-dom";

export const DetailMovie = () => {
    const location = useLocation();
    const getStateObj = location.state;
    
  return (
    <div>
        DetailMovie
    </div>
  )
}
