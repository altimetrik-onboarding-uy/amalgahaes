import { LightningElement, track } from 'lwc';

export default class MarkdownEditor extends LightningElement {
    @track body;


    @track richtext = "<h2>Default <s>Value</s></h2>";//

    handleBodyChange(event) {
        this.body = event.target.value;
    }


    handleChange(e) {//
        this.richtext = e.detail.value;
    }
}