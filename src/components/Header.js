import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'
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
            <img src="/images/color.jpg" alt="bg img" className={clsx(styles.headerBg)} />
            {navbarMobile ? <NavbarMobile /> : <Navbar />}
            <div className={clsx(styles.headerContent)}>
                <h3 className={clsx(styles.headerContentHeading)}>If You Can Dream It, We Can Create It</h3>
                <h1 className={clsx(styles.headerContentWords)}>LET YOUR HOME BE<br />INIQUE AND STYLISH</h1>
                <Link to='/all-projects' className={clsx(styles.headerContentBtn)}>Projects</Link>
            </div>
        </div>
    );
}

export default Header;