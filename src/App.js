import React, { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { ControllableParticles } from './ControllableParticles';
import Loading from './components/Loading';
import Home from './pages/Home';
import Project from './pages/Project';
import Info from './pages/Info';
import './assets/css/style.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export default function App() {
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className='wrap'>
                    <div className='mask' />
                    <header className='header-wrap'>
                        <div className='main-title-box'>
                            <h1 className='main-title'>Lee Ji Yeon</h1>
                            <p className='sub-title'>Frontend Developer</p>
                        </div>
                        <nav className='gnb'>
                            <ul>
                                <li>
                                    <NavLink to='/'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/projects'>Projects</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/info'>Info</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div className='main'>
                        <main className='content' id='content'>
                            <TransitionGroup className='transition-group'>
                                <CSSTransition key={location.pathname} classNames='page-fade' timeout={500}>
                                    <Routes location={location}>
                                        <Route path='/' element={<Home />} />
                                        <Route path='/projects' element={<Project />} />
                                        <Route path='/info' element={<Info />} />
                                    </Routes>
                                </CSSTransition>
                            </TransitionGroup>
                        </main>
                    </div>
                    <ControllableParticles />
                </div>
            )}
        </>
    );
}
