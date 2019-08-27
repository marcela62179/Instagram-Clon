import React from 'react';
import Seo from './Seo';

const Base = (props) => {
    const {children, title, description} = props

    return (
        <React.Fragment>
            <Seo title={title} description={description} />
            {children}
        </React.Fragment>
    );
}

Base.defaultProps = {
    title: '',
    description: ''
}

export default Base;