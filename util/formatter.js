jQuery.sap.declare("sprint.planning.fiori.util.formatter");
jQuery.sap.require("sap.ca.ui.model.format.DateFormat");
jQuery.sap.require("sap.ca.ui.model.format.NumberFormat");

sprint.planning.fiori.util.formatter = {

	dateShortFormatter: function(dDate) {
		if (!dDate) {
			return "";
		}
	    return sap.ca.ui.model.format.DateFormat.getDateInstance({style: "short"}).format(dDate);
	},

	dateMediumFormatter: function(dDate) {
		if (!dDate) {
			return "";
		}
	    return sap.ca.ui.model.format.DateFormat.getDateInstance({style: "medium"}).format(dDate);
	},

	dateAgoFormatter: sap.ca.ui.model.format.DateFormat.getDateInstance({
		style: "daysAgo"
	}),

	daysAgo: function(dDate) {
		if (!dDate) {
			return "";
		}
	    return sap.ca.ui.model.format.DateFormat.getDateInstance({style: "daysAgo"}).format(dDate);
		//return this.dateAgoFormatter.format(dDate);
	},

	formatStatusText: function(iStatus) {
		var oBundle = this.getModel("i18n").getResourceBundle();
		if (iStatus === "Planning") {
			return oBundle.getText("status.planning");
		}
		return oBundle.getText("status.finished");
	},

	formatStatus: function(iStatus) {
		return (iStatus === "Planning") ? sap.ui.core.ValueState.Warning : sap.ui.core.ValueState.Success;
	}

};