public with sharing class EmailVerification 
{
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountName()
    {
        List<Account> accname = [Select Name,Password__c from Account];
        return accname;
    }
}
