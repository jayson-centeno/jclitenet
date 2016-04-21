/// <reference path="../../interfaces/interfaces.d.ts" />
/// <reference path="../../typings/react/react-global.d.ts" />
/// <reference path="../../typings/require/require.d.ts" />

import React = require('react');
import WorkExperienceItem = require('components/workExperience/workExperienceItem');
import WorkExperiencesModel = require('models/workExperiencesModel');
import Loader = require('components/tools/loader');

class WorkExperiences extends React.Component<IWorkExperiencesProps, IWorkExperiencesState>
{
    constructor(props: IWorkExperiencesProps)
    {
        super(props);

        this.props.model = new WorkExperiencesModel();

        this.props.model.workExpericeItems = this.props.model.workExpericeItems.concat({
            id: 1,
            position: "Senior Asp.Net Developer",
            companyName: "CVCheck.com - Outsourced",
            workStarted: "Jan 2015", workEnded: "Present",
            simpleAddress: " Makati, Philippines",
            workDescription: "- Pioneer Programmer of CVCheck.biz in the Philippines - Provide weekly reports to the management as part of project monitoring - Participate in project enhancement, code maintenance and certifications - Participate in framework collaboration and executions - Mentoring other developers about standard implementations - Monitoring project workflows and support bugs using Jira. - Provide clients with excellent bug fixes - Write code documentations - Write unit Testing - Supervising Front end developer - Work From Home"
        })
        .concat(
        {
            id: 2,
            position: "Mid Asp.Net Developer",
            companyName: "CVCheck.com - Outsourced",
            workStarted: "Jan 2015", workEnded: "Present",
            simpleAddress: " Makati, Philippines",
            workDescription: "- Pioneer Programmer of CVCheck.biz in the Philippines - Provide weekly reports to the management as part of project monitoring - Participate in project enhancement, code maintenance and certifications - Participate in framework collaboration and executions - Mentoring other developers about standard implementations - Monitoring project workflows and support bugs using Jira. - Provide clients with excellent bug fixes - Write code documentations - Write unit Testing - Supervising Front end developer - Work From Home"
        })

        this.state = {
            isLoading:true
        }
    }

    public componentDidMount()
    {
        setTimeout(() => this.setState({ isLoading: false }), 1000);
    }

    public render()
    {
        var workItems = null;
        if (!this.state.isLoading) {
            workItems = this.props.model.workExpericeItems.map(function (item) {
                var lastItem = this.props.model.workExpericeItems[this.props.model.workExpericeItems.length - 1];
                var isLast: boolean = (lastItem == item);
                return (
                    <WorkExperienceItem key={item.id} workExperience={item} isLastItem={isLast} />
                );
            }, this);
        }
        else
        {
            workItems = <Loader isActive={this.state.isLoading} />;
        }

        return (
            <section id="work-exp" className="profile-box bottom-spacer round-corner">
                <i className="fa fa-industry fa-2x"></i>
                <h3>Work Experiences</h3>
                {workItems}
            </section>

        );

    }


}

export = WorkExperiences;