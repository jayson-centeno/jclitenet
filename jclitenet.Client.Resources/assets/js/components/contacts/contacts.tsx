/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');
import ContactsModel = require('models/contactsModel');
import Loader = require('components/tools/loader');

class Contacts extends React.Component<IContactsProps, IContactsState>
{
    constructor(props: IContactsProps)
    {
        super(props);

        this.props.model = new ContactsModel();
        this.props.model.email = "jaysword1@yahoo.com";
        this.props.model.address1 = "L1 B5 East Acropolis Phase II Brgy Dolores, Taytay, Rizal 1920 Philippines";
        this.props.model.address2 = "L1 B5 East Acropolis Phase II Brgy Dolores, Taytay, Rizal 1920 Philippines";
        this.props.model.mobile = "+639277950178";
        this.props.model.homePhone = "0200320032";

        this.state = {
            isLoading: true
        }
    }

    public componentDidMount()
    {
        setTimeout(() => this.setState({ isLoading: false }), 1000);
    }

    public render()
    {
        let contacts : any = null;

        if (this.state.isLoading)
        {
            contacts = (<Loader isActive={this.state.isLoading} />);
        }
        else
        {
            contacts = (
                <div className="grp">
                    <div className="label-group">
                        <span className="caption">Email: </span>
                        <div className="wrapper">
                            <span className="description email">{this.props.model.email}</span>
                        </div>
                    </div>
                    <div className="label-group">
                        <span className="caption">Address1: </span>
                        <div className="wrapper">
                            <span class="description">{this.props.model.address1}</span>
                        </div>
                    </div>
                    <div className="label-group">
                        <span className="caption">Address2: </span>
                        <div className="wrapper">
                            <span className="description">{this.props.model.address2}</span>
                        </div>
                    </div>
                    <div className="label-group">
                        <span className="caption">Mobile: </span>
                        <div className="wrapper">
                            <span className="description">{this.props.model.mobile}</span>
                        </div>
                    </div>
                    <div className="label-group">
                        <span className="caption">Home: </span>
                        <div className="wrapper">
                            <span className="description">{this.props.model.homePhone}</span>
                        </div>
                    </div>
                </div>    
            )
        }

        return (
            <section id="contacts" className="profile-box bottom-spacer round-corner">
                <i className="fa fa-file-text fa-2x"></i>
                <h3>Contact Information</h3>
                {contacts}
            </section>
        )
    }
}

export = Contacts;