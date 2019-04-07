import styles from './save-button.css';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React from 'react';
import Button from '../button/button.jsx';
import {FormattedMessage} from 'react-intl';


const SaveButton = ({
    className,
    onClick
}) => (
    <Button
        className={classNames(
            className,
            styles.shareButton,
        )}
        onClick={onClick}
    >
        <FormattedMessage
            defaultMessage="Save"
            description="Label for save project"
            id="gui.menuBar.save"
        />
    </Button>
);

SaveButton.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
};

SaveButton.defaultProps = {
    onClick: () => {}
};


export default SaveButton;
