import { LightningElement , track} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class EmailCreating extends NaviagationMixin(LightningElement) 
{
    handleCreatingContact(event)
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

   
    @track isModalOpen = false;
    openModal() 
    {
        // to open modal set isModalOpen tarck value as true
        this.isModalOpen = true;
    }
    closeModal() 
    {
        // to close modal set isModalOpen tarck value as false
        this.isModalOpen = false;
    }
    submitDetails() 
    {
        // to close modal set isModalOpen tarck value as false
        //Add your code to call apex method or do some processing
        this.isModalOpen = false;
    }
}