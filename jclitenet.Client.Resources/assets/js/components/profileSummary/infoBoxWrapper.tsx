/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');
import AddressIndustryInfo = require("components/profileSummary/addressIndustryInfo");
import LatestJob = require('components/profileSummary/latestJob');
import PreviousJobs = require('components/profileSummary/previousJobs');
import Education = require('components/profileSummary/education');
import Email = require('components/profileSummary/email');
import ContactNumber = require('components/profileSummary/contactNumber');
import Skype = require('components/profileSummary/skype');

class InfoBoxWrapper extends React.Component<IInfoBoxWrapperProps, IInfoBoxWrapperState>{
    
    constructor(props: IInfoBoxWrapperProps)
    {
        super(props);
    }

    public render()
    {
        return (
            <div id="info">
                <AddressIndustryInfo simpleAddress="Taytay, Philippines" industry="Computer Software" />
                <LatestJob jobName="BigOs" />
                <PreviousJobs jobs="Bigoscorp Bigoscorp Bigoscorp Bigoscorp Bigoscorp Bigoscorp Bigoscorp Bigoscorp Bigoscorp" />
                <Education education="Polytechnic University of the Philippines" />
                <Email email="jaysword1@yahoo.com" />
                <ContactNumber contact="+639277950178" />
                <Skype skype="jayson-centeno" />
            </div>
        )
    }

}

export = InfoBoxWrapper;