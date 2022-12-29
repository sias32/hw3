import React from 'react';
import shortid from 'shortid';

const star =
    <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
        <path d="M0 0h18v18H0z" fill="none" />
    </svg>
    ;

function Stars({ count }) {

    const stars = Array(count).fill().map(() => (
        { id: shortid.generate(), value: star }
    ));

    if (count < 1) {
        return null;
    }
    else if (count > 5) {
        return null;
    }

    return (
        <ul className='card-body-stars u-clearfix'>
            {stars.map((star) => (
                <li key={star.id}>
                    {star.value}
                </li>
            ))}
        </ul>
    );
}

Stars.defaultProps = {
    count: 0
}

export default Stars;