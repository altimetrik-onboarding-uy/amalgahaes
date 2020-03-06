import { LightningElement, track } from 'lwc';

export default class MarkdownEditor extends LightningElement {
    //Track body is to update the body in real time
    @track body;

    handleBodyChange(event) {
        this.body = event.target.value;
    }
}