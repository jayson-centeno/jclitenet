/// <reference path="../interfaces/interfaces.d.ts" />
/// <reference path="../typings/react/react-global.d.ts" />
/// <reference path="../typings/require/require.d.ts" />

class CertificationsModel implements ICertificationsModel
{
    public certifications: Array<ICertificationItem>;
}

export = CertificationsModel;