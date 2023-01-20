import React from "react";
import "./style.css";
import { FaSearchDollar, FaComment, FaRegThumbsUp } from "react-icons/fa";
import { AiOutlineFieldTime } from "react-icons/ai";



export default function HomeMKT() {

  return (
    <>
    <section className="HomeMKT">
      <div className="title-home">
        <h1>Proporcionando lindos momentos</h1>
      </div>
      <div className="info-main">
          <span>
            <FaSearchDollar style={{fontSize:"25pt", color:"#E8DBCE", padding:"5px"}}/> Los mejores precios
          </span>
          <span>
            <AiOutlineFieldTime style={{fontSize:"25pt", color:"#E8DBCE", padding:"5px"}}/> Atención 24/7
          </span>
          <span>
            <FaComment style={{fontSize:"25pt", color:"#E8DBCE", padding:"5px"}}/> Miles de opiniones
          </span>
          <span>
            <FaRegThumbsUp style={{fontSize:"25pt", color:"#E8DBCE", padding:"5px"}}/> Sin intermediarios
          </span>
      </div>
    </section>
    <div className="info-product">
      <h2>Nuestros Productos</h2>
    </div>
    </>
  );
}
