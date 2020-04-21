/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"team/zag/demo/demo-ui5-Sample/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"team/zag/demo/demo-ui5-Sample/test/integration/pages/Main",
	"team/zag/demo/demo-ui5-Sample/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "team.zag.demo.demo-ui5-Sample.view.",
		autoWait: true
	});
});