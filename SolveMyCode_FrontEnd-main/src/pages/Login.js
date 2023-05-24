import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/Header";


export default function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (


      <div className="container">
        <div className="row d-flex justify-content-center align-items-center"  style={{height:"100vh"}}>
          <div className="col-6">
            <div className="card p-5">
              <h3>Bienvenue !</h3>
              <form>
              <div>
                <label className="my-2">Nom :</label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control"
                  required={true}
                />
              </div>

              <div>
                <label className="my-2">Mot de Passe :</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  required={true}
                />
              </div>
                <div>
                <input type="submit" className="btn btn-primary my-3" />              
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

  );
}