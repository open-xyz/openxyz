import { useState } from 'react';
import { useProjects } from '../../context/ProjectsContext';
import Project from './ProjectCard';
import './projects.scss';

function Projects() {
    const { loading, projects } = useProjects();
    const dataLimit = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const pagesCount = Math.ceil((projects && projects.length) / dataLimit);

    function goToNextPage() {
        setCurrentPage(page => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage(page => page - 1);
    }

    function changePage(ev) {
        const pageNumber = Number(ev.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return projects.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        return new Array(pagesCount).fill().map((_, idx) => 0 + idx + 1);
    };

    console.log(loading, projects, pagesCount);

    return (
        <section id="projects">
            <div className="projects-container">
                <h1 className="projects-title">Recent Projects</h1>
                <div className="projects-list">
                    {projects &&
                        getPaginatedData().map((project, idx) => (
                            <Project project={project} key={idx} />
                        ))}
                </div>
                <div className="pagination">
                    {/* previous button */}
                    <button
                        onClick={goToPreviousPage}
                        className="prev"
                        disabled={currentPage === 1}
                    >
                        &lt;
                    </button>
                    {/* show page numbers */}
                    {getPaginationGroup().map((item, index) => (
                        <button
                            key={index}
                            onClick={changePage}
                            className={`paginationItem ${
                                currentPage === item ? 'active' : null
                            }`}
                        >
                            <span>{item}</span>
                        </button>
                    ))}
                    {/* next button */}
                    <button
                        onClick={goToNextPage}
                        className="next"
                        disabled={currentPage === pagesCount}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Projects;
