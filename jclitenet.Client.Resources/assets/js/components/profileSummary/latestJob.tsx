/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');

class LatestJob extends React.Component<ILatestJobProps, any>{

    constructor(props: ILatestJobProps) {
        super(props);
    }

    public render() {
        return (
            <div className="label-group">
                <span className="caption">Latest: </span>
                <div className="wrapper">
                    <span>{this.props.jobName}</span>
                </div>
            </div>
        )
    }

}

export = LatestJob;