import './styles.scss';

function Databases({ active }) {
    return (
        <div role="tabpanel" className={`tab-panel ${active ? 'active' : ''}`}>
            <div className="tab-panel-content">
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/color/100/null/mongodb.png"
                        alt="mongodb"
                    />
                    <p>MongoDB</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/ios/100/null/heroku.png"
                        alt="heroku"
                    />
                    <p>Heroku</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/ios/100/null/mysql-logo.png"
                        alt="mysql"
                    />
                    <p>MySQL</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/100/null/external-redis-an-in-memory-data-structure-project-implementing-a-distributed-logo-bold-tal-revivo.png"
                        alt="redis"
                    />
                    <p>Redis</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/ios/100/null/docker.png"
                        alt="docker"
                    />
                    <p>Docker</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/color/100/null/azure-1.png"
                        alt="azure"
                    />
                    <p>Azure</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/ios/100/null/postgreesql.png"
                        alt="postgresql"
                    />
                    <p>PostgreSQL</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/wired/100/null/postman-api.png"
                        alt="postman"
                    />
                    <p>Postman</p>
                </div>
                <div className="tab-panel-content-item last-item">
                    <img
                        src="https://img.icons8.com/fluency/100/null/google-cloud.png"
                        alt="google cloud"
                    />
                    <p>Google Cloud</p>
                </div>
            </div>
        </div>
    );
}

export default Databases;
