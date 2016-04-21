/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');
import CertificationsModel = require('models/certificationsModel');
import CertificationItem = require('components/certifications/certificationItem');
import Loader = require('components/tools/loader');

class Certifications extends React.Component<ICertificationsProps, ICertificationState>
{
    constructor(props: ICertificationsProps)
    {
        super(props);

        this.state = {
            isLoading:true
        }

        let items: Array<ICertificationItem> = new Array<ICertificationItem>(
            { id: 1, title: "MCP", expStartDate: new Date(2013, 1, 1), expEndDate: new Date(2017, 1, 1) },
            { id: 1, title: "MCP", expStartDate: new Date(2013, 1, 1), expEndDate: new Date(2018, 1, 1) }
        );

        this.props.model = new CertificationsModel();
        this.props.model.certifications = items;

    }

    public componentDidMount()
    {
        setTimeout(() => this.setState({ isLoading:false }), 1000);
    }

    public render()
    {
        let certifications: any = null;
        if (this.state.isLoading) {
            certifications = (
                <Loader isActive={this.state.isLoading}/>
            );
        }
        else
        {
            certifications = this.props.model.certifications.map((item) => {
                return (
                    <CertificationItem model={item} />    
                )
            })
        }

        return (
            <section id="certifications" className="profile-box bottom-spacer round-corner">
                <i className="fa fa-certificate fa-2x"></i>
                <h3>Certifications</h3>
                <div className="grp">
                    {certifications}
                </div>
            </section>
        );
    }
}

export = Certifications;