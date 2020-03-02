import { LightningElement, track } from 'lwc';
export default class MyComponentName extends LightningElement {
    @track richtext = "<h2>Default <s>Value</s></h2>";

    handleChange(e) {
        this.richtext = e.detail.value;
    }
}