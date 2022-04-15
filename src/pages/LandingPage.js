import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header'
import IntroSection from '../components/IntroSection';
import ProjectSection from '../components/ProjectSection';
import ReviewSection from '../components/ReviewSection';
import SurveySection from '../components/SurveySection';

function LandingPage(props) {
    return (
        <div>
            <Header />
            <IntroSection />
            <ProjectSection />
            <SurveySection />
            <ReviewSection />
            <Footer />
        </div>
    );
}

export default LandingPage;