import { LightningElement,api,track,wire} from 'lwc';
import getContainers from '@salesforce/apex/containerSelection.getContainers';
import showContainers from '@salesforce/apex/containerSelection.showContainers';

const columns = [
  { label: 'container Name', fieldName : 'Name'} ,
    { label: 'Size', fieldName : 'Size__c' },
    { label: 'Weight', fieldName : 'Weight__c'},
    { label: 'Made of', fieldName : 'Made_of__c'}
]
export default class containerSelection extends LightningElement
{
    @track value;
    @track Options = [];
    @track cardVisible = false;
    @track data = [];
    @track columns = columns;

    connectedCallback()
    {
      getContainers().then( result=> {
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
        showContainers({ selectedItemId : this.value})
        .then( result=> {
          this.data = result;
        })
      }
    }