({
    init: function(cmp,evt, hlpr) {
      if (cmp.get('v.simpleRecord') != 'undefined')
			cmp.set('v.myVal', hlpr.formatterTextMarkdown('v.myVal'));
    },
    
    handleSubmitReview: function (cmt, event, helper) {
      helper.updateSatusUnderReview(cmt);
    },
    handleSubmitPublish: function (cmt, event, helper) {
      helper.updateSatusPublish(cmt);
    }

});