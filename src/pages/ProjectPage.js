import React, { useState } from 'react';
import './project.scss';

const Project = ({ title, info, path }) => {
    const [showDesc, setShowDesc] = useState(false);
    return (
        <li>
            <a
                href={path}
                className={`project-link ${showDesc ? 'hover' : ''}`}
                onMouseOver={() => setShowDesc(true)}
                onMouseOut={() => setShowDesc(false)}
                target='_blank'
            >
                <span className='info'>{`${info.date} / ${info.role}`}</span>
                <span className='project'>{title}</span>
            </a>
            {showDesc && (
                <div className={`project-desc ${showDesc ? 'open-desc' : ''}`}>
                    <ul>
                        <li>Period: {info.period}</li>
                        <li>Language: {info.lang}</li>
                        <li>Contribution: {info.contribution}</li>
                    </ul>
                </div>
            )}
        </li>
    );
};

const ProjectList = ({ projects }) => {
    return (
        <ul className='project-list'>
            {projects.map((project) => (
                <Project key={project.title} {...project} />
            ))}
        </ul>
    );
};

const ProjectPage = () => {
    const projectDescs = [
        {
            title: 'Acrux',
            info: {
                date: '2022',
                period: '2022.10 ~ 2022.12',
                role: 'Personal',
                lang: 'Vue, TypeScript, HTML, CSS',
                contribution: 'Frontend Develop',
            },
            path: 'http://18.181.182.168:5173/',
        },
        {
            title: 'Yeungnam University',
            info: {
                date: '2021',
                period: '2021.06 ~ 2022.02',
                role: 'Cooperation',
                lang: 'HTML, CSS, Javascript',
                contribution: 'Frontend Develop',
            },
            path: 'https://www.yu.ac.kr/main/index.do',
        },
        {
            title: 'Plain Korean',
            info: {
                date: '2021',
                period: '2021.05 ~ 2021.07',
                role: 'Assignee',
                lang: 'HTML, CSS, Javscript',
                contribution: 'Frontend Develop',
            },
            path: 'https://plainkorean.kr/ko/index.do',
        },
        {
            title: 'KLMC',
            info: {
                date: '2021',
                period: '2021.01 ~ 2021.04',
                role: 'Cooperation',
                lang: 'HTML, CSS, Javscript',
                contribution: 'Frontend Develop',
            },
            path: 'http://www.klmc.church/index.do',
        },
        {
            title: 'Ewha Lawschool',
            info: {
                date: '2021',
                period: '2021.01 ~ 2021.02',
                role: 'Assignee',
                lang: 'HTML, CSS, Javscript',
                contribution: 'Frontend Develop',
            },
            path: 'https://lawschool.ewha.ac.kr/lawschool/index.do',
        },
        {
            title: 'BU Department',
            info: {
                date: '2020',
                period: '2020.08 ~ 2020.11',
                role: 'Assignee',
                lang: 'HTML, CSS, Javscript',
                contribution: 'Frontend Develop',
            },
            path: 'https://now.bc.ac.kr/apply/index.do',
        },
        {
            title: 'BU Now',
            info: {
                date: '2020',
                period: '2020.08 ~ 2020.11',
                role: 'Assignee',
                lang: 'HTML, CSS, Javscript',
                contribution: 'Frontend Develop',
            },
            path: 'https://now.bc.ac.kr/now/index.do',
        },
        {
            title: 'KNU Department',
            info: {
                date: '2020',
                period: '2020.04 ~ 2020.11',
                role: 'Cooperation',
                lang: 'HTML, CSS, Javscript',
                contribution: 'Frontend Develop',
            },
            path: 'https://cms.kookmin.ac.kr/apply/guide/type.do',
        },
        {
            title: 'Yonsei Global Health',
            info: {
                date: '2020',
                period: '2020.03 ~ 2020.06',
                role: 'Assignee',
                lang: 'HTML, CSS, Javscript',
                contribution: 'Frontend Develop',
            },
            path: 'https://yigh.yuhs.ac/yigh/index.do',
        },
        {
            title: 'Ajou OIA',
            info: {
                date: '2020',
                period: '2020.02 ~ 2020.08',
                role: 'Assignee',
                lang: 'HTML, CSS, Javscript',
                contribution: 'Frontend Develop',
            },
            path: 'https://www.ajou.ac.kr/oia/index.do',
        },
        {
            title: 'Ajou University',
            info: {
                date: '2020',
                period: '2020.02 ~ 2020.08',
                role: 'Cooperation',
                lang: 'HTML, CSS, Javscript',
                contribution: 'Frontend Develop',
            },
            path: 'https://www.ajou.ac.kr/kr/index.do',
        },
        {
            title: 'Ewha University',
            info: {
                date: '2019',
                period: '2019.02 ~ 2020.02',
                role: 'Cooperation',
                lang: 'HTML, CSS, Javscript',
                contribution: 'Frontend Develop',
            },
            path: 'https://www.ewha.ac.kr/ewha/index.do',
        },
    ];

    return (
        <section className='project-wrap'>
            <div className='project-box'>
                <div className='title-box'>
                    <h3 className='title'>
                        <span>Projects</span>
                    </h3>
                </div>
                <div className='project-list'>
                    <ProjectList projects={projectDescs} />
                </div>
            </div>
        </section>
    );
};

export default ProjectPage;
