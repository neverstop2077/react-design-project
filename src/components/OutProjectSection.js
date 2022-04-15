import React, { useState } from 'react';
import PropTypes from 'prop-types';
import projects from '../data/projects'
import clsx from 'clsx';
import styles from './OurProjectSection.module.scss'

let types = ['all']
projects.map(item => types.push(item.type))
types = Array.from(new Set(types))

const OutProjectSection = props => {
    const [allProjects, setAllProjects] = useState(projects)

    const [type, setType] = useState('all')

    return (
        <div className={clsx(styles.projectContainer)}>
            <h1 className={clsx(styles.projectHeading)}>
                <span className={clsx(styles.projectSlash)}>/</span>
                Our Projects
            </h1>
            <div className={clsx(styles.projectBtnContainer)}>
                {types.map((item, index) => {
                    let active = styles.none
                    if (item === type) {
                        active = styles.activeBtn
                    }

                    return <button key={index} onClick={() => { setType(item) }} className={clsx(styles.projectBtn, active)}>{item}</button>
                })}
            </div>
            <div className={clsx(styles.projectContainer, 'row')}>
                {
                    allProjects.map((i, index) => {
                        if (type === 'all' || i.type === type) {
                            return (
                                <div key={i.id} className={clsx(styles.projectItem, 'col-12', 'col-md-6 ', 'col-lg-4')}>
                                    <img src={i.image} alt={i.type} className={clsx(styles.projectImg)} />
                                    <div className={clsx(styles.projectInfo)}>
                                        <p className={clsx(styles.projectContentHeading)}>{i.title}</p>
                                        <p className={clsx(styles.projectDesc)}>{i.desc}</p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );;
};



export default OutProjectSection;