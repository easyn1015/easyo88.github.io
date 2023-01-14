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
                            <a
                                href='https://www.notion.so/easyo/336ab7cddf2f463895266ef1e49c9d4f'
                                title='notion'
                                target='_blank'
                            >
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
