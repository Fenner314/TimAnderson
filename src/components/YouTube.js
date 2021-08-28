import React from 'react';
import PropTypes from 'prop-types';

const YouTube = ({ embedId, width, height, title }) => (
    <div className="video">
        <iframe 
            width={width}
            height={height}
            src={`https://www.youtube.com/embed/${embedId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media"
            allowFullScreen
            title={title}
        />
    </div>
);

YouTube.propTypes = {
    embedId: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default YouTube;