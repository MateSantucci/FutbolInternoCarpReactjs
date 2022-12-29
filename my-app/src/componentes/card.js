import React from "react";
import button from "./ui/button"; 

const card = (props) => {
    const {titulo, descripcion, img, btnText, btnClassName} = props; // es un objeto */
    return (
        <div className="card" style={{width: 18}}>
        <img src={img} className="cards-img-top" alt= "..." />
        <div className="card-body">
           <h5 className="card-title"> {titulo} </h5>
           <p className="card-text"> {descripcion} </p>
           <button btnText={btnText} btnClassName={btnClassName} />

        </div>
        </div>   
    );
};

export default card; 