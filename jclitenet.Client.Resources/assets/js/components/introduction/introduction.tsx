/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../interfaces/interfaces.d.ts" />

import React = require('react');

class Introduction extends React.Component<IIntroductionProps, IIntroductionStates> {

    constructor(props: IIntroductionProps)
    {
        super(props);
        this.setState({ introText: this.props.introText });
    }
    
    public render() {
        return (
            <section id="introduction" className="profile-box bottom-spacer round-corner">
                <i className="fa fa-file-text fa-2x"></i><h3>Introduction</h3>
                <p>
                    {this.props.introText}
                </p>
            </section>
        )
    }
}

export = Introduction