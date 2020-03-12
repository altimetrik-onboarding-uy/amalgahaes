({
    init: function(cmp) {
        //var myResource = $A.get('$Resource.marked') + 'marked.js';
		cmp.set('v.myVal', '');
        //cmp.set('v.myVal', '<p><script>alert(myResource)</script></p><p>hi!</p>');
    },

    onChangeMarkdown: function (cmp, evt, hlpr) {
        
        //var myColor = event.getSource().get("v.value");
        
        //var test;
        var myResource = $A.get('$Resource.marked') + 'marked.js';
        
        evt._body.set(this.template.querySelector('div').innerHTML,myResource.querySelector('div'));
        
        
    },
  
    handleSubmit : function (cmp, evt, hlpr) {
        alert(" You submit the content ");
    }

});