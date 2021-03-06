(function() {

    const classNames = [
        'typograf-oa-lquote',
        'typograf-oa-n-lquote',
        'typograf-oa-sp-lquote'
    ];
    const name = 'ru/optalign/quote';

    Typograf.addRule({
        name,
        handler(text) {
            const quote = this.getSetting('common/punctuation/quote', 'ru');
            const lquotes = '([' + quote.left[0] + (quote.left[1] || '') + '])';
            const reNewLine = new RegExp('(^|\n\n|' + Typograf._privateLabel + ')(' + lquotes + ')', 'g');
            const reInside = new RegExp('([^\n' + Typograf._privateLabel + '])([ \u00A0\n])(' + lquotes + ')', 'gi');

            return text
                .replace(reNewLine, '$1<span class="typograf-oa-n-lquote">$2</span>')
                .replace(reInside, '$1<span class="typograf-oa-sp-lquote">$2</span><span class="typograf-oa-lquote">$3</span>');
        },
        disabled: true,
        htmlAttrs: false
    }).addInnerRule({
        name,
        queue: 'start',
        handler(text) {
            return Typograf._removeOptAlignTags(text, classNames);
        }
    }).addInnerRule({
        name,
        queue: 'end',
        handler(text) {
            return Typograf._removeOptAlignTagsFromTitle(text, classNames);
        }
    });

})();
