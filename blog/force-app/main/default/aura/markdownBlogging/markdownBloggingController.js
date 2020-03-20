({
    onRender: function (component, event, helper) {
      if (component.get('v.simpleRecord') != 'undefined')
      //cmp.set('v.myVal',hlpr.formatterTextMarkdown('myVal'));
      //cmp.set('v.myVal',hlpr.formatterTextMarkdown(cmp.get('v.record').Content__c));
      //cmp.set('v.myVal','');
        component.set('v.markDownText', helper.formatterTextMarkdown(component.get('v.simpleRecord').Content__c));
    },
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