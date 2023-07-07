public with sharing class displayMapController
 {
    @AuraEnabled (cacheable=true)
    public static List<Order> getOfficeLocations(String accountNameInitial){
        String str = accountNameInitial + '%';
        return [SELECT Id, Name, BillingStreet, BillingCity, BillingState, BillingPostalCode, BillingCountry 
                FROM Order 
                WHERE Name LIKE :str];       
    }

}
