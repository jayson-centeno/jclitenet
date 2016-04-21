/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');

class ContactNumber extends React.Component<IContactNumberProps, any>{

    constructor(props: IContactNumberProps) {
        super(props);
    }

    public render() {
        return (
            <div className="label-group">
                <span className="caption">Contact: </span>
                <div className="wrapper">
                    <span>{this.props.contact}</span>
                </div>
            </div>
        )
    }

}

export = ContactNumber;
