var assert = require('assert');

const dom = new JSDOM('<body><div id="root"></div></body>');
const document = dom.window.document;
global.document = document;

describe('DOM', function () {
    it('should mount component to DOM node', function () {
        let root = document.getElementById("root"),
            appElement = document.createElement("div");

        root.appendElement(appElement);

        assert.ok(root.children[0].isEqualNode(appElement));
    });
});