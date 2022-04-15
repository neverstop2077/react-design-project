import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss'

function Navbar(props) {
    return (
        <div className={clsx(styles.navbarContainer)}>
            <div className={clsx(styles.navbarLogo)}>
                <Link to="/" className={clsx(styles.navbarLogoWord)}>design</Link>
            </div>
            <div className={clsx(styles.navbarContent)}>
                <div className={clsx(styles.navbarContentSection)}>
                    <p className={clsx(styles.navbarContentWord)}>Products</p>
                    <div className={clsx(styles.navbarContentDetailSection)}>
                        <p className={clsx(styles.navbarContentDetailWord)}><i className="fa-solid fa-credit-card"></i> Payments</p>
                        <p className={clsx(styles.navbarContentDetailWord)}><i className="fa-solid fa-credit-card"></i> Terminal</p>
                        <p className={clsx(styles.navbarContentDetailWord)}><i className="fa-solid fa-credit-card"></i> Connect</p>
                        <p className={clsx(styles.navbarContentDetailWord)}><i className="fa-solid fa-credit-card"></i> Billing</p>
                    </div>
                </div>
                <div className={clsx(styles.navbarContentSection)}>
                    <p className={clsx(styles.navbarContentWord)}>Developers</p>
                    <div className={clsx(styles.navbarContentDetailSection)}>
                        <p className={clsx(styles.navbarContentDetailWord)}><i className="fa-solid fa-credit-card"></i> Documentation</p>
                        <p className={clsx(styles.navbarContentDetailWord)}><i className="fa-solid fa-credit-card"></i> Libraries</p>
                        <p className={clsx(styles.navbarContentDetailWord)}><i className="fa-solid fa-credit-card"></i> Plugins</p>
                    </div>
                </div>
                <div className={clsx(styles.navbarContentSection)}>
                    <p className={clsx(styles.navbarContentWord)}>Company</p>
                    <div className={clsx(styles.navbarContentDetailSection)}>
                        <p className={clsx(styles.navbarContentDetailWord)}><i className="fa-solid fa-credit-card"></i> Jobs</p>
                        <p className={clsx(styles.navbarContentDetailWord)}><i className="fa-solid fa-credit-card"></i> Customers</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;