public with sharing class containerSelection 
{
    @AuraEnabled(cacheable=true)
    public static List<Container__c> getContainers()
    {
        List<Container__c> Options = [Select Id, Name from Container__c];
        return Options;
    }

    @AuraEnabled(cacheable=true)
    public static List<Container__c> showContainers(String selectedItemId)
    {
        List<Container__c> Output = [Select Id,Name,Size__c,Weight__c,Made_of__c From Container__c Where Container__c.Id =: selectedItemId];
        return Output;
    }

}
