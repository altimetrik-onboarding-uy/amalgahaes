({
    init: function(cmp,evt, hlpr) {
      //if (cmp.get('v.record') != 'undefined')
      //cmp.set('v.myVal',hlpr.formatterTextMarkdown('myVal'));
      //cmp.set('v.myVal',hlpr.formatterTextMarkdown(component.get('v.simpleRecord').Content__c));
      cmp.set('v.myVal','');
    },
    handleSaveRecord: function (component, event, helper) {
      helper.saveContentAuto(component);
    },
    handleSubmitReview: function (cmt, event, helper) {
      helper.updateSatusUnderReview(cmt);
    },
    handleSubmitPublish: function (cmt, event, helper) {
      helper.updateSatusPublish(cmt);
    }

});