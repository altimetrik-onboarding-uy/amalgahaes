({
	formatterTextMarkdown: function (mytext) {
		//return marked(mytext);
		return '';
	},
	updateSatusUnderReview: function (component) {
		var post = component.get("v.simpleRecord");
		post.Status__c = "Under Review";
		component.set("v.simpleRecord", post);
		this.saveContentAuto(component);
		this.showMessage('Under Review');
	},
	updateSatusPublish: function (component) {
		var post = component.get("v.simpleRecord");
		post.Status__c = "Published";
		component.set("v.simpleRecord", post);
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