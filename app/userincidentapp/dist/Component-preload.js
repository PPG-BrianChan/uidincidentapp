//@ui5-bundle userincidentapp/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"userincidentapp/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("userincidentapp.Component",{metadata:{manifest:"json"}})});
},
	"userincidentapp/i18n/i18n.properties":'# This is the resource bundle for userincidentapp\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=User Management Incident App\n\n#YDES: Application description\nappDescription=A Fiori application.\n',
	"userincidentapp/manifest.json":'{"_version":"1.32.0","sap.app":{"id":"userincidentapp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","dataSources":{"mainService":{"uri":"uidincident-services/","type":"OData","settings":{"odataVersion":"4.0"}}},"offline":false,"resources":"resources.json","sourceTemplate":{"id":"ui5template.fiorielements.v4.lrop","version":"1.0.0"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"resources":{"js":[],"css":[]},"dependencies":{"minUI5Version":"1.98.0","libs":{"sap.ui.core":{},"sap.fe.templates":{}}},"models":{"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"},"i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"routing":{"routes":[{"pattern":":?query:","name":"incidentList","target":"incidentList"},{"pattern":"incident({key}):?query:","name":"incidentObjectPage","target":"incidentObjectPage"}],"targets":{"incidentList":{"type":"Component","id":"incidentList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"incident","variantManagement":"Page","navigation":{"incident":{"detail":{"route":"incidentObjectPage"}}}}}},"incidentObjectPage":{"type":"Component","id":"incidentObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"incident"}}}}},"contentDensities":{"compact":true,"cozy":true}},"sap.platform.abap":{"_version":"1.1.0","uri":""},"sap.platform.hcp":{"_version":"1.1.0","uri":""},"sap.fiori":{"_version":"1.1.0","registrationIds":[],"archeType":"transactional"}}'
}});