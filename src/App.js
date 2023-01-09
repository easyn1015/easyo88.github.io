import { ControllableParticles } from './ControllableParticles';
import { Routes, Route, NavLink, useLocation } from 'react-router-dom';
import './assets/css/style.scss';
import Home from './pages/Home';
import Project from './pages/Project';
import Info from './pages/Info';

export default function App() {
    return (
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
                            <NavLink to='/project'>Project</NavLink>
                        </li>
                        <li>
                            <NavLink to='/info'>Info</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className='main'>
                <main className='content' id='content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/project' element={<Project />} />
                        <Route path='/info' element={<Info />} />
                    </Routes>
                </main>
            </div>
            <ControllableParticles />
        </div>
    );
}
