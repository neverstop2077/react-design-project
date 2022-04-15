import clsx from 'clsx';
import React from 'react';
import styles from './IntroSection.module.scss'


const IntroSection = props => {
    return (
        <div className={clsx(styles.introWrapper)}>
            <h1 className={clsx(styles.introHeading)}>
                <span className={clsx(styles.introHeadingSlash)}>/</span>
                About Us
            </h1>
            <div className={clsx(styles.introContent, 'row')}>
                <div className={clsx(styles.introContentItem, 'col-12 ', 'col-md-6 ', 'col-lg-3')}>
                    <i className={clsx(styles.introContentIcon, 'fa-solid', 'fa-location-crosshairs')}></i>
                    <h3 className={clsx(styles.introContentHeading)}>MISSION</h3>
                    <p className={clsx(styles.introContentDesc)}>Activated charcoal post-ironic unicorn flexitarian tumeric, direct trade man bun mumblecore kickstarter art party.</p>
                </div>
                <div className={clsx(styles.introContentItem, 'col-12 ', 'col-md-6 ', 'col-lg-3')}>
                    <i className={clsx(styles.introContentIcon, 'fa-solid ', 'fa-anchor')}></i>
                    <h3 className={clsx(styles.introContentHeading)}>VISION</h3>
                    <p className={clsx(styles.introContentDesc)}>Brooklyn mustache polaroid neutra. Wolf subway tile gluten-free bushwick, godard letterpress pitchfork direct trade put a bird on.</p>
                </div>
                <div className={clsx(styles.introContentItem, 'col-12 ', 'col-md-6 ', 'col-lg-3')}>
                    <i className={clsx(styles.introContentIcon, 'fa-solid', 'fa-file-waveform')}></i>
                    <h3 className={clsx(styles.introContentHeading)}>HISTORY</h3>
                    <p className={clsx(styles.introContentDesc)}>Chia pinterest locavore letterpress tote bag. Subway tile PBR&B knausgaard locavore quinoa four loko disrupt photo booth hella.</p>
                </div>
                <div className={clsx(styles.introContentItem, 'col-12 ', 'col-md-6 ', 'col-lg-3')}>
                    <i className={clsx(styles.introContentIcon, 'fa-solid', 'fa-briefcase')}></i>
                    <h3 className={clsx(styles.introContentHeading)}>WORK</h3>
                    <p className={clsx(styles.introContentDesc)}>Man braid banh mi prism disrupt hella cray mlkshk jean shorts typewriter synth salvia direct trade pabst knausgaard.</p>
                </div>
            </div>
        </div>
    );
};



export default IntroSection;