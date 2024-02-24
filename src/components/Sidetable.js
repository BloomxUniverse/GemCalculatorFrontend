import React from 'react'
import { useSelector } from "react-redux";

const Sidetable = () => {
  const data = useSelector((store) => store.design);
  return (
    <div className='col-md-5 col-12 d-flex justify-content-center justify-content-md-start'>
      <img className="col-11 shadow" src={data.data.design.tableimage.img} alt="banner"/>
    </div>
  )
}

export default Sidetable