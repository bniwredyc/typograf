Typograf.addRule({
    name: 'common/space/delTrailingBlanks',
    index: '-3',
    handler(text) {
        return text.replace(/[ \t]+\n/g, '\n');
    }
});
