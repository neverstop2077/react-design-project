import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectSection.module.scss'

const ProjectSection = props => {
    return (
        <div className={clsx(styles.projectContainer)}>
            <h1 className={clsx(styles.projectHeading)}>
                <span className={clsx(styles.projectSlash)}>/</span>
                Lastest Project
            </h1>
            <div className={clsx(styles.projectContent, 'row')}>
                <div className={clsx(styles.projectItem, 'col-12', 'col-md-6 ', 'col-lg-6')}>
                    <img src="/images/kitchen.jpg" alt="kitchen" className={clsx(styles.projectImg)} />
                    <div className={clsx(styles.projectInfo)}>
                        <p className={clsx(styles.projectContentHeading)}>- KITCHEN -</p>
                        <p className={clsx(styles.projectDesc)}>Modern Kitchen</p>
                    </div>
                </div>
                <div className={clsx(styles.projectItem, 'col-12', 'col-md-6 ', 'col-lg-6')}>
                    <img src="/images/bathroom.jpg" alt="bathroom" className={clsx(styles.projectImg)} />
                    <div className={clsx(styles.projectInfo)}>
                        <p className={clsx(styles.projectContentHeading)}>- BATHROOM -</p>
                        <p className={clsx(styles.projectDesc)}>Outside Bathroom</p>
                    </div>
                </div>
                <div className={clsx(styles.projectItem, 'col-12', 'col-md-6 ', 'col-lg-6')}>
                    <img src="/images/bedroom.jpg" alt="bedroom" className={clsx(styles.projectImg)} />
                    <div className={clsx(styles.projectInfo)}>
                        <p className={clsx(styles.projectContentHeading)}>- BEDROOM -</p>
                        <p className={clsx(styles.projectDesc)}>Comfy Bedroom</p>
                    </div>
                </div>
                <div className={clsx(styles.projectItem, 'col-12', 'col-md-6 ', 'col-lg-6')}>
                    <img src="/images/kitchen2.png" alt="kitchen" className={clsx(styles.projectImg)} />
                    <div className={clsx(styles.projectInfo)}>
                        <p className={clsx(styles.projectContentHeading)}>- KITCHEN -</p>
                        <p className={clsx(styles.projectDesc)}>Vintage Kitchen</p>
                    </div>
                </div>
            </div>
            <div style={{ "display": "flex" }}>
                <Link to='/all-projects' className={clsx(styles.projectBtn)}>ALL PROJECTS</Link>
            </div>
        </div>
    );
};



export default ProjectSection;