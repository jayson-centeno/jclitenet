/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import * as React from 'react';
import InterestsModel from 'models/interestsModel';
import Loader = require('components/tools/loader');

export default class Interests extends React.Component<IInterestsProps, IInterestState>
{
    constructor(props: IInterestsProps)
    {
        super(props);

        this.state = {
            isLoading : true
        }

        this.props.model = new InterestsModel(); 
        this.props.model.interests = new Array<string>(".net", "mvc", "sql", "DI");
    }

    public componentDidMount()
    {
        setTimeout(() => this.setState({ isLoading: false }), 1000);
    }

    public render()
    {
        var interest = null;

        if (this.state.isLoading)
        {
            interest = <Loader isActive={this.state.isLoading} />
        }
        else
        {
            interest = this.props.model.interests.map(function (interest) {
                return (<span className="inter">{interest}</span>)
            }, this);
        }

        return (
            <section id="skills" className="profile-box bottom-spacer round-corner">
                <i className="fa fa-newspaper-o fa-2x"></i>
                <h3>Interests</h3>
                <div className="grp">
                    {interest}
                </div>
            </section>    
        )
    }
}