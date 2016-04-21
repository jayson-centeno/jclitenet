/// <reference path="../interfaces/interfaces.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/require/require.d.ts" />

class LanguagesModel implements ILanguagesModel {
    public languages: Array<ILanguageItem>;
    constructor() { }
}

export = LanguagesModel;