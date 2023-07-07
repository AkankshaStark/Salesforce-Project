import { LightningElement , track, api, wire} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getAccountName from '@salesforce/apex/EmailVerification.getAccountName';

const columns = [
    { label: 'Account Name', fieldName : 'Name'} ,
      { label: 'Password', fieldName : 'Password__c' }
  ]

export default class EmailLogin extends NavigationMixin(LightningElement) 
{
    @track value;
    @track accname = [];
    @track data = [];
    @track columns = columns;

    connectedCallback()
    {
      getAccountName().then( result=> {
        let arr=[];
        for(var i=0; i<result.length ; i++){
          arr.push({label : result[i].Name , value: result[i].Id})
        }
        this.accname = arr;
      })
    }

    handleChange(event)
      {
        this.value = event.detail.value;
        showItems({ selectedItemId : this.value})
        .then( result=> {
          this.data = result;
        })
      }
 
    handleLogin(event)
    {
        this[NavigationMixin.Navigate]
        ({
           type: 'standard__component',
           attributes: 
           {
               componentName:'c__navigation7'
           },
       });
    }
}