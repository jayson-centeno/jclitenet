/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');
import EducationItem = require('components/educations/educationItem');
import EducationsModel = require('models/educationsModel');
import Loader = require('components/tools/loader');

class Educations extends React.Component<IEducationsProps, IEducationsState> {

    constructor(props: IEducationsProps)
    {
        super(props);

        props.model = new EducationsModel();

        props.model.educationItems = props.model.educationItems.concat({
            id: 1,
            schoolName: "Polytechnic University of the Philippines",
            degree: "Bachelor Degree",
            courseName: "Computer Engineering",
            dateTaken: "1998",
            dateEnded: "2003"
        });

        props.model.educationItems = props.model.educationItems.concat({
            id: 2,
            schoolName: "Polytechnic University of the Philippines",
            degree: "Bachelor Degree",
            courseName: "Computer Engineering",
            dateTaken: "1998",
            dateEnded: "2003"
        });

        this.state = {
            isLoading: true
        };
    }

    public componentDidMount()
    {
        setTimeout(() => this.setState({ isLoading: false }), 1000);
    }

    public render() {

        var educationItemsComponent = null;

        if (!this.state.isLoading) {
            var educationItems = this.props.model.educationItems;
            var showItems = educationItems.filter(function (item) {
                return true;
            }, this);

            var lastItem = showItems[showItems.length - 1];
            educationItemsComponent = showItems.map(function (item) {
                var isLast: boolean = (lastItem == item);
                return (
                    <EducationItem key={item.id} education={item} isLastItem={isLast} />
                );
            })
        }
        else
        {
            educationItemsComponent = <Loader isActive={this.state.isLoading} />;
        }

        return (
            <section id="education" className="profile-box bottom-spacer round-corner">
                <i className="fa fa-graduation-cap fa-2x"></i>
                <h3>Education</h3>
                {educationItemsComponent}
            </section>
        )
                     
    }

}

export = Educations;