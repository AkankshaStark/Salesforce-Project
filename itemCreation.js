import { LightningElement } from 'lwc';
import ITEM_OBJECT from '@salesforce/schema/Item__c';


export default class ComplaintForm extends LightningElement
{
    objectApiName = ITEM_OBJECT;
}