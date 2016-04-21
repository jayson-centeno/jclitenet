/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import * as React from 'react';
import SkillsModel from 'models/skillsModel';
import Loader = require('components/tools/loader');

class Skills extends React.Component<ISkillsProps, ISkillsState>
{
    constructor(props: ISkillsProps)
    {
        super(props);

        this.state = {
            isLoading:true
        }

        this.props.model = new SkillsModel(); 
        this.props.model.skills = new Array<string>(".net", "mvc", "sql");
    }

    public componentDidMount()
    {
        setTimeout(() => this.setState({ isLoading: false }), 1000);
    }

    public render()
    {
        var skills = null;

        if (this.state.isLoading)
        {
            skills = <Loader isActive={this.state.isLoading} />
        }
        else
        {
            skills = this.props.model.skills.map(function (skill) {
                return (<span className="skill">{skill}</span>)
            }, this);
        }

        return (
            <section id="skills" className="profile-box bottom-spacer round-corner">
                <i className="fa fa-briefcase fa-2x"></i>
                <h3>Skills</h3>
                <div className="grp">
                    {skills}
                </div>
            </section>    
        )
    }
}

export = Skills;