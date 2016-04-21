/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');

class WorkExperienceItem extends React.Component<IWorkExperienceItemProps, any>
{
    constructor(props: IWorkExperienceItemProps)
    {
        super(props);
    }

    public render()
    {
        let separator = <div className="separator"></div>;
        if (this.props.isLastItem) separator = null;

        return (
            <div className="grp">
                <div className="grp-title">
                    <h4>{this.props.workExperience.position}</h4>
                </div>
                <div className="work-company">
                    {this.props.workExperience.companyName}
                </div>
                <div className="work-dates">
                    {this.props.workExperience.workStarted} – {this.props.workExperience.workEnded} | {this.props.workExperience.simpleAddress}
                </div>
                <div className="description">
                    {this.props.workExperience.workDescription}
                </div>
                {separator}
            </div>
        )
    }

}

export = WorkExperienceItem;