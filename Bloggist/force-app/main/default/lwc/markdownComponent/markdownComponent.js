import { LightningElement,track } from 'lwc';

export default class MarkdownComponent extends LightningElement {

    @track body;

    handleBodyChange(event) {
        this.body = event.target.value;
    }


}