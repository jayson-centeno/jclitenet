/// <reference path="typings/require/require.d.ts" />
/// <reference path="interfaces/interfaces.d.ts" />
/// <reference path="typings/react/react-global.d.ts" />

import * as React from 'react'
import AuthenticationService from './services/authService'

var service = new AuthenticationService()

export default class App extends React.Component<IAppProps, IAppState> {

    public getInitialState()
    {
        this.state = {
            isAuthenticated: service.isAuthenticated()
        }
    }

    public render()
    {
        return (
            <div id="main">
                <div className="topnav">
                    <header id="header" className="highlight container-fluid">
                        <div id="logo">
                            <h1>
                                &lt;a&gt;<span>jc</span>litenet<label className="blinking-cursor">_</label>&lt;&frasl;a&gt;
                            </h1>
                        </div>
                    </header>
                </div>
                <div id="subheader" header-fixed>
                    <div className="container">
                        <div className="navbar navbar-default">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span classclassName="icon-bar"></span>
                            </button>
                            <div id="navbar" className="subtitle navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li><a href="#">Education</a></li>
                                    <li><a href="#">Experiences</a></li>
                                    <li><a href="#">Skills</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Languages</a></li>
                                    <li><a href="#">Certifications</a></li>
                                    <li><a href="#">Interests</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="summary-section">
                    {this.props.children}
                </div>
                <footer>
                    <div class="container-fluid">
                    </div>
                </footer>
            </div>
        )
    }
}