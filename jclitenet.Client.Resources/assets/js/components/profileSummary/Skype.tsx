/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');

class Skype extends React.Component<ISkypeProps, any>{

    constructor(props: ISkypeProps) {
        super(props);
    }

    public render() {
        return (
            <div className="label-group">
                <span className="caption">Skype: </span>
                <div className="wrapper">
                    <span>{this.props.skype}</span>
                </div>
            </div>
        )
    }
}

export = Skype;