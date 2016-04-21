import * as React from 'react';

export default class HeaderSummary extends React.Component<IHeaderSummaryProps, any> {
    
    constructor(props: IHeaderSummaryProps)
    {
        super(props);
    }
                
    public render() {
        return (
            <div id="title">
                <h1>
                    {this.props.name}
                </h1>
                <h2>
                    {this.props.title}
                </h2>
            </div>
        )
    }

}