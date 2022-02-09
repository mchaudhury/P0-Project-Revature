import { LightningElement } from 'lwc';

export default class Contact extends LightningElement {
    areDetailsVisible = false;

    handleClick(event) {
        console.log(event);
        this.areDetailsVisible = true;
    }
}
