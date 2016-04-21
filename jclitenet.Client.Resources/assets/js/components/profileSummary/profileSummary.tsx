/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require("react");
import ProfilePicture = require('components/profileSummary/profilePicture');
import InfoBoxWrapper = require('components/profileSummary/infoBoxWrapper')

class ProfileSummary extends React.Component<IProfileSummaryProps, IProfileSummaryState>{
    
    constructor(props: IProfileSummaryProps)
    {
        super(props);
    }
    
    public render() {
        return (
            <section id="profile-summary" className="profile-box bottom-spacer round-corner">
                <div className="profile-wrapper">
                    <ProfilePicture />
                    <InfoBoxWrapper />
                </div>
            </section>
        )
    }
}

export = ProfileSummary;