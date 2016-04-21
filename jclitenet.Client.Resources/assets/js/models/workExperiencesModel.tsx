/// <reference path="../interfaces/interfaces.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/require/require.d.ts" />

class WorkExperiencesModel implements IWorkExperiencesModel
{
    public workExpericeItems: Array<IWorkExperienceItem>;

    constructor()
    {
        this.workExpericeItems = new Array<IWorkExperienceItem>();
    }
}

export = WorkExperiencesModel;