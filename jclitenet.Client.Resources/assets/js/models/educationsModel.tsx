/// <reference path="../interfaces/interfaces.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/require/require.d.ts" />

class EducationsModel implements IEducationModel {

    public educationItems: Array<IEducationItem>;

    constructor()
    {
        this.educationItems = new Array<IEducationItem>();
    }
}

export = EducationsModel;