/// <reference path="../interfaces/interfaces.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/require/require.d.ts" />

class ContactsModel implements IContactsModel
{
    public Id: number;
    public email: string;
    public address1: string;
    public address2: string;
    public mobile: string;
    public homePhone: string;
}

export = ContactsModel;