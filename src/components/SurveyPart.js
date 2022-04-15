import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SurveyPart.module.scss'
import clsx from 'clsx';

const SurveyPart = props => {
    const { name, votes } = props

    const [vote, setVote] = useState(votes)

    return (
        <div className={clsx(styles.surveypartContainer)}>
            <div className={clsx(styles.surveypartHeading)}>
                <p className={clsx(styles.surveypartHeadingWord)}>{name.slice(0, 2)}</p>
            </div>
            <div className={clsx(styles.surveypartInfo)}>
                <p className={clsx(styles.infoName)}>{name}</p>
                <p className={clsx(styles.infoVotes)}>{vote} votes</p>
            </div>
            <i
                onClick={() => { setVote(prev => prev + 1) }}
                className={clsx(styles.surveypartIcon, 'fa-solid', 'fa-check-to-slot')}
            ></i>
        </div>
    );
};

SurveyPart.propTypes = {
    name: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired
};

export default SurveyPart;