/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');
import LanguagesModel = require('models/languagesModel');
import LanguageItem = require('components/languages/languageItem');
import Loader = require('components/tools/loader');

class Languages extends React.Component<ILanguagesProps, ILanguagesState>
{
    constructor(props: ILanguagesProps)
    {
        super(props);

        this.state = {
            isLoading: true
        };

        this.props.model = new LanguagesModel();

        var items = new Array<ILanguageItem>();
        items = items
                .concat({
                    id: 1,
                    name: "English",
                    level: "Conversational"
                })
                .concat({
                    id: 2,
                    name: "Tagalog",
                    level: "Advanced"
                });

        this.props.model.languages = items;

    }

    public componentDidMount()
    {
        setTimeout(() => this.setState({ isLoading:false }), 1000)
    }

    public render()
    {
        var languages = null;

        if (this.state.isLoading)
        {
            languages = (
                <Loader isActive={this.state.isLoading} />
            );
        }
        else 
        {
            languages = this.props.model.languages.map((item) =>
            {
                return (
                    <LanguageItem model={item} key={item.id} />
                );
            });
        }

        return (
            <section id="languages" className="profile-box bottom-spacer round-corner">
                <i className="fa fa-globe fa-2x"></i>
                <h3>Languages</h3>
                <div className="grp">
                    {languages}
                </div>
            </section>
        );

    }

}

export = Languages;