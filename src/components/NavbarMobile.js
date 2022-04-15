import React, { useState } from 'react';
import styles from './NavbarMobile.module.scss'
import clsx from 'clsx';
import { Link } from 'react-router-dom';


const NavbarMobile = props => {
    const [showMenu, setShowMenu] = useState(false)



    return (
        <>
            <div className={clsx(styles.mobileNavWrapper)}>
                <div className={clsx(styles.MobileNavLogo)}>
                    <Link to="/" className={clsx(styles.MobileNavLogoWord)}>design</Link>
                </div>
                <div className={clsx(styles.mobileNavMenuIcon)} onClick={() => { setShowMenu(true) }}>
                    <i className={clsx('fa-solid', 'fa-bars', styles.mobileNavMenuLogo)}></i>
                </div>
            </div>
            {showMenu && (
                <div className={clsx(styles.mobileNavOverlay)}>
                    <div className={clsx(styles.mobileNavMenu)}>
                        <span className={clsx(styles.mobileNavCloseBtn)} onClick={() => { setShowMenu(false) }}>&times;</span>
                        <p className={clsx(styles.mobileNavMenuItem)}><i className={clsx("fa-solid", "fa-credit-card", styles.mobileNavItemIcon)}></i> Payments</p>
                        <p className={clsx(styles.mobileNavMenuItem)}><i className={clsx("fa-solid", "fa-credit-card", styles.mobileNavItemIcon)}></i> Terminal</p>
                        <p className={clsx(styles.mobileNavMenuItem)}><i className={clsx("fa-solid", "fa-credit-card", styles.mobileNavItemIcon)}></i> Connect</p>
                        <p className={clsx(styles.mobileNavMenuItem)}><i className={clsx("fa-solid", "fa-credit-card", styles.mobileNavItemIcon)}></i> Billing</p>
                        <p className={clsx(styles.mobileNavMenuItem)}><i className={clsx("fa-solid", "fa-credit-card", styles.mobileNavItemIcon)}></i> Documentation</p>
                        <p className={clsx(styles.mobileNavMenuItem)}><i className={clsx("fa-solid", "fa-credit-card", styles.mobileNavItemIcon)}></i> Libraries</p>
                        <p className={clsx(styles.mobileNavMenuItem)}><i className={clsx("fa-solid", "fa-credit-card", styles.mobileNavItemIcon)}></i> Plugins</p>
                        <p className={clsx(styles.mobileNavMenuItem)}><i className={clsx("fa-solid", "fa-credit-card", styles.mobileNavItemIcon)}></i> Jobs</p>
                        <p className={clsx(styles.mobileNavMenuItem)}><i className={clsx("fa-solid", "fa-credit-card", styles.mobileNavItemIcon)}></i> Customers</p>
                    </div>
                </div>
            )}
        </>
    );
};


export default NavbarMobile;