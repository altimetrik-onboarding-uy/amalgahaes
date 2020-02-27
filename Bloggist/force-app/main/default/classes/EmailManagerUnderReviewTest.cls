@isTest
private class EmailManagerUnderReviewTest {

    //Test at least 75% of the code

    //test1 schedule
    @isTest
    static testMethod void testSchedule(){
        EmailManageUnderReview myemailclass = new EmailManageUnderReview();
        Test.startTest();
        SchedulableContext SC;
        myemailclass.execute(SC);
        Test.stopTest();
        
    }
    
    //Test 2 for when we send emails part 
    @isTest
    static testMethod void testEmailsPost(){
        EmailManageUnderReview myemailclass = new EmailManageUnderReview();
        Test.startTest();
        myemailclass.sendMail('amagalhaes@altimetrik.com', 'test', 'body');
        Integer invocations = Limits.getEmailInvocations();
        Test.stopTest();
        system.assertEquals(1, invocations, 'An email should be sent');
    }
    
    //Test 3 posts class
    @isTest
    static testmethod void dataBaseInsert() {
        // Query an existing account in the organization.
       	Posts__c a = [ SELECT Id, Name, Writer__c FROM Posts__c WHERE Name = 'post' LIMIT 1];
        System.assert(a != null);   
        // Create a test account based on the queried account.
        Posts__c testPost = a.clone();
        testPost.Name = 'Test';
        testPost.Writer__c = '0036g00000AT36HAAT';
        insert testPost;
        // Query the test account that was inserted.
        Posts__c testPost2 = [ SELECT Id, Name, Writer__c FROM Posts__c
                                WHERE Name = 'Test' LIMIT 1];
        System.assert(testPost2 != null);
    }
       
}