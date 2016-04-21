/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />
/// <reference path="../../typings/react-router/react-router.d.ts" />

import * as React from 'react'
import { Link } from 'react-router'

import HeaderSummary from 'components/headerSummary/headerSummary'
import ProfileSummary = require('components/profileSummary/profileSummary')
import Introduction = require('components/introduction/introduction')
import Educations = require('components/educations/educations')
import WorkExperiences = require('components/workExperience/workExperiences')
import Skills = require('components/skills/skills')
import Contacts = require('components/contacts/contacts')
import Languages = require('components/languages/languages')
import Certifications = require("components/certifications/certifications")
import Interests from "components/interests/interests"
import PersonalLinks = require("components/personalLinks/personalLinks")
import SocialMedia = require("components/socialMedia/socialMedia")

export default class Index extends React.Component<IHomeProps, IHomeState> {
    public render() {
        return (
            <div id="summary">
                <div className="background parallax">
                </div>
                <div className="container">
                    <HeaderSummary name="Jayson Centeno" title="FullStack .Net Developer" />
                    <ProfileSummary />
                    <Introduction introText="No Value" />
                    <Educations model={null} />
                    <WorkExperiences model={null} />
                    <Skills model={null} />
                    <Contacts model={null} />
                    <Languages model={null} />
                    <Certifications model={null} />
                    <Interests model={null} />
                    <PersonalLinks model={null} />
                    <SocialMedia model={null} />
                </div>
            </div>
        )
    }
}