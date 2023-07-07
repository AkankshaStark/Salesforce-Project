import { LightningElement,api,track,wire} from 'lwc';
import getProducts from '@salesforce/apex/ProductSelection.getProducts';
import showProducts from '@salesforce/apex/ProductSelection.showProducts';

const columns = [
    { label: 'Item Name', fieldName : 'Name'} ,
    { label: 'Price', fieldName : 'Product_Price__c' },
    { label: 'VAT', fieldName : 'VAT__c'},
    { label: 'Total', fieldName : 'Total__c'},
    { label: 'SKU', fieldName : 'StockKeepingUnit'}
]
export default class product2Selection extends LightningElement
{
    @track value;
    @track Options = [];
    @track cardVisible = false;
    @track data = [];
    @track columns = columns;

    connectedCallback()
    {
      getProducts().then( result=> {
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
        showProducts({ selectedItemId : this.value})
        .then( result=> {
          this.data = result;
        })
      }
    }