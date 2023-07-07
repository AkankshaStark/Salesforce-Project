import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';


export default class AccountSignup extends NavigationMixin(LightningElement) 
{
    objectApiName = ACCOUNT_OBJECT;
    
    handleWelcomeButton(event)
    {
      this[NavigationMixin.Navigate]
      ({
         type: 'standard__component',
         attributes: 
         {
             componentName:'c__navigation1'
         },
     });
 }
}

