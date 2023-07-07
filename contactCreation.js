import { LightningElement } from 'lwc';
import { NavigationMixin } from  'lightning/navigation';
import CONTACT_OBJECT from '@salesforce/schema/Contact';


export default class ComplaintForm extends NavigationMixin(LightningElement) 
{
    objectApiName = CONTACT_OBJECT;
}