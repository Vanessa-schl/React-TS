import { useState } from "react"
// import { PaginaHom } from "./home";
// import { PaginaMenu } from "./pages/PaginaMenu";
import "./header.css";
import { Home } from "../home/indexHome"; 
import {Menu} from "../menu/indexMenu";


export function Header() {
    const [opcao, setOpcao] = useState(1);

    const chamarMenu = () => {
      setOpcao(2);
    };
  
    const chamarHome = () => {
      setOpcao(1);
    };
        
   
    

    return(
        <div>
        <header>
        <div className="superiorEsquerda">
          <a href="./index.html">
          <img
          className="iconHamb"
            src="../../src/imagens/cute.webp"
          />
          <h1>BURGER CHAOS</h1>
        </a>
        </div>
  
        <div className="meioHeader">
          <a onClick={chamarHome}>HOME</a>
          <a onClick={chamarMenu}>MENU</a>
        </div>
  
        <div className="superiorDireita">
          <p className="telefone">(47) 99999-8888</p>
          <span className="material-symbols-outlined"> shopping_cart </span>
          <span className="material-symbols-outlined"> person </span>
        </div>
      </header>
      <div>
        {opcao == 1 ? <Home /> : <Menu />}
      </div>
      </div>
    )
    }