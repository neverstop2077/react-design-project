import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header2.module.scss'
import Navbar from './Navbar';
import NavbarMobile from './NavbarMobile';

function Header(props) {
    const [navbarMobile, setNavbarMobile] = useState(false)

    const showNavbarMobile = () => {
        if (window.innerWidth < 800) {
            setNavbarMobile(true)
        }
        else {
            setNavbarMobile(false)
        }
    }

    useEffect(() => {
        showNavbarMobile()
    }, [])

    window.addEventListener('resize', showNavbarMobile)

    return (
        <div className={clsx(styles.headerWrapper)}>
            {navbarMobile ? <NavbarMobile /> : <Navbar />}
        </div>
    );
}

export default Header;