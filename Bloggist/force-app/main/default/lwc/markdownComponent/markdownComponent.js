import { LightningElement,track } from 'lwc';

export default class markdownComponent extends LightningElement {

    @track body;

    handleBodyChange(event) {
        this.body = event.target.value;
    }


}