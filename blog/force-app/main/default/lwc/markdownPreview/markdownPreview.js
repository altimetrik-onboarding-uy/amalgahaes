import { LightningElement, api } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import MARKED_JS from '@salesforce/resourceUrl/marked';

export default class MarkdownPreview extends LightningElement {
    isRendered = false;
    @api body = '';

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