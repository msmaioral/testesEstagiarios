import React, { Component } from 'react';

class Menu extends Component {
        handleClick= () =>{
            alert('olha');
        }
        
        render(){
        return (
            <nav className="navbar navbar-expand-xl navbar-light bg-light menu justify-content-center">   
                <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>    
                <div className="collapse navbar-collapse row" id="navbarResponsive">
                    <ul className="nav navbar-nav nav-pills col-xl-10" id="pills-tab" role="tablist">

                        <li className="nav-item"><a className="nav-link active" href="#iframe1"  data-toggle="pill" >Proprostas</a></li>
                        <li className="nav-item"><a className="nav-link" href="#iframe2"  data-toggle="pill" >Convênios</a></li>
                        <li className="nav-item"><a className="nav-link" href="#iframe3"  data-toggle="pill" >Termos aditivos</a></li>
                        <li className="nav-item"><a className="nav-link" href="#iframe4"  data-toggle="pill" >Ordens Bancárias</a></li>
                        <li className="nav-item"><a className="nav-link" href="#iframe5"  data-toggle="pill" >Prestação de Contas</a></li>
                        <li className="nav-item"><a className="nav-link" href=""  data-toggle="pill" >Alertas</a></li>
                        <li className="nav-item"><a className="nav-link" href="#iframe6"  data-toggle="pill" >Dashboard</a></li>
                         
                    </ul>
                    <div className="dropdown col-xl-2">
                            <button className="btn btn-light dropdown-toggle botao-user" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user"></i> Usuario
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#"><i className="fas fa-lock"></i> Alterar Senha</a>
                                <a className="dropdown-item" href="#"><i className="fas fa-question-circle"></i> Sobre</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#"><i className="fas fa-power-off"></i> Sair</a>
                            </ul>
                        </div>
                    
                </div>    
                
            </nav>
            
        );
    }
}

export default Menu;
