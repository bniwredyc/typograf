import { typografRuleTest } from '../../../../test/helpers';

typografRuleTest(['ru/nbsp/abbr', [
    ['т.д.', 'т.\u00A0д.'],
    ['т.п.', 'т.\u00A0п.'],
    ['т.е.', 'т.\u00A0е.'],
    ['т.к.', 'т.\u00A0к.'],
    ['т.н.', 'т.\u00A0н.'],
    ['т.о.', 'т.\u00A0о.'],
    ['т.с.', 'т.\u00A0с.'],
    ['ст.л.', 'ст.\u00A0л.'],
    ['ч.л.', 'ч.\u00A0л.'],
    ['н.ст.', 'н.\u00A0ст.'],
    ['ст.ст.', 'ст.\u00A0ст.'],
    ['н.э.', 'н.\u00A0э.'],
    ['ж.д.', 'ж.\u00A0д.'],
    ['с.х.', 'с.\u00A0х.'],
    ['ед.ч.', 'ед.\u00A0ч.'],
    ['мн.ч.', 'мн.\u00A0ч.'],
    ['с.ш.', 'с.\u00A0ш.'],
    ['ю.ш.', 'ю.\u00A0ш.'],
    ['в.д.', 'в.\u00A0д.'],
    ['з.д.', 'з.\u00A0д.'],
    ['з. д.', 'з.\u00A0д.'],
    ['рт.ст.', 'рт.\u00A0ст.'],
    ['рос.руб.', 'рос.\u00A0руб.'],
    ['рос.р.', 'рос.\u00A0р.'],
    ['ф.ст.', 'ф.\u00A0ст.'],
    ['а.е.м.', 'а.\u00A0е.\u00A0м.'],
    ['а. е.м.', 'а.\u00A0е.\u00A0м.'],
    ['а. е. м.', 'а.\u00A0е.\u00A0м.'],
    ['ст.м.эл. цеха', 'ст.\u00A0м.\u00A0эл. цеха'],
    ['ст.м. эл. цеха', 'ст.\u00A0м.\u00A0эл. цеха'],
    ['ст. м. эл. цеха', 'ст.\u00A0м.\u00A0эл. цеха'],
    ['дд.мм.гггг', 'дд.мм.гггг'],
    ['   дд.мм.гггг   \n   дд.мм.гггг   ', '   дд.мм.гггг   \n   дд.мм.гггг   '],
    ['ДД.ММ.ГГГГ', 'ДД.ММ.ГГГГ'],
    [
        'Редакторы, составители, переводчики и т.д., и т.п.',
        'Редакторы, составители, переводчики и т. д., и т. п.'
    ],
    [
        'Ищи на кто.рф. Или на кто.ру. Или кто.рус. Или кто.орг. Или кто.укр. Или кто.бг. Или кто.срб.',
        'Ищи на кто.рф. Или на кто.ру. Или кто.рус. Или кто.орг. Или кто.укр. Или кто.бг. Или кто.срб.'
    ],
    ['Петров И.И.', 'Петров И.И.'],
    ['стат.погр.', 'стат.погр.'],
    ['Яндекс.Браузер v.1.0', 'Яндекс.Браузер v.1.0']
]]);
