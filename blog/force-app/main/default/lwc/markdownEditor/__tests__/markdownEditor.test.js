import { createElement } from 'lwc';
import MarkdownEditor from 'c/markdownEditor';

global.marked = jest.fn();
const MARKDOWN_HEADING = '# Test Heading';

describe('c-markdown-editor', () => {

    beforeEach(() => {
        const element = createElement('c-markdown-editor', {
            is: MarkdownEditor
        });
        document.body.appendChild(element);
    });

    afterEach(() => {
        // The JSDOM instance is shared across test cases in a single file so 
        // reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays a preview when the textarea is changed', () => {
        const element = document.querySelector('c-markdown-editor');
        const textarea = element.shadowRoot.querySelector('textarea');
        textarea.value = MARKDOWN_HEADING;
        textarea.dispatchEvent(new CustomEvent('change'));
        
        return Promise.resolve().then(() => {
            const markdownPreview = element.shadowRoot.querySelector('c-markdown-preview');

            expect(markdownPreview.body).toBe(MARKDOWN_HEADING);
        });
    });

    it('displays a preview when typing in the textrea', () => {
        const element = document.querySelector('c-markdown-editor');
        const textarea = element.shadowRoot.querySelector('textarea');
        textarea.value = MARKDOWN_HEADING;
        textarea.dispatchEvent(new KeyboardEvent('keyup'));
        
        return Promise.resolve().then(() => {
            const markdownPreview = element.shadowRoot.querySelector('c-markdown-preview');

            expect(markdownPreview.body).toBe(MARKDOWN_HEADING);
        });
    });

});