import { LightningElement } from 'lwc';
import PURCHASE_OBJECT from '@salesforce/schema/Purchase__c';


export default class OrderCreation extends LightningElement
{
    objectApiName = PURCHASE_OBJECT;
}