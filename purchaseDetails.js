import { LightningElement } from 'lwc';
import meta from '@salesforce/resourceUrl/meta';
import apple from '@salesforce/resourceUrl/apple';
import amazon from '@salesforce/resourceUrl/amazon';
import netflix from '@salesforce/resourceUrl/netflix';
import google from '@salesforce/resourceUrl/google';

export default class PurchaseDetails extends LightningElement 
{
    meta = meta;
    apple = apple;
    amazon = amazon;
    netflix = netflix;
    google = google;

}