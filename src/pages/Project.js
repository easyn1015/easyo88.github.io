import React, { useState } from 'react';
import './project.scss';

const ProjectList = (props) => {
    const projects = props.projects;
    return projects.map((project) => {
        //키값 추가
        const [showDesc, setShowDesc] = useState(false);
        return (
            <li key={project.title.toString()}>
                <a
                    href={project.path}
                    className={`project-link ${showDesc == true ? 'hover' : ''}`}
                    onMouseOver={() => {
                        setShowDesc(true);
                    }}
                    onMouseOut={() => {
                        setShowDesc(false);
                    }}
                    target='_blank'
                >
                    <span className='info'>
                        {project.info.date} / {project.info.role}
                    </span>
                    <span className='project'>{project.title}</span>
                </a>
                {showDesc && (
                    <div className={`project-desc ${showDesc == true ? 'open-desc' : ''}`}>
                        <ul>
                            <li>Language : {project.lang}</li>
                            <li>Period : {project.info.period}</li>
                            <li>Contribution : {project.info.contribution}</li>
                        </ul>
                    </div>
                )}
            </li>
        );
    });
};

const Project = () => {
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
            path: '#a',
        },
        {
            title: 'Yeungnam University',
            info: {
                date: '2021',
                period: '2022.10 ~ 2022.12',
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
                period: '2021.10 ~ 2021.12',
                role: 'Assignee',
                lang: 'HTML, CSS, Javscript',
                contribution: 'Frontend Develop',
            },
            path: 'https://plainkorean.kr/ko/index.do',
        },
        {
            title: 'Ewha Lawschool',
            info: {
                date: '2021',
                period: '2021.10 ~ 2021.12',
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
                period: '2020.10 ~ 2020.12',
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
                period: '2020.10 ~ 2020.12',
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
                period: '2020.10 ~ 2020.12',
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
                period: '2020.10 ~ 2020.12',
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
                period: '2020.10 ~ 2020.12',
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
                period: '2020.10 ~ 2020.12',
                role: 'Cooperation',
                lang: 'HTML, CSS, Javscript',
                contribution: 'Frontend Develop',
            },
            path: 'https://www.ajou.ac.kr/oia/index.do',
        },
        {
            title: 'Ewha University',
            info: {
                date: '2019',
                period: '2019.10 ~ 2019.12',
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
                    <ul>
                        <ProjectList projects={projectDescs} />
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Project;
