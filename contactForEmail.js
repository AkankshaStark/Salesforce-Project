import { LightningElement } from 'lwc';
import { NavigationMixin } from  'lightning/navigation';
import CONTACT_OBJECT from '@salesforce/schema/Contact';


export default class ContactForEmail extends NavigationMixin(LightningElement) 
{
    objectApiName = CONTACT_OBJECT;

    handleCase(event)
    {
        this[NavigationMixin.Navigate]
        ({
           type: 'standard__component',
           attributes: 
           {
               componentName:'c__navigation4'
           },
       });
    }
}