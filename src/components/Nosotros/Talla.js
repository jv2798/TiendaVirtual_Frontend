import React from "react";

const Talla = () => {
  return (
    <>
      <div className="col-xs-12 col-md-3 col-lg-2 ">
        <h3 className="nosotros-subnombre">Tamaños: </h3>
      </div>
      <div className="col-xs-12 col-md-9 col-lg-10">
        <table className="table">
          <thead>
            <tr className="encabezado">
              <th></th>
              <th>Niños</th>
              <th>Juvenil/Adultos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>S</th>
              <td>40cm X 54cm </td>
              <td>52cm X 72cm</td>
            </tr>
            <tr>
              <th>M</th>
              <td>43cm X 57cm</td>
              <td>54cm X 75cm</td>
            </tr>
            <tr>
              <th>L</th>
              <td>47cm X 61cm</td>
              <td>56cm X 78cm</td>
            </tr>
            <tr>
              <th>XL</th>
              <td></td>
              <td>58cm X 81cm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Talla;
