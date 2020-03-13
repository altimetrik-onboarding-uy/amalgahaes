({
    init: function(cmp) {
        
		cmp.set('v.myVal',  helper.formatterTextMarkdown('v.myVal'));
        
    },
    /*init: function (component, event, helper) {
        if (component.get('v.record') != 'undefined'){
            component.set('v.myVal', helper.formatterTextMarkdown(component.get('v.record').Content__c));
        }
    },
    handleKeyShortCut: function (component, event, helper) {
        helper.keyShortCut(component, event);
    },
    

    handleSaveRecord: function (component, event, helper) {
        helper.saveContentAuto(component);
    },
    handleSubmitReview: function (component, event, helper) {
        helper.updateSatusUnderReview(component);
    },
    handleSubmitPublish: function (component, event, helper) {
        helper.updateSatusPublish(component);
    }*/
    
});