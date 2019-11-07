import { typografRuleTest } from '../../../../test/helpers';

typografRuleTest([
    'common/punctuation/quote', [
        [
            'Вот у вас "Мой спутник" – это не сочинение, это хорошо, потому что не выдумано.',
            'Вот у вас «Мой спутник» – это не сочинение, это хорошо, потому что не выдумано.'
        ],
        [
            '««Цыганы» мои не продаются вовсе»',
            '«„Цыганы“ мои не продаются вовсе»'
        ],
        [
            '"Пример"',
            '«Пример»'
        ],
        [
            'ОАО "Пример"',
            'ОАО «Пример»'
        ],
        [
            'В "самом "добром" кино" Мамы. В "самом "добром" кино" Мамы',
            'В «самом „добром“ кино» Мамы. В «самом „добром“ кино» Мамы'
        ],
        [
            'В самом добром кино “Мамы”, в молодежном триллере “Закрытая школа” на СТС. А еще на сцене театра им. Вл. Маяковского в спектакле “Не все коту масленица”.',
            'В самом добром кино «Мамы», в молодежном триллере «Закрытая школа» на СТС. А еще на сцене театра им. Вл. Маяковского в спектакле «Не все коту масленица».'
        ],
        [
            'В самом добром кино “Мамы”, в молодежном триллере “Закрытая школа” на СТС',
            'В самом добром кино «Мамы», в молодежном триллере «Закрытая школа» на СТС'
        ],
        [
            'В самом добром кино “Мамы, в молодежном триллере “Закрытая школа” на СТС"',
            'В самом добром кино «Мамы, в молодежном триллере „Закрытая школа“ на СТС»'
        ],
        [
            'Печорин писал: "Я не помню утра более голубого и свежего!"',
            'Печорин писал: «Я не помню утра более голубого и свежего!»'
        ],
        [
            'Печорин признавался: "Я иногда себя презираю..."',
            'Печорин признавался: «Я иногда себя презираю...»'
        ],
        [
            'Печорин спрашивает: "И зачем было судьбе кинуть меня в мирный круг честных контрабандистов?"',
            'Печорин спрашивает: «И зачем было судьбе кинуть меня в мирный круг честных контрабандистов?»'
        ],
        [
            'Печорин размышляет: "…зачем было судьбе кинуть меня в мирный круг честных контрабандистов? Как камень, брошенный в гладкий источник, я встревожил их спокойствие..."',
            'Печорин размышляет: «…зачем было судьбе кинуть меня в мирный круг честных контрабандистов? Как камень, брошенный в гладкий источник, я встревожил их спокойствие...»'
        ],
        [
            'Печорин размышляет: "…зачем было судьбе кинуть меня в мирный круг честных контрабандистов? Как камень, брошенный в гладкий источник, я встревожил их спокойствие…"',
            'Печорин размышляет: «…зачем было судьбе кинуть меня в мирный круг честных контрабандистов? Как камень, брошенный в гладкий источник, я встревожил их спокойствие…»'
        ],
        [
            'Печорин размышляет: "…зачем было судьбе кинуть меня в мирный круг честных контрабандистов? Как камень, брошенный в гладкий источник, я встревожил их спокойствие…"\n\n',
            'Печорин размышляет: «…зачем было судьбе кинуть меня в мирный круг честных контрабандистов? Как камень, брошенный в гладкий источник, я встревожил их спокойствие…»\n\n'
        ],
        [
            'Печорин размышляет: "…зачем было судьбе кинуть меня в мирный круг честных контрабандистов? Как камень, брошенный в гладкий источник, я встревожил их спокойствие…"\n\nПечорин...',
            'Печорин размышляет: «…зачем было судьбе кинуть меня в мирный круг честных контрабандистов? Как камень, брошенный в гладкий источник, я встревожил их спокойствие…»\n\nПечорин...'
        ],
        [
            'Лермонтов восклицает в предисловии, что это "старая и жалкая шутка!"',
            'Лермонтов восклицает в предисловии, что это «старая и жалкая шутка!»'
        ],
        [
            '"Лермонтов восклицает в "предисловии", что это "старая и жалкая шутка!""',
            '«Лермонтов восклицает в „предисловии“, что это „старая и жалкая шутка!“»'
        ],
        [
            '"Лермонтов восклицает в "предисловии", что это "старая и жалкая шутка!"" "Лермонтов восклицает в "предисловии", что это "старая и жалкая шутка!""',
            '«Лермонтов восклицает в „предисловии“, что это „старая и жалкая шутка!“» «Лермонтов восклицает в „предисловии“, что это „старая и жалкая шутка!“»'
        ],
        [
            '"Лермонтов восклицает в предисловии, что это "старая и жалкая шутка!"" "Лермонтов восклицает в предисловии, что это "старая и жалкая шутка!""',
            '«Лермонтов восклицает в предисловии, что это „старая и жалкая шутка!“» «Лермонтов восклицает в предисловии, что это „старая и жалкая шутка!“»'
        ],
        [
            '"Лермонтов восклицает в предисловии, что это "старая и жалкая шутка!"" "Лермонтов восклицает в предисловии, что это "старая и жалкая шутка!"" "Лермонтов восклицает в предисловии, что это "старая и жалкая шутка!""',
            '«Лермонтов восклицает в предисловии, что это „старая и жалкая шутка!“» «Лермонтов восклицает в предисловии, что это „старая и жалкая шутка!“» «Лермонтов восклицает в предисловии, что это „старая и жалкая шутка!“»'
        ],
        [
            '<p>"Энергия соблазна: "от внутреннего" к внешнему".</p>        <p>"Энергия соблазна: "от внутреннего" к внешнему".</p>',
            '<p>«Энергия соблазна: „от внутреннего“ к внешнему».</p>        <p>«Энергия соблазна: „от внутреннего“ к внешнему».</p>'
        ],
        [
            '<p>"Энергия\nсоблазна: "от\nвнутреннего" к\nвнешнему".</p>        <p>"Энергия\nсоблазна: "от\nвнутреннего" к\nвнешнему".</p>',
            '<p>«Энергия\nсоблазна: „от\nвнутреннего“ к\nвнешнему».</p>        <p>«Энергия\nсоблазна: „от\nвнутреннего“ к\nвнешнему».</p>'
        ],
        [
            '"Полотенцесушители из нержавеющей стали"\n\nПолотенцесушитель из черного металла, сделанные из нержавеющей стали, очень хорошо подходят к использованию в наших условиях. Снаружи они могут иметь полированную, матовую, или даже окрашенную поверхность. Модели с окрашенной поверхностью обычно стоят меньше других. Еще один плюс окрашенных полотенцесушителей — возможность разместить их в любом интерьере благодаря широкой цветовой гамме.',
            '«Полотенцесушители из нержавеющей стали»\n\nПолотенцесушитель из черного металла, сделанные из нержавеющей стали, очень хорошо подходят к использованию в наших условиях. Снаружи они могут иметь полированную, матовую, или даже окрашенную поверхность. Модели с окрашенной поверхностью обычно стоят меньше других. Еще один плюс окрашенных полотенцесушителей — возможность разместить их в любом интерьере благодаря широкой цветовой гамме.'
        ],
        [
            '<i>"Энергия соблазна".</i>',
            '<i>«Энергия соблазна».</i>'
        ],
        [
            '<i>"Энергия соблазна".</i> <i>"Энергия соблазна".</i>',
            '<i>«Энергия соблазна».</i> <i>«Энергия соблазна».</i>'
        ],
        [
            '"<i>Энергия соблазна</i>".',
            '«<i>Энергия соблазна</i>».'
        ],
        [
            '"<i>Энергия соблазна</i>". "<i>Энергия соблазна</i>".',
            '«<i>Энергия соблазна</i>». «<i>Энергия соблазна</i>».'
        ],
        [
            '"<i>Энергия соблазна"</i>.',
            '«<i>Энергия соблазна»</i>.'
        ],
        [
            '"<i>Энергия соблазна"</i>. "<i>Энергия соблазна"</i>.',
            '«<i>Энергия соблазна»</i>. «<i>Энергия соблазна»</i>.'
        ],
        [
            '"<i>Екатеринбург лучше Стамбула, однозначно, а\u00A0люди здесь добрее, чем в\u00A0Москве и\u00A0Питере"</i>, \u00A0- рассказывает он\u00A0со\u00A0знанием дела: во\u00A0время подготовки книги об\u00A0уральской столице Аслиддин прожил по\u00A0две недели и\u00A0в\u00A0Белокаменной, и\u00A0в\u00A0Северной Пальмире. \u00A0"<i>Все оплачивают спонсоры\u00A0-; бизнесмены из\u00A0Таджикистана, которые заинтересовались моими работами. Они-то и\u00A0договаривались с\u00A0издательством"</i>, \u00A0-; объясняет\u00A0строитель-историк.\u00A0Из\u00A0пятисот отпечатанных экземпляров автору достанется 15. Все остальные пойдут на\u00A0магазинные прилавки и\u00A0в\u00A0Центральную библиотеку Таджикистана, а\u00A0также самим спонсорам. Размеры гонорара, который дойдет до\u00A0Аслиддина, не\u00A0позволят уволиться со\u00A0стройки. \u00A0<i>"Да я\u00A0рад уже тому, что мои книги свет увидели, их\u00A0читают, отзывы делают", \u00A0</i>- рассказывает писатель.',
            '«<i>Екатеринбург лучше Стамбула, однозначно, а\u00A0люди здесь добрее, чем в\u00A0Москве и\u00A0Питере»</i>, \u00A0- рассказывает он\u00A0со\u00A0знанием дела: во\u00A0время подготовки книги об\u00A0уральской столице Аслиддин прожил по\u00A0две недели и\u00A0в\u00A0Белокаменной, и\u00A0в\u00A0Северной Пальмире. \u00A0«<i>Все оплачивают спонсоры\u00A0-; бизнесмены из\u00A0Таджикистана, которые заинтересовались моими работами. Они-то и\u00A0договаривались с\u00A0издательством»</i>, \u00A0-; объясняет\u00A0строитель-историк.\u00A0Из\u00A0пятисот отпечатанных экземпляров автору достанется 15. Все остальные пойдут на\u00A0магазинные прилавки и\u00A0в\u00A0Центральную библиотеку Таджикистана, а\u00A0также самим спонсорам. Размеры гонорара, который дойдет до\u00A0Аслиддина, не\u00A0позволят уволиться со\u00A0стройки. \u00A0<i>«Да я\u00A0рад уже тому, что мои книги свет увидели, их\u00A0читают, отзывы делают», \u00A0</i>- рассказывает писатель.'
        ],
        [
            '"',
            '"'
        ],
        [
            '"Газета',
            '«Газета'
        ],
        [
            '" Газета',
            '" Газета'
        ],
        [
            '"Иннопром". "Иннопром". "Синий "мужчина" знак".',
            '«Иннопром». «Иннопром». «Синий „мужчина“ знак».'
        ],
        [
            'М. М. Бахтин писал: "Тришатов рассказывает подростку о своей любви к музыке и развивает перед ним замысел оперы: "Послушайте, любите вы музыку? Я ужасно люблю... Если бы я сочинял оперу, то, знаете, я бы взял сюжет из "Фауста". Я очень люблю эту тему"".',
            'М. М. Бахтин писал: «Тришатов рассказывает подростку о своей любви к музыке и развивает перед ним замысел оперы: „Послушайте, любите вы музыку? Я ужасно люблю... Если бы я сочинял оперу, то, знаете, я бы взял сюжет из ‚Фауста‘. Я очень люблю эту тему“».',
        ],
        [
            'по произведению Достоевского &quot;Преступление и наказание&quot;в театре Моссовета',
            'по произведению Достоевского «Преступление и наказание"в театре Моссовета',
            {
                enableRule: 'common/html/quot'
            }
        ],
        [
            'Из всей нашей культурной программы самое сильное впечатление на меня произвела постановка &quot;Р.Р.Р.&quot; по произведению Достоевского &quot;Преступление и наказание&quot;в театре Моссовета.' +
            'Она буквально влюбила меня в театр.\n&quot;Мы напихиваем в детей ненужное барахло&quot;. 5 радикальных тезисов Германа Грефа об образовании',

            'Из всей нашей культурной программы самое сильное впечатление на меня произвела постановка «Р.Р.Р.» по произведению Достоевского «Преступление и наказание"в театре Моссовета.' +
            'Она буквально влюбила меня в театр.\n«Мы напихиваем в детей ненужное барахло». 5 радикальных тезисов Германа Грефа об образовании',
            {
                enableRule: 'common/html/quot'
            }
        ],
        [
            'Из всей нашей культурной программы самое сильное впечатление на меня произвела постановка &quot;Р.Р.Р.&quot; по произведению Достоевского &quot;Преступление и наказание&quot;в театре Моссовета.' +
            'Она буквально влюбила меня в театр.\n&quot;Мы напихиваем в детей ненужное барахло&quot;. 5 радикальных тезисов Германа Грефа об образовании\n' +
            'Из всей нашей культурной программы самое сильное впечатление на меня произвела постановка &quot;Р.Р.Р.&quot; по произведению Достоевского &quot;Преступление и наказание&quot;в театре Моссовета.' +
            'Она буквально влюбила меня в театр.\n&quot;Мы напихиваем в детей ненужное барахло&quot;. 5 радикальных тезисов Германа Грефа об образовании',

            'Из всей нашей культурной программы самое сильное впечатление на меня произвела постановка «Р.Р.Р.» по произведению Достоевского «Преступление и наказание"в театре Моссовета.' +
            'Она буквально влюбила меня в театр.\n«Мы напихиваем в детей ненужное барахло». 5 радикальных тезисов Германа Грефа об образовании\n' +
            'Из всей нашей культурной программы самое сильное впечатление на меня произвела постановка «Р.Р.Р.» по произведению Достоевского «Преступление и наказание"в театре Моссовета.' +
            'Она буквально влюбила меня в театр.\n«Мы напихиваем в детей ненужное барахло». 5 радикальных тезисов Германа Грефа об образовании',
            {
                enableRule: 'common/html/quot'
            }
        ],
        [
            '<p>«Куда ты ведёшь нас?.. не видно ни зги! —</p>',
            '<p>«Куда ты ведёшь нас?.. не видно ни зги! —</p>'
        ],
        /*[
            '“ слово слово “слово” слово”',
            '«слово слово „слово“ слово»',
        ],*/
        [
            '<p>"Я всегда с гордостью носил военную форму...</p>\n\n<p>...Я переживал очень тяжёлую депрессию. "</p>',
            '<p>«Я всегда с гордостью носил военную форму...</p>\n\n<p>...Я переживал очень тяжёлую депрессию. »</p>'
        ],
        [
            'Движение перекроют из‑за матча на«ВЭБ Арене» 7 октября в Москве‍',
            'Движение перекроют из‑за матча на«ВЭБ Арене» 7 октября в Москве‍'
        ]
    ],
    {locale: 'ru'}
]);
