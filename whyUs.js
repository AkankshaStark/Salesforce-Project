import { LightningElement } from 'lwc';
import pay from '@salesforce/resourceUrl/pay';
import options from '@salesforce/resourceUrl/options';
import offers from '@salesforce/resourceUrl/offers';
import delivery from '@salesforce/resourceUrl/delivery';

export default class WhyUs extends LightningElement 
{
    pay = pay;
    options = options;
    offers = offers;
    delivery = delivery;
}