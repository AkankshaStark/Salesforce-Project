import { LightningElement,api,track,wire} from 'lwc'
import getItems from '@salesforce/apex/ItemSelection.getItems';
import showItems from '@salesforce/apex/ItemSelection.showItems';

const columns = [
  { label: 'Item Name', fieldName : 'Name'} ,
  {label: 'category', fieldName : 'Category__c' },
    { label: 'Price', fieldName : 'Price__c' },
    { label: 'VAT', fieldName : 'VAT__c'},
    { label: 'Total', fieldName : 'Total__c'},
    { label: 'SKU', fieldName : 'SKU__c'},
    { label: 'Image', fieldName : 'Image__c' }
]
export default class itemSelection extends LightningElement
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
          arr.push({label : result[i].Category__c , value: result[i].Id})
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

      
    }


