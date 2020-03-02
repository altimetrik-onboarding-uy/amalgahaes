import { LightningElement, track } from 'lwc';
export default class MyComponentName extends LightningElement {
    @track richtext = "<h2>WRITE HERE</h2>";

    handleChange(e) {
        this.richtext = e.detail.value;
    }
}