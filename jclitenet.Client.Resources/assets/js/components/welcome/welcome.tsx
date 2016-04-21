import * as React from 'react'

export default class Welcome extends React.Component<any, any>
{
    public render()
    {
        return (
            <div id="welcome-layout">
                {this.props.children}
            </div>            
        )
    }
}