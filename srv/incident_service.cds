using uidincident as inc from '../db/data-model';
using ZC_USERS_CDS as users_ext from './external/ZC_USERS_CDS.csn';

service uidincident_services {
    @Capabilities.Insertable : true
    @Capabilities.Updatable  : true
    @Capabilities.Deletable  : true
    entity incident as projection on inc.incident;

    @readonly
    // @requires : 'authenticated-user'
    entity users as projection on users_ext.ZC_USERS {
        key bname, name_text
    }
}
