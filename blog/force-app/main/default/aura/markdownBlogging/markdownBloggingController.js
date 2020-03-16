({
    init: function(cmp,evt, hlpr) {
      if (cmp.get('v.record') != 'undefined')
      //cmp.set('v.myVal',hlpr.formatterTextMarkdown('myVal'));
      cmp.set('v.myVal','');
    },
    
    handleSubmitReview: function (cmt, event, helper) {
      helper.updateSatusUnderReview(cmt);
    },
    handleSubmitPublish: function (cmt, event, helper) {
      helper.updateSatusPublish(cmt);
    }

});