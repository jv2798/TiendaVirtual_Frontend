import React from "react";
import Header from "./components/Header";
import Inicio from "./components/inicio";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contacto from "./components/Contacto";
import Login from "./components/auth/login";
import NuevaCuenta from "./components/auth/nueva-cuenta";
import AuthState from "./context/auth/authState";
import AlertState from "./context/alert/alertState";
import Index from "./components/Catalogo/Hombres";
import IndexW from "./components/Catalogo/mujeres";
import IndexK from "./components/Catalogo/niños";
import Carrito from "./components/Carrito";
import DetalleCamisa from "./components/Catalogo/DetalleCamisa";
import CamisaState from "./context/Camisas/camisaState.js";
import UbicacionState from "./context/ubicacion/ubicacionState";
import tokenAuth from "./components/config/token";
function App() {
  //revisar si hay un token
  const token = localStorage.getItem("token");

  if (token) {
    tokenAuth(token);
  }

  return (
    <UbicacionState>
      <CamisaState>
        <AlertState>
          <AuthState>
            <Router>
              <Header />
              <div className="father">
                <Switch>
                  <Route exact path="/" component={Inicio} />
                  <Route exact path="/contacto" component={Contacto} />
                  <Route exact path="/hombres" component={Index} />
                  <Route exact path="/mujeres" component={IndexW} />
                  <Route exact path="/niños" component={IndexK} />
                  <Route exact path="/detalle" component={DetalleCamisa} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/cuentanueva" component={NuevaCuenta} />
                  <Route exact path="/carrito" component={Carrito} />
                </Switch>
              </div>
              <Footer />
            </Router>
          </AuthState>
        </AlertState>
      </CamisaState>
    </UbicacionState>
  );
}

export default App;
