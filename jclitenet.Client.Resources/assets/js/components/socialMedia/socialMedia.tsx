/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');
import SocialMediaModel = require('models/socialMediaModel');
import Loader = require('components/tools/loader');

class SocialMedia extends React.Component<ISocialMediaProps, ISocialMediaState>
{
    constructor(props: ISocialMediaProps) {
        super(props);

        this.state = {
            isLoading: true
        }

        this.props.model = new SocialMediaModel();
        this.props.model.links = new Array<string>("www.linkedin.com", "www.googleplus.com");
    }

    public componentDidMount() {
        setTimeout(() => this.setState({ isLoading: false }), 1000);
    }

    public render() {
        var socialMedias = null;

        if (this.state.isLoading) {
            socialMedias = <Loader isActive={this.state.isLoading} />
        }
        else {
            socialMedias = this.props.model.links.map(function (item) {

                var newItem = item;

                return (
                    <li>
                        <a href={newItem}>{newItem}</a>
                    </li>
                )
            }, this);
        }

        return (
            <section id="skills" className="profile-box bottom-spacer round-corner">
                <i className="fa fa-briefcase fa-2x"></i>
                <h3>Social Media Accounts</h3>
                <ul>
                    {socialMedias}
                </ul>
            </section>
        )
    }
}

export = SocialMedia;