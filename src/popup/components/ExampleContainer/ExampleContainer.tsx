import React from 'react';
import './ExampleContainer.css';

const ExampleContainer = () => {
    return (
        <div className="ExampleContainer">
            <header className="ExampleContainer-header">

                <div className="ExampleContainer-header-top">
                    <img src="logo.svg" className="ExampleContainer-logo" alt="logo" />
                    <p>
                        Start <code>coding</code> Chrome Extensions to day.
                    </p>
                    <a
                        className="ExampleContainer-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <a
                        className="ExampleContainer-link"
                        href="https://developer.chrome.com/docs/extensions/mv3/getstarted/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Chrome Extensions Docs
                    </a>
                </div>

                <div className="ExampleContainer-header-bottom">
                    <p>
                        <code>Built</code> with
                    </p>
                    <a
                        className="ExampleContainer-link"
                        href="https://webpack.js.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Webpack
                    </a>
                    <p>
                        and
                    </p>
                    <a
                        className="ExampleContainer-link"
                        href="https://nodejs.org/en"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Node.js
                    </a>
                </div>

            </header>
        </div>
    );
};

export default ExampleContainer;