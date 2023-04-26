import Languages from '../Technologies/Languages';
import Databases from '../Technologies/Databases';
import { useState } from 'react';
import './technologies.scss';

function Technologies() {
    const [currentTab, setCurrentTab] = useState('langs');

    return (
        <section id="technologies">
            <div className="technologies-container">
                <div className="p-3rem">
                    <h1 className="section-title">Technologies</h1>

                    {/* Tabs */}
                    <ul className="technologies-tab" role="tablist">
                        <li className="tab-item" role="presentation">
                            <button
                                type="button"
                                role="tab"
                                id="technologies-tabs-languages-tab"
                                className={`technology-tab ${
                                    currentTab === 'langs' ? 'active' : ''
                                }`}
                                onClick={() => setCurrentTab('langs')}
                            >
                                Languages &amp; Tools
                            </button>
                        </li>
                        <li className="tab-item" role="presentation">
                            <button
                                type="button"
                                role="tab"
                                id="technologies-tabs-databases-tab"
                                className={`technology-tab ${
                                    currentTab === 'dbs' ? 'active' : ''
                                }`}
                                onClick={() => setCurrentTab('dbs')}
                            >
                                Databases &amp; DevOps
                            </button>
                        </li>
                    </ul>

                    {/* Tab Content */}
                    <div>
                        <Languages active={currentTab === 'langs'} />
                        <Databases active={currentTab === 'dbs'} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Technologies;
