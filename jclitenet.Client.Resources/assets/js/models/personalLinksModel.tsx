/// <reference path="../interfaces/interfaces.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/require/require.d.ts" />

class PersonalLinksModel implements IPersonalLinksModel {
    public personalLinks: Array<IPersonalLinkItemModel>;
    constructor() { }
}

export = PersonalLinksModel;