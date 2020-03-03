import { LightningElement, api } from 'lwc';//similar to the track decorate
import { loadScript } from 'lightning/platformResourceLoader';//function that loads third party libraries
import MARKED_JS from '@salesforce/resourceUrl/marked';//reference to staticresource marked that i upload in salesforce

export default class MarkdownPreview extends LightningElement {
    isRendered = false;
    _body = '';
    //The body set y get is caller everytime the body changes not only once 
    @api
    get body() {
        return this._body;
    }
    set body(value) {
        this._body = value;

        if (this.isRendered) {
            this.renderMarkdown();
        }
    }
    //here we call the markdown library that will be in container div
    renderedCallback() {
        if (this.isRendered) {
            return;
        }

        this.isRendered = true;

        loadScript(this, MARKED_JS)
            .then(() => {
                this.renderMarkdown();
            });
    }

    renderMarkdown() {
        this.template.querySelector('div').innerHTML = marked(this.body);
    }
}