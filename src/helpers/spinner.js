import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

// SCSS.
import 'src/helpers/spinner.scss';

const Start = (WrappedComponent = false) => {
    if (!WrappedComponent) console.warn('No WrappedComponent Provided.');
    return React.memo((props) => {
        if (props.isLoading) return (<Container />);
        else return <WrappedComponent {...props} />;
    });
};

const Container = React.memo((props) => {
    return (
        <div id="helpers-load">
            <div id="spinner">
                <FontAwesomeIcon icon={faSpinner} />
            </div>
        </div>
    );
});

export default Start;