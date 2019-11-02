Typograf.addRule({
    name: 'common/space/trimLeft',
    index: '-4',
    handler: String.prototype.trimLeft ?
        (text) => text.trimLeft() :
        /* istanbul ignore next */
        (text) => text.replace(/^[\s\uFEFF\xA0]+/g, '')
});
