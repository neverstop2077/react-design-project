import React from 'react';
import PropTypes from 'prop-types';
import Header2 from '../components/Header2';
import OutProjectSection from '../components/OutProjectSection';
import Footer from '../components/Footer';
import SearchSection from '../components/SearchSection';

LastestProject.propTypes = {

};

function LastestProject(props) {
    return (
        <div>
            <Header2 />
            <OutProjectSection />
            <SearchSection />
            <Footer />
        </div>
    );
}

export default LastestProject;