({
    init: function(cmp) {
        //var myResource = $A.get('$Resource.marked') + 'marked.js';
		cmp.set('v.myVal', '');
        //cmp.set('v.myVal', '<p><script>alert(myResource)</script></p><p>hi!</p>');
    },
    
    handleSubmit : function (cmp, evt, hlpr) {
        alert(" You submit the content ");
    }
});