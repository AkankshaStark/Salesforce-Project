import { LightningElement, track, api } from 'lwc';
import { NavigationMixin } from  'lightning/navigation';
import CASE_OBJECT from '@salesforce/schema/Case';


export default class ComplaintForm extends NavigationMixin(LightningElement) 
{
    @track api;
    objectApiName = CASE_OBJECT;
    


    handleWelcome(event)
    {
        this[NavigationMixin.Navigate]
        ({
           type: 'standard__component',
           attributes: 
           {
               componentName:'c__navigation10'
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
