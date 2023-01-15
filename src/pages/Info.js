import React from 'react';
import './info.scss';

const Info = () => {
    return (
        <>
            <section className='info-wrap'>
                <div className='info-box'>
                    <ul>
                        <li>
                            <a href='https://github.com/easyn1015' title='github' target='_blank'>
                                Github ↗
                            </a>
                        </li>
                        <li>
                            <a href='#a' title='notion' target='_blank'>
                                Resume ↗
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Info;
