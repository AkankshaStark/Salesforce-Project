public with sharing class ProductSelection 
{
    @AuraEnabled(cacheable=true)
    public static List<Product2> getProducts()
    {
        List<Product2> Options = [Select Id, Name from Product2];
        return Options;
    }

    @AuraEnabled(cacheable=true)
    public static List<Product2> showProducts(String selectedItemId)
    {
        List<Product2> Output = [Select Id,Name,Product_Price__c,StockKeepingUnit,VAT__c,Total__c From Product2 Where Product2.Id =: selectedItemId];
        return Output;
    }    
}
