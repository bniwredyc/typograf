// https://github.com/samdark/Typograph/blob/master/tests/_test.typo-quotes.dat

var helpers = require('./lib/helpers');
var ruTests = [
    [
        'рассказы "Сердце", "Эвакуация" и "Майский жук".',
        'рассказы «Сердце», «Эвакуация» и\u00A0«Майский жук».'
    ],
    [
        'абырвалг: "АААААААБ ЫЫЫРРР "ээээ" алг!" фывфыв',
        'абырвалг: «АААААААБ ЫЫЫРРР „ээээ“\u00A0алг!» фывфыв'
    ],
    [
        '"word "word" word"',
        '«word „word“ word»'
    ],
    [
        '("слово")',
        '(«слово»)'
    ],
    /*[
        'asd"test"asd',
        'asd «test» asd'
    ],*/
    [
        '"Скрыть в меню и карте сайта";',
        '«Скрыть в\u00A0меню и\u00A0карте сайта»;'
    ],
    [
        'Не конвертируются &quot;quot&quot; кавычки в елочки, а должны.',
        'Не\u00A0конвертируются «quot» кавычки в\u00A0елочки, а\u00A0должны.'
    ],
    [
        'Не конвертируются «всякие« кавычки в елочки, а должны.',
        'Не\u00A0конвертируются «всякие» кавычки в\u00A0елочки, а\u00A0должны.'
    ],
    [
        '««кавычки»»',
        '«„кавычки“»'
    ],
    [
        '"слово "слово"!"',
        '«слово „слово“!»'
    ],
    [
        '<b>"слово"</b> <b>"слово"</b>',
        '<b>«слово»</b> <b>«слово»</b>'
    ],
    [
        '"всё"',
        '«всё»'
    ]
];

helpers.ruTests('typograph quotes', ruTests);
helpers.ruDoubleTests('typograph quotes, double execute', ruTests);