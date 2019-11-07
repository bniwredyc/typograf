import { typografRuleTest } from '../../../../test/helpers';

typografRuleTest([
    'common/nbsp/afterNumber', [
        [
            ' 123 дня ',
            ' 123\u00A0дня '
        ],
        [
            '2 кошки',
            '2\u00A0кошки'
        ],
        [
            '12 миллиардов рублей',
            '12\u00A0миллиардов рублей'
        ],
        [
            '20 years',
            '20\u00A0years'
        ],
        [
            'Кукурузные палочки Кузя Лакомкин 85 г',
            'Кукурузные палочки Кузя Лакомкин 85\u00A0г'
        ]
    ],
    {locale: ['ru', 'en-US']}
]);
