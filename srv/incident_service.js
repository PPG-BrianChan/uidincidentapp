//Insert code here

const cds = require('@sap/cds');


module.exports = cds.service.impl(async function() {

    const users = await cds.connect.to('ZC_USERS_CDS');

    this.on('READ', 'users', async req => {
        return users.run(req.query);
    });

    this.on('CREATE', 'incident', async (req, msg) => {
        createwf(msg.data);
    });
});

const createwf = async (incident) => {
const payload = {
    definitionId: "cng.com.approvalprocess",
    context: {
      IncidentUUID: incident.ID,
      request: { id: incident.ID },
      TicketNo: incident.ticketno,
      RaisedBy: incident.createdBy,
      Description: incident.description,
      Status: incident.status,
      approvalStep: {
        decision: "",
      },
      caller: "CAP",
    },
  };

//   const response = await executeHttpRequest(
//     {
//       destinationName: "bpmworkflowruntime_test",
//     },
//     { method: "POST", data: payload, url: "/rest/v1/workflow-instances" }
//   );

  console.log(response.data);
};
