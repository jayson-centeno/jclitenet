/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');

class AddressIndustryInfo extends React.Component<IAddressIndustryInfoProps, any>
{
    constructor(props: IAddressIndustryInfoProps)
    {
        super(props);
    }

    public render()
    {
        return (
            <span>
                {this.props.simpleAddress} | {this.props.industry}
            </span>
        )
    }
}

export = AddressIndustryInfo;