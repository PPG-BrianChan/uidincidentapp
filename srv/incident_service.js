//Insert code here

const cds = require('@sap/cds');


module.exports = cds.service.impl(async function() {

    const users = await cds.connect.to('ZC_USERS_CDS');

    this.on('READ', 'users', async req => {
        return users.run(req.query);
    });

});