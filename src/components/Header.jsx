import './Header.css'
import Imagagem from '../img/Logo-SECAD.png';
import React, { useState } from "react";


export default function Header() {

    return (
        <header>
            <img className='logo-menu' src={Imagagem} alt="logo-SECAD" />
            <nav className='nav-menu'>
                <a className='link-menu' href='#text-formulario'>Formulário</a>
                <a className='link-menu' href='#tabela'>Registro do dia</a>
                <a className='link-menu' href='#tabela'>Historico de Registro</a>
            </nav>
        </header>
    )
}