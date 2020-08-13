import React from "react";
import facebook from "../img/facebook(2).png";
import instagram from "../img/instagram-bosquejado(1).png";
import twitter from "../img/twitter(5).png";

const Footer = () => {
  return (
    <footer className="">
      <div className="contenedor-footer">
        <div className="footer-link text-center pt-5">
          <img className="img-footer" src={facebook} alt="" />
          <img className="img-footer" src={instagram} alt="" />
          <img className="img-footer" src={twitter} alt="" />
        </div>
        <div className="footer-copyright text-center">
          <p>Telefono: 2522-0745</p>
          <p>Correo: kingStyle@gmail.com</p>
          <p> © 2020 Copyright: kings of style</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
