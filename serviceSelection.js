import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import complaintSelection from '@salesforce/resourceUrl/complaintSelection';

export default class ServiceSelection extends NavigationMixin(LightningElement) 
{
    complaint = complaintSelection;
    handleComplaint(event)
    {
        this[NavigationMixin.Navigate]
      ({
         type: 'standard__component',
         attributes: 
         {
             componentName:'c__navigation3'
         },
     });
    }
}