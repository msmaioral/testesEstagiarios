import React, { Component } from 'react';
import './../estilo/style.css';
import './../bootstrap-4.3.1-dist/css/bootstrap.min.css'

class Menu extends Component {
    render() {
        return (
            <nav>
                <ul className="teste">
                    <li>Proprostas</li>
                    <li>Convênios</li>
                    <li>Termos aditivos</li>
                    <li>Ordens Bancárias</li>
                    <li>Prestação de Contas</li>
                    <li>Alertas</li>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </ul>
                
            </nav>
        );
    }
}

export default Menu;
