import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useEffect, useCallback, useState } from 'react';
import './projectCard.scss';
import axios from 'axios';

function ProjectCard({ project }) {
    const {
        name,
        description,
        clone_url,
        svn_url,
        languages_url,
        stargazers_count,
        pushed_at,
    } = project;

    return (
        <article className="project-card">
            <div className="project-card__content">
                <h2 className="project-title">{name}</h2>
                <p className="project-description">{description}</p>
                <a
                    className="link-btn clone-btn"
                    href={clone_url}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} className="github-icon" />
                    Clone Project
                </a>
                <a className="link-btn" href={svn_url} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="github-icon" />
                    Repo
                </a>
                <hr className="divider" />
                <Languages languages_url={languages_url} repo_url={svn_url} />
                <CardFooter
                    star_count={stargazers_count}
                    repo_url={svn_url}
                    pushed_at={pushed_at}
                />
            </div>
        </article>
    );
}

const Languages = ({ languages_url, repo_url }) => {
    const [data, setData] = useState([]);

    const handleRequest = useCallback(async () => {
        try {
            const response = await axios.get(languages_url);
            return setData(response.data);
        } catch (error) {
            console.error(error.message);
        }
    }, [languages_url]);

    useEffect(() => {
        handleRequest();
    }, [handleRequest]);

    const langs = [];
    for (let index in data) {
        langs.push(index);
    }

    return (
        <section className="languages">
            <p>Languages: </p>
            <div className="languages-list">
                {langs.length
                    ? langs.map(language => (
                          <a
                              key={language}
                              className="language badge"
                              href={repo_url + `/search?l=${language}`}
                              target=" _blank"
                          >
                              {language}
                          </a>
                      ))
                    : 'code yet to be deployed.'}
            </div>
        </section>
    );
};

const CardFooter = ({ star_count, repo_url, pushed_at }) => {
    const [updated_at, setUpdated_at] = useState('0 mints');

    const handleUpdatetime = useCallback(() => {
        const date = new Date(pushed_at);
        const nowdate = new Date();
        const diff = nowdate.getTime() - date.getTime();
        const hours = Math.trunc(diff / 1000 / 60 / 60);

        if (hours < 24) {
            if (hours < 1) return setUpdated_at('just now');
            let measurement = hours === 1 ? 'hour' : 'hours';
            return setUpdated_at(`${hours.toString()} ${measurement} ago`);
        } else {
            const options = { day: 'numeric', month: 'long', year: 'numeric' };
            const time = new Intl.DateTimeFormat('en-US', options).format(date);
            return setUpdated_at(`on ${time}`);
        }
    }, [pushed_at]);

    useEffect(() => {
        handleUpdatetime();
    }, [handleUpdatetime]);

    return (
        <p className="card-footer">
            <a href={repo_url + '/stargazers'} target=" _blank" className="stargazers">
                <FontAwesomeIcon icon={faGithub} className="github-icon" /> Stars{' '}
                <span className="badge star-count">{star_count}</span>
            </a>
            <small className="update-at">Updated {updated_at}</small>
        </p>
    );
};

export default ProjectCard;
