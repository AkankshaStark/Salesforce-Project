import { LightningElement } from 'lwc';
import welcomebg from '@salesforce/resourceUrl/welcomebg';
export default class StaticResourceLWCExample extends LightningElement 
{
    welcome = welcomebg;
}