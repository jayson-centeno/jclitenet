/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');

class PreviousJobs extends React.Component<IPreviousJobsProps, any>{

    constructor(props: IPreviousJobsProps) {
        super(props);
    }

    public render() {
        return (
            <div className="label-group">
                <span className="caption">Previous: </span>
                <div className="wrapper">
                    <span>{this.props.jobs}</span>
                </div>
            </div>
        )
    }

}

export = PreviousJobs;