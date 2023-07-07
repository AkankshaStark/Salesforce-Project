import { LightningElement } from 'lwc';
import bangalore from '@salesforce/resourceUrl/bangalore';
import ensenada from '@salesforce/resourceUrl/ensenada';
import monterrey from '@salesforce/resourceUrl/monterrey';

export default class OurLocations extends LightningElement 
{
    bangalore = bangalore;
    ensenada = ensenada;
    monterrey = monterrey;
}