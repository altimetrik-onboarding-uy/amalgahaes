({


    




    init: function(cmp) {
        var myResource = $A.get('$Resource.marked') + 'marked.js';
		cmp.set('v.myVal', '');
        //cmp.set('v.myVal', '<p><script>alert(myResource)</script></p><p>hi!</p>');
    }
    //,

    //onChangeMarkdown: function (cmp, evt, hlpr) {
        
        //var myColor = event.getSource().get("v.value");
        
       // var myResource = $A.get('$Resource.marked') + 'marked.js';
        //evt._body.set(this.template.querySelector('div').innerHTML,myResource.querySelector('div'));
        //cmp.set('v.myVal', myResource);
       


        //var action= cmp.get('v.myval');
       // action.setCallback(this,function(data){
          //  cmp.set('v.myVal', data.getReturnValue());

        //})
       // $A.get('$Resource.marked') + 'marked.js';
        
    //},
  
   // handleSubmit : function (cmp, evt, hlpr) {
      //  alert(" You submit the content ");
   // }

});