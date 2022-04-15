import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react';
import projects from './../data/projects'
import styles from './SearchSection.module.scss'

const SearchSection = props => {
    const [allProjects, setAllProjects] = useState(projects)
    const [input, setInput] = useState('')
    const timer = useRef()

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className={clsx(styles.searchContainer)}>
            <h1 className={clsx(styles.searchHeading)}>
                <span className={clsx(styles.searchSlash)}>/</span>
                Algolia Search
            </h1>
            <div className={clsx(styles.inputContainer)}>
                <input value={input} onChange={handleChange} type="text" className={clsx(styles.input)} placeholder='Search here...' />
                {/* <i className={clsx(styles.inputIcon, 'fa-solid', ' fa-magnifying-glass')}></i> */}
                <i onClick={() => { setInput('') }} className={clsx(styles.inputIcon, 'fa-solid ', 'fa-xmark')}></i>
            </div>
            <div className={clsx(styles.projectsContainer, 'row')}>
                {
                    allProjects.map((i, index) => {
                        if (i.desc.toLowerCase().includes(input.trim()) || input === '') {
                            return (
                                <div key={i.id} className={clsx('col-12', 'col-sm-6', 'col-md-4')}>
                                    <div className={clsx(styles.projectItem)}>
                                        <img src={i.image} alt={i.type} className={clsx(styles.projectImg)} />
                                        <p className={clsx(styles.projectDesc)}>{i.desc}</p>
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    );
};


export default SearchSection;