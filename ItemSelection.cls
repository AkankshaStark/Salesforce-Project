public with sharing class ItemSelection 
{
    @AuraEnabled(cacheable=true)
    public static List<Item__c> getItems()
    {
        List<Item__c> Options = [Select Id,Category__c from Item__c];
        return Options;
    }

    @AuraEnabled(cacheable=true)
    public static List<Item__c> showItems(String selectedItemId)
    {
        List<Item__c> Output = [Select Id,Name, Price__c, VAT__c, Total__c, SKU__c , Image__c From Item__c Where Item__c.Id =: selectedItemId];
        return Output;
    }

}

