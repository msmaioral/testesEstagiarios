import React, { Component } from 'react';
import './../estilo/style.css';
import './../bootstrap-4.3.1-dist/css/bootstrap.min.css';
import $ from 'jquery';

class Header extends Component {
    render() {
        return (
            <div className="col-md-12 divHeader">
                <div className="divLogo">
                    <img width="70" src="http://siac.sudam.gov.br/img/logo.png"></img>
                </div>
                <div className="divTxtLogo">
                    SIAC<br/>
                    <i color="#777777" className="font-13">Sistema de Apoio aos Convênios</i>
                </div>
                <div className="clear">
                </div>
            </div>
        );
    }
}

export default Header;
