import React from "react";

const EnvioDevoluciones = () => {
  return (
    <div className="container">
      <div className="row text-center align-items-center">
        <div className="col-xs-12 col-md-3 col-lg-2 ">
          <h3 className="nosotros-subnombre">Envios: </h3>
        </div>
        <div className="col-xs-12 col-md-9 col-lg-10">
          <p className="nosotros-frase ">
            Nuestras camisas se imprimen a pedido después de que se ordenan. La
            mayoría de los pedidos se envían dentro de los 2 días hábiles, pero
            a veces pueden demorar mas tiempo. <br />
            <br />
            Los pedidos que son dentro del departamento de Masaya no se le
            cobrara el envio, sin embargo a otros departamento se le estara
            incluyendo costo del envio.
          </p>
        </div>
      </div>

      <div className="row text-center mb-3 align-items-center">
        <div className="col-xs-12 col-md-3 col-lg-2 ">
          <h3 className="nosotros-subnombre">Devoluciones: </h3>
        </div>
        <div className="col-xs-12 col-md-9 col-lg-10">
          <p className="nosotros-frase ">
            Dado que nuestras camisas están hechas a pedido, solo aceptamos
            devoluciones de pedidos dañados, camisas que no se ajustan
            correctamente y pedidos incorrectos. Cuando se le entregue el
            producto tendra lo maximo 7 dias para realizar su devolucion.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EnvioDevoluciones;
