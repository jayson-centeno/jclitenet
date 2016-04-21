/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');

class EducationItem extends React.Component<IEducationItemProps, IEducationItemState> {

    constructor(props: IEducationItemProps)
    {
        super(props);
    }

    public componentDidMount()
    {
    }

    public render()
    {
        var separator = <div className="separator"></div>
        if (this.props.isLastItem) separator = null;

        return (
            <div className="grp">
                <div className="grp-title">
                    <h4>{this.props.education.schoolName}</h4>
                </div>
                <div className="description">
                    {this.props.education.degree}, {this.props.education.courseName} ({this.props.education.dateTaken} - {this.props.education.dateEnded})
                </div>
                {separator}
            </div>
        );
    }

}

export = EducationItem;