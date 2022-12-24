import React from 'react';
import shortid from 'shortid';

function Stars(props) {
    const { count } = props;

    if (count < 1) {
        return null;
    }
    else if (count > 5) {
        return null;
    }

    const star =
        <svg fill="#D3BCA2" height="28" viewBox="0 0 18 18" width="28" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
            <path d="M0 0h18v18H0z" fill="none" />
        </svg>
        ;

    let arr = [];

    for (let index = 0; index < count; index++) {
        arr[index] = star;
    }

    const stars = arr;

    const starsSort = stars.map((star) => (
        { id: shortid.generate(), value: star }
    ));

    return (
        <ul className='card-body-stars u-clearfix'>
            {starsSort.map((star) => (
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