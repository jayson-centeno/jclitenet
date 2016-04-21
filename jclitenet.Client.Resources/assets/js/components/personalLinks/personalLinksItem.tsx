/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');

class PersonalLinksItem extends React.Component<IPersonalLinksItemProps, any>
{
    constructor(props: IPersonalLinksItemProps)
    {
        super(props);
    }

    public render()
    {
        return (
            <div className="label-group">
                <span className="caption strong">{this.props.model.name}</span>
                <div className="wrapper">
                    <span className="description">
                        <a href={this.props.model.link}>{this.props.model.link}</a>
                    </span>
                </div>
            </div>
        )
    }
}

export = PersonalLinksItem;