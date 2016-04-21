/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');
import PersonalLinksModel = require('models/personalLinksModel');
import PersonalLinksItem = require('components/personalLinks/personalLinksItem');
import Loader = require('components/tools/loader');

class PersonalLinks extends React.Component<IPersonalLinksProps, IPersonalLinksState>
{
    constructor(props: IPersonalLinksProps) {
        super(props);

        this.state = {
            isLoading: true
        };

        this.props.model = new PersonalLinksModel();

        var items = new Array<IPersonalLinkItemModel>();
        items = items
            .concat({
                id: 1,
                name: "Personal",
                link : "www.x.com"
            })
            .concat({
                id: 2,
                name: "LinkedIn",
                link: "www.linkedin.com"
            });

        this.props.model.personalLinks = items;

    }

    public componentDidMount() {
        setTimeout(() => this.setState({ isLoading: false }), 1000)
    }

    public render() {
        var personalLinks = null;

        if (this.state.isLoading) {
            personalLinks = (
                <Loader isActive={this.state.isLoading} />
            );
        }
        else {
            personalLinks = this.props.model.personalLinks.map((item) => {
                return (
                    <PersonalLinksItem model={item} key={item.id} />
                );
            });
        }

        return (
            <section id="home-page" className="profile-box bottom-spacer round-corner">
                <i className="fa fa-home fa-2x"></i>
                <h3>Personal Home Page or Blogs</h3>
                {personalLinks}
            </section>
        );

    }

}

export = PersonalLinks;