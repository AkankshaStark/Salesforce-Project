import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import posSelection from '@salesforce/resourceUrl/posSelection';
import complaintSelection from '@salesforce/resourceUrl/complaintSelection';

export default class TypeOfService extends NavigationMixin(LightningElement) 
{
    pos = posSelection;
    complaint = complaintSelection;
    handlePOS(event)
    {
        this[NavigationMixin.Navigate]
      ({
         type: 'standard__component',
         attributes: 
         {
             componentName:'c__navigation2'
         },
     });
    }

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