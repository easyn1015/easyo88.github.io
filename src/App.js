import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { ControllableParticles } from './ControllableParticles';
import Loading from './components/Loading';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';
import Info from './pages/Info';
import Contact from './pages/Contact';
import './assets/css/style.scss';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function LocationWrapper() {
    const location = useLocation();
    return (
        <main className={`content ${location.pathname.substr(1)}`} id='content'>
            <TransitionGroup className='transition-group'>
                <CSSTransition key={location.pathname} classNames='page-fade' timeout={1500}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/projects' element={<ProjectPage />} />
                        <Route path='/info' element={<Info />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='*' element={<Home />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </main>
    );
}

export default function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <Router basename='/portfolio'>
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
                                <li>
                                    <NavLink to='/contact'>Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div className='main'>
                        <LocationWrapper />
                    </div>
                    <ControllableParticles />
                </div>
            )}
        </Router>
    );
}
