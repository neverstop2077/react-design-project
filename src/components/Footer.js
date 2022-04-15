import clsx from 'clsx';
import React from 'react';
import styles from './Footer.module.scss'

const Footer = props => {
    return (
        <div className={clsx(styles.footerContainer)}>
            <p className={clsx(styles.footerWord)}>© 2022 Vo Quoc Duy. All rights reserved. Built with me</p>
        </div>
    );
};



export default Footer;