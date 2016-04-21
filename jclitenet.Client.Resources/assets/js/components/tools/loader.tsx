/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');

class Loader extends React.Component<ILoaderProps, any> {

    constructor(props: ILoaderProps) {
        super(props);
    }

    public render() {

        if (this.props.isActive) {
            return (
                <div>
                    <i className="fa fa-spinner"></i>
                </div>
            );
        }
        else
            return (<div></div>);

    }

}

export = Loader;