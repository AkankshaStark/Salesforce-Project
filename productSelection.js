import { LightningElement,api,track,wire} from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getItems from '@salesforce/apex/ItemSelection.getItems';
import showItems from '@salesforce/apex/ItemSelection.showItems';

const columns = [
  { label: 'Item Name', fieldName : 'Name'} ,
    { label: 'Price', fieldName : 'Price__c' },
]
export default class ProductSelection extends NavigationMixin(LightningElement) 
{
    @track value;
    @track Options = [];
    @track cardVisible = false;
    @track data = [];
    @track columns = columns;

    connectedCallback()
    {
      getItems().then( result=> {
        let arr=[];
        for(var i=0; i<result.length ; i++){
          arr.push({label : result[i].Name , value: result[i].Id})
        }
        this.Options = arr;
      })
    }
      handleChange(event)
      {
        this.cardVisible = true;
        this.value = event.detail.value;
        showItems({ selectedItemId : this.value})
        .then( result=> {
          this.data = result;
        })
      }

      handleBuyDetails(event)
      {
        this[NavigationMixin.Navigate]
      ({
         type: 'standard__component',
         attributes: 
         {
             componentName:'c__navigation9'
         },
     });
        
      }
    }


