({
    init: function (component, event, helper) {
        if (component.get('v.record') != 'undefined')
        component.set('v.myVal', helper.formatterTextMarkdown(component.get('v.record').Content__c));
    },
    handleKeyShortCut: function (component, event, helper) {
        helper.keyShortCut(component, event);
    },
       
    /*init: function(cmp) {
        //var myResource = $A.get('$Resource.marked') + 'marked.js';
		cmp.set('v.myVal', '');
        //cmp.set('v.myVal', '<p><script>alert(myResource)</script></p><p>hi!</p>');
    },*/

    handleSaveRecord: function (component, event, helper) {
        helper.saveContentAuto(component);
    },
    handleSubmitReview: function (component, event, helper) {
        helper.updateSatusUnderReview(component);
    },
    handleSubmitPublish: function (component, event, helper) {
        helper.updateSatusPublish(component);
    }
    
});