import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class WelcomePage extends NavigationMixin(LightningElement)
 {
    handleWelcomeButton(event)
    {
      this[NavigationMixin.Navigate]
      ({
         type: 'standard__component',
         attributes: 
         {
             componentName:'c__navigation11'
         },
     });
 }

}