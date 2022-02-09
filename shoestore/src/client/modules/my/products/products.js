import { LightningElement } from 'lwc';

export default class Products extends LightningElement {
    areDetailsVisible = false;

    handleClick(event) {
        console.log(event);
        this.areDetailsVisible = true;
    }
}
