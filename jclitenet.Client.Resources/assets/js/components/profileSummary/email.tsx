/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');

class Email extends React.Component<IEmailProps, any>{

    constructor(props: IEmailProps) {
        super(props);
    }

    public render() {
        return (
            <div className="label-group">
                <span className="caption">Email: </span>
                <div className="wrapper">
                    <span>{this.props.email}</span>
                </div>
            </div>
        )
    }

}

export = Email;