import React from 'react';
// import './Navbar.css'; // Importa el archivo de estilos
import style from './NavBar.module.css'
import { Link } from 'react-scroll';

export const Navbar = () => {

    //Los links
    const enlaces = [
        {
            id: 1,
            name: "Home"
        },
        {
            id: 2,
            name: 'facturas'
        },
        {
            id: 3,
            name: 'Estadodecuenta'
        },
        {
            id: 4,
            name: 'Contacto'
        }
    ]
    return (
        <div className={style.Navbar}>
            <ul>
                {
                    enlaces.map((j) => {
                        <div>
                            <Link>{j.name === 'Estadodecuenta' ? 'Estado de cuenta' : j.name}</Link>
                        </div>
                    })
                }
            </ul>
        </div>
    );
}