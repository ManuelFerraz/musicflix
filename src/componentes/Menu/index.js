import React from 'react';
import Logo from '../../assets/img/logo02.png';
import './Menu.css'
import Button from './components/ButtonLink';


function Menu(){
    return (
        <nav className="Menu">
            <a href="/"> 
                <img className="Logo" src={Logo} alt="logo2"/>
            </a>   

            <Button className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        
        </nav>
    )
}

export default Menu; 