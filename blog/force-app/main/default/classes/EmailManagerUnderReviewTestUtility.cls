@isTest
public class EmailManagerUnderReviewTestUtility {
    
    public static Posts__c dataBaseInsertUtility() {
        //Insert Data to test
        List<Posts__c> posts = new List<Posts__c>();
        Posts__c a = new Posts__c();
        a.Name = 'test';
        a.Status__c = 'Under Review';
        a.Content__c = 'test';
        //Create account and contacts
        List<Account> accts = new List<Account>();
        Account acoun = new Account(Name='TestAccount');
        List<Contact> cons = new List<Contact>();
        accts.add(acoun);
        insert accts;
        Contact contac= new Contact(firstname = 'Test',
                                     lastname = 'Test',
                                     AccountId = acoun.Id);
        cons.add(contac);
        insert cons;

        //Add the writer
        a.Writer__c = contac.Id;
        posts.add(a);
        insert posts;
		return a;
		        
	}


}