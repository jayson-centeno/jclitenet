/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');

class CertificationItem extends React.Component <ICertificationItemProp, any>
{
    constructor(props: ICertificationItemProp)
    {
        super(props);
    }

    public render()
    {
        return (
            <div className="label-group">
                <span className="caption strong">{this.props.model.title}</span>
                <div className="wrapper">
                    <span className="description cert-dates">{this.props.model.expStartDate.getFullYear() } - {this.props.model.expEndDate.getFullYear()}</span>
                </div>
            </div>
        ) 
    }
}

export = CertificationItem;