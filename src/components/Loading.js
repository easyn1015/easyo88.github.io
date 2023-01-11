// Loading.js
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './loading.scss';

export const Loading = () => {
    return (
        <CSSTransition classNames='page-fade' timeout={500}>
            <div className='loading-wrap'>
                <p>
                    Lee Ji Yeon <span>Portfolio</span>
                </p>
            </div>
        </CSSTransition>
    );
};

export default Loading;
