import { LightningElement, track } from 'lwc';

export default class MarkdownEditor extends LightningElement {
    //track decorator to the imports at the top of the file.
    @track body;
    //create the event to handle the body property to update in real time.
    //handleBodyChange make sure the property is updated when the value is changed in the UI
    handleBodyChange(event) {
        this.body = event.target.value;
    }
}