import React from 'react';
import styles from './SurveySection.module.scss'
import SurveyPart from './SurveyPart';
import clsx from 'clsx';

const SurveySection = props => {
    return (
        <div className={clsx(styles.surveyContainer)}>
            <h1 className={clsx(styles.surveyHeading)}>
                <span className={clsx(styles.surveySlash)}>/</span>
                Survey
            </h1>
            <h3 className={clsx(styles.surveyDesc)}>Most Important Room In The House?</h3>
            <div className={clsx(styles.votesContainer)}>
                <SurveyPart name="Bathroom" votes={2689} />
                <SurveyPart name="Kitchen" votes={2531} />
                <SurveyPart name="Bedroom" votes={1287} />
            </div>
        </div>
    );
};


export default SurveySection;