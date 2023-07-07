import { LightningElement } from 'lwc';
import { NavigationMixin } from  'lightning/navigation';
import PURCHASE_OBJECT from '@salesforce/schema/Purchase__c';


export default class PurchasePage extends NavigationMixin(LightningElement) 
{
    objectApiName = PURCHASE_OBJECT;
}