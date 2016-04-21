/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');

class Education extends React.Component<IEducationProps, any>{

    constructor(props: IEducationProps) {
        super(props);
    }

    public render() {
        return (
            <div className="label-group">
                <span className="caption">Education: </span>
                <div className="wrapper">
                    <span>{this.props.education}</span>
                </div>
            </div>
        )
    }

}

export = Education;