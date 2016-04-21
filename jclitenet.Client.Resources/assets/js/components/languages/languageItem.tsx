/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');

class LanguageItem extends React.Component<ILanguageItemProps, any>
{
    constructor(props: ILanguageItemProps)
    {
        super(props);
    }

    public render()
    {
        return (
            <div className="label-group">
                <span className="caption strong">{this.props.model.name}</span>
                <div className="wrapper">
                    <span className="description">{this.props.model.level}</span>
                </div>
            </div>
        );
    }
}

export = LanguageItem;