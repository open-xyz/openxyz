import './styles.scss';

function Languages({ active }) {
    return (
        <div role="tabpanel" className={`tab-panel ${active ? 'active' : ''}`}>
            <div className="tab-panel-content">
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/ios/100/null/javascript--v2.png"
                        alt="javascript"
                    />
                    <p>Javascript</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/ios-filled/100/null/python.png"
                        alt="python"
                    />
                    <p>Python</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/ios-filled/100/null/php-logo.png"
                        alt="php"
                    />
                    <p>PHP</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/windows/100/null/nodejs.png"
                        alt="node.js"
                    />
                    <p>Node.js</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/ios-filled/100/null/react-native.png"
                        alt="react.js"
                    />
                    <p>React.js</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/ios/100/null/typescript.png"
                        alt="typescript"
                    />
                    <p>Typescript</p>
                </div>
                <div className="tab-panel-content-item">
                    <img src="https://img.icons8.com/ios-filled/100/null/c.png" alt="C" />
                    <p>C lang</p>
                </div>
                <div className="tab-panel-content-item">
                    <img
                        src="https://img.icons8.com/ios-filled/100/null/c-plus-plus-logo.png"
                        alt="C plus plus"
                    />
                    <p>C++</p>
                </div>
                <div className="tab-panel-content-item last-item">
                    <img
                        src="https://img.icons8.com/ios-filled/100/null/sass.png"
                        alt="sass"
                    />
                    <p>Sass</p>
                </div>
            </div>
        </div>
    );
}

export default Languages;
