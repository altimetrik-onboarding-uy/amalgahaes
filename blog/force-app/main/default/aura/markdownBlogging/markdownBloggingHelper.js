({
	saveContentAuto: function (component) {
		component.set('v.myVal', this.formatterTextMarkdown(component.get('v.record').Content__c));

		window.setTimeout(
			$A.getCallback(function () {
				component.find("recordEditor").saveRecord($A.getCallback(function (saveResult) {
					if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
						console.log("The data was Saved successfully.");
					} else if (saveResult.state === "INCOMPLETE") {
						console.log("User is offline, device doesn't support drafts.");
					} else if (saveResult.state === "ERROR") {
						console.log('Problem saving record, error: ' +
							JSON.stringify(saveResult.error));
					} else {
						console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
					}
				}));
			}), 3000
		);
	},
	
	formatterTextMarkdown: function (mytext) {
		return marked(mytext);
	},
	updateSatusUnderReview: function (component) {
		var post = component.get("v.record");
		post.Status__c = "Under Review";
		component.set("v.record", post);
		this.saveContentAuto(component);
		this.showMessage('Under Review');
	},
	updateSatusPublish: function (component) {
		var post = component.get("v.record");
		post.Status__c = "Published";
		component.set("v.record", post);
		this.saveContentAuto(component);
		this.showMessage('Published');
	},
	showMessage: function (status) {
		var resultsToast = $A.get("e.force:showToast");
		resultsToast.setParams({
			"title": "Update",
			"message": "The status post was updated to: " + status
		});
		resultsToast.fire();
	}
})