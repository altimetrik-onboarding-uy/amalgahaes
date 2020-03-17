({
	updatePath: function (cmp) {
		var currentStatus = cmp.get("v.current");
		var currentStatusCmp = cmp.find(currentStatus);
		switch (currentStatus) {
			case 'Draft':
				this.updateItemCss(currentStatusCmp);
				break;
			case 'Under Review':
				this.updateItemCss(cmp, 'Under Review');
				this.updateItemCss(currentStatusCmp);
				break;
			case 'Ready':
				this.updatePassedItemCss(cmp, 'Ready');
				this.updateItemCss(currentStatusCmp);
				break;
			case 'Published':
				this.updatePassedItemCss(cmp, 'Published');
				this.updateItemCss(currentStatusCmp);
				break;
		}
	},
	updateItemCss: function (currentStatusCmp) {
		$A.util.removeClass(currentStatusCmp, 'slds-is-incomplete');
		$A.util.addClass(currentStatusCmp, 'slds-is-current');
		$A.util.addClass(currentStatusCmp, 'slds-is-active');
	},
	updatePassedItemCss: function (cmp, status) {
		switch (status) {
			case 'Under Review':
				var currentStatusCmp = cmp.find('Draft');
				this.removeActiveAndCurrentClassPreviusItem(currentStatusCmp);
				this.completedItemCss(currentStatusCmp);
				break;
			case 'Ready':
				this.completedItemCss(cmp.find('Draft'));
				this.completedItemCss(cmp.find('Under Review'));
				break;
			case 'Published':
				this.completedItemCss(cmp.find('Draft'));
				this.completedItemCss(cmp.find('Under Review'));
				this.completedItemCss(cmp.find('Ready'));
				this.removeActiveAndCurrentClassPreviusItem(cmp.find('Ready'));
				break;
		}
	},
	completedItemCss: function (completedStatusCmp) {
		$A.util.removeClass(completedStatusCmp, 'slds-is-incomplete');
		$A.util.addClass(completedStatusCmp, 'slds-is-complete');
	},
	removeActiveAndCurrentClassPreviusItem: function (previousStatusCmp) {
		$A.util.removeClass(previousStatusCmp, 'slds-is-active');
		$A.util.removeClass(previousStatusCmp, 'slds-is-current');
	}
})