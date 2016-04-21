/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');

class ProfilePicture extends React.Component<IProfilePictureProps, IProfilePictureState>{
    
    constructor(props: IProfilePictureProps)
    {
        super(props);
    }

    public render()
    {
        return (
            <div id="pic">
                <img src="/assets/images/upload/2cbf4fb7e2823ce69b932954b163cf93.png" width="192" height="192" />
            </div>
        )
    }

}

export = ProfilePicture;