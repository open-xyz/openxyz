import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './adminCard.scss';

function AdminCard({ admin: { name, role, dpUrl, ghUrl } }) {
    return (
        <article className="admin-card">
            <div className="admin-card__content">
                <div className="admin-dp">
                    <img src={dpUrl} alt={name} />
                </div>
                <h2 className="admin-name">{name}</h2>
                <p className="admin-role">{role}</p>
                <a
                    className="admin-gh-link"
                    href={ghUrl}
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} className="gh-icon" />
                </a>
            </div>
        </article>
    );
}

export default AdminCard;
