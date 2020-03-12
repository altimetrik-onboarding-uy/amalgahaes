public class EmailManageUnderReview implements Schedulable{

    public void execute(SchedulableContext SC){
        //Have process more than50K records
        searchManagerAndPost();
    }

    //Method to search the manager of the post with under review status
    public void searchManagerAndPost(){
    	try {
            //Posters with under review status
			List<Posts__c> mypost = [ SELECT Id, Name, Status__c, Writer__c, CreatedById
            	FROM Posts__c WHERE Status__c = 'Under Review'];
            for ( Integer i = 0; i<= mypost.size(); i++ ) {
                Posts__c mypostID = mypost[i];
                //Manager that will receive the emails
                List<User> mymanagers = [ Select Id, ManagerId, Manager.Name, Manager.Email, Email FROM User Where Id =: mypostID.CreatedById ];
                for ( Integer e = 0; e<= mymanagers.size(); e++ ) {
                	User myUser = mymanagers[e];
                    if(myUser.Manager.Email != null){
                    	String address = myUser.Manager.Email;
                        String subject = 'Remain Under Review Posts';
                        String body = 'Dear  manager, ' +  '\n'+ 'please review this post->' + mypostID.Name +  '\n';
                        sendMail(address,subject, body);                        
                	}
                }
                

			}

       	} catch (ListException e) {
           
        	System.debug('A list exception as ocurred :'+ e);
		}
	}
        

    
    // Public method to send emails
    public void sendMail(String address, String subject, String body) {
        
        try{
            // Create an email message object
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            String[] toAddresses = new String[] {address};
            mail.setToAddresses(toAddresses);
            mail.setSubject(subject);
            mail.setPlainTextBody(body);
            // Pass this email message to the built-in sendEmail method 
            // of the Messaging class
            Messaging.SendEmailResult[] results = Messaging.sendEmail(
                                     new Messaging.SingleEmailMessage[] { mail });
            
            // Call a helper method to inspect the returned results
            inspectResults(results);
        }
        catch(System.EmailException e){
            System.debug('A email exception as ocurred :'+ e);
            
        }
    }
    
    // Helper method
    private static Boolean inspectResults(Messaging.SendEmailResult[] results) {
        Boolean sendResult = true;
        
        // sendEmail returns an array of result objects.
        // Iterate through the list to inspect results. 
        // In this class, the methods send only one email, 
        // so we should have only one result.
        for (Messaging.SendEmailResult res : results) {
            if (res.isSuccess()) {
                System.debug('Email sent successfully');
            }      
        }
        
        return sendResult;
    }

}