@isTest
private class EmailManagerUnderReviewTest {

    //Test at least 75% of the code

    //test1 schedule
    @isTest  static void testSchedule(){
        EmailManageUnderReview myemailclass = new EmailManageUnderReview();
        Test.startTest();
        SchedulableContext SC;
        myemailclass.execute(SC);
        Test.stopTest();
        
    }
    
    //Test 2 for when we send emails part 
    @isTest static void testEmailsPost(){
        EmailManageUnderReview myemailclass = new EmailManageUnderReview();
        Test.startTest();
        myemailclass.sendMail('amagalhaes@altimetrik.com', 'test', 'body');
        Integer invocations = Limits.getEmailInvocations();
        Test.stopTest();
        system.assertEquals(1, invocations, 'An email should be sent');
    }
     //Test 3 for when we send emails part 
    @isTest static void testEmailsPost2(){
        EmailManageUnderReview myemailclass = new EmailManageUnderReview();
        Test.startTest();
        myemailclass.sendMail('', '', '');
        Integer invocations = Limits.getEmailInvocations();
        Test.stopTest();
        system.assertEquals(0, invocations);
    }
    
     //Test 4 posts class
     @isTest static void testEmailsPost4(){
        EmailManageUnderReview myemailclass = new EmailManageUnderReview();
        Test.startTest();
        myemailclass.searchManagerAndPost();
        Integer invocations = Limits.getEmailInvocations();
        Test.stopTest();
        system.assertEquals(0, invocations);
    }
    
     
    
       
}