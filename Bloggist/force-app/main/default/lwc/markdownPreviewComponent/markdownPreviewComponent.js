//Exposes properties or methods as part of the components API
import { LightningElement, api } from 'lwc';
//Loads third party libraries
import { loadScript } from 'lightning/platformResourceLoader';
//Reference to the markedjs library
import MARKED_JS from '@salesforce/resourceUrl/marked';

export default class MarkdownPreviewComponent extends LightningElement {
    //To ensure we call third party library onces
    isRendered = false;
    _body = '';

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

    //Ensure the DOM has loaded and is ready to be manipulated
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



 