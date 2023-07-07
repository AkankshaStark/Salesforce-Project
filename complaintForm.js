import { LightningElement, track } from 'lwc';
import CASE_OBJECT from '@salesforce/schema/Case';


export default class ComplaintForm extends LightningElement
{
    objectApiName = CASE_OBJECT;


    
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
