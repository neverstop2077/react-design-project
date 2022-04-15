import React, { useEffect, useState } from 'react';
import styles from './ReviewSection.module.scss'
import data from '../data/data'
import clsx from 'clsx';

const ReviewSection = props => {
    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index > people.length - 1) {
            setIndex(0)
        }
        else if (index < 0) {
            setIndex(people.length - 1)
        }

        const timerId = setInterval(() => {
            setIndex(prev => prev + 1)
        }, 3000)

        return () => {
            clearInterval(timerId)
        }
    }, [index, people])

    return (
        <div className={clsx(styles.reviewContainer)}>
            <h1 className={clsx(styles.reviewHeading)}>
                <span className={clsx(styles.reviewSlash)}>/</span>
                Reviews
            </h1>
            <div className={clsx(styles.reviewContent)}>
                {people.map((person, personIndex) => {
                    let position = styles.nextSlide;

                    if (personIndex === index) {
                        position = styles.activeSlide
                    }

                    if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
                        position = styles.lastSlide
                    }

                    return (<div className={clsx(styles.reviewItem, position)} key={person.id}>
                        <img src={person.image} alt="" className={clsx(styles.reviewImg)} />
                        <p className={clsx(styles.personName)}>{person.name}</p>
                        <p className={clsx(styles.personTitle)}>{person.title}</p>
                        <p className={clsx(styles.personQuote)}>{person.quote}</p>
                        <i className={clsx(styles.reviewItemIcon, 'fa-solid ', 'fa-quote-right')}></i>
                    </div>)
                })}
                <i
                    onClick={() => { setIndex(prev => prev - 1) }}
                    className={clsx(styles.reviewPrevIcon, 'fa-solid ', 'fa-angle-left')}
                ></i>
                <i
                    onClick={() => { setIndex(prev => prev + 1) }}
                    className={clsx(styles.reviewNextIcon, 'fa-solid ', 'fa-angle-right')}
                ></i>
            </div>
        </div>
    );
};

export default ReviewSection;