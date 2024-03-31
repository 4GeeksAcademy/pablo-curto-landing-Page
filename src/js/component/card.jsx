import React from 'react'
import reactDom  from 'react-dom'

const Card = ({props})=>{
    return(
    <>
    {props.map((imagen,index) => (
    <div className="card my-5 border border-dark border-2 m-2" style={{width: "18rem"}} key={index}>
    <img src={imagen.imagenCard} className="mt-2" d-flex justify-content-center alt="..." style={{width:"200px", height:"200px"}}></img>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
    </div>
    <div className="card-footer">
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  ))}
  </>
  );
}

export default Card;