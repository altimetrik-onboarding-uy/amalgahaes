({
    initMarkdown: function(cmp) {
        //var myResource = $A.get('$Resource.marked') + 'marked.js';
		cmp.set('v.myValMarkdown', '');
        //cmp.set('v.myValMarkdown', '<p><script>alert(myResource)</script></p><p>hi!</p>');
    },
    
    handleSubmit : function (cmp, evt, hlpr) {
        alert(" You submit the content ");
    }
});