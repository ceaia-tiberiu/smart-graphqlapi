import React from 'react';
import './style.css';
const Repositories = ({ repositories }) => {
    return (
        <div>
            {repositories.edges.map(repository => (
                <div key={repository.node.id} className="repository">
                    <div className="repository-title">
                        Repository Name: {repository.node.name}
                    </div>
                    <div>Owner: {repository.node.owner.login}</div>
                    <Repository {...repository.node} />
                </div>
            ))}
        </div>
    );
};

const Repository = ({
    id,
    name,
    url,
    descriptionHTML,
    primaryLanguage,
    owner,
}) => {
    return (
        <div className="repository-description">
            <div className="repository-description-info">
                Description:
                <span dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
            </div>
            <div className="repository-description-details">
                <div>
                    {primaryLanguage && (
                        <span>Language: {primaryLanguage.name}</span>
                    )}
                </div>
                <div>
                    {owner && (
                        <span>
                            Owner: <a href={owner.url}>{owner.login}</a>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Repositories;
