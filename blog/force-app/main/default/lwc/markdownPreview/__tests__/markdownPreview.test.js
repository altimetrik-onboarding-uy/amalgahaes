import { createElement } from 'lwc';
import MarkdownPreview from 'c/markdownPreview';

const MARKDOWN_HEADING = '# Test Heading';
const HTML_HEADING = '<h1>Test Heading</h1>';

global.marked = jest.fn(() => HTML_HEADING);

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

describe('c-markdown-preview', () => {

    it('renders markdown when body is set', () => {
        const element = createElement('c-markdown-preview', {
            is: MarkdownPreview
        });
        document.body.appendChild(element);

        element.body = MARKDOWN_HEADING;

        return flushPromises().then(() => {
            const div = element.shadowRoot.querySelector('div');

            expect(global.marked).toHaveBeenCalledWith(MARKDOWN_HEADING);
            expect(div.innerHTML).toBe(HTML_HEADING);
        });
    });

});