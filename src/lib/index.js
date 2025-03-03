// place files you want to import through the `$lib` alias in this folder.

const questions = [
	{
		img: '',
		msg: 'Что такое фарватер?',
		a: 'Безопасный в навигационном отношении проход по водному пространству, обозначенный на местности и карте.',
		b: 'Условная линия, проходящая посередине судового хода.',
		c: 'Условная линия, ограничивающая судовой ход по ширине.',
		d: 'Рукав реки, по которому идёт судовой ход.',
		right: 'a',
		help: 'Фарва́тер (нидерл. vaarwater, от varen — «плыть» и water — «вода») — судовой ход, безопасный в навигационном отношении и обозначенный на местности и/или карте проход по водному пространству (реке, озеру, морю, проливу, фьорду, океану и прочему), характеризующийся достаточными глубинами и отсутствием препятствий для судоходства, например, затопленных судов, рифов и мин.'
	},
	{
		img: '01-02.png',
		msg: 'Какой знак указывает место, в котором фарватер переходит от одного берега к другому, и обозначает также ось этого перевала на левом берегу?',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'a',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Сколько существует районов глобальной морской системы связи при бедствии (ГМССБ или GMDSS)?',
		a: '3',
		b: '4',
		c: '5',
		d: '6',
		right: 'b',
		help: 'XXX'
	},
	{
		img: '01-04.png',
		msg: 'Какой знак обязывает подать продолжительный звуковой сигнал?',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'c',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Перечислите четыре румба, производных от основных?',
		a: 'Север, восток, юг, запад',
		b: 'Северо-запад, северо-восток, юго-восток, юго-запад',
		c: 'Север, северо-восток, юг, юго-запад',
		d: 'Север, северо-запад, юг, юго-восток',
		right: 'b',
		help: 'XXX'
	},
	{
		img: '01-06.png',
		msg: 'Укажите бермудский кэт:',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'd',
		help: 'XXX'
	},
	{
		img: '01-07.png',
		msg: 'Какой знак запрещает обгон, касающийся только составов?',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'b',
		help: 'XXX'
	},
	{
		img: '01-08.png',
		msg: 'Какая дополнительная систализация судов органов контроля и пожарных и спасательных судов?',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'b',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Какой из перечисленных ветров относится к постоянным глобальным ветрам?',
		a: 'Пассат',
		b: 'Муссон',
		c: 'Бриз',
		d: 'Катабатический ветер',
		right: 'a',
		help: 'XXX'
	},
	{
		img: '01-10.png',
		msg: 'Какие навигационные огни должно нести парусное судно ночью, если оно использует одновременно паруса и свою силовую установку?',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'a',
		help: 'XXX'
	},
	{
		img: '02-01.png',
		msg: 'Какой знак обозначает «Общее запрещение плавания на спортивных или прогулочных судах»?',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'a',
		help: 'XXX'
	},
	{
		img: '02-02.png',
		msg: 'Как обозначается судно, идущее под парусом я одновременно использующее свою силовую установку?',
		a: 'а и г',
		b: 'б и г',
		c: 'в и г',
		d: 'г',
		right: 'a',
		help: 'XXX'
	},
	{
		img: '02-03.png',
		msg: 'Какой знак запрещает стоянку на расстоянии 1000 метров?',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'b',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Чему равна длина судна 33 фута в метрах?',
		a: '≈5',
		b: '≈10',
		c: '≈20',
		d: '≈30',
		right: 'b',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Как обозначается сигнал «Держитесь в стороне от меня»?',
		a: 'Состоит из постоянно повторяемых коротких звуков, сопровождаемых световыми белыми, ясными и видимыми со всех сторон, синхронизированными с ними сигналами',
		b: 'Состоит из постоянно повторяемых одного короткого и одного длинного звуков, сопровождаемых световыми желтыми, ясными и видимыми со всех сторон, синхронизированными с ними сигналами',
		c: 'Состоит из постоянно повторяемых коротких и длинных звуков, сопровождаемых световыми белыми, ясными и видимыми со всех сторон, синхронизированными с ними сигналами',
		d: 'Состоит из постоянно повторяемых длинных звуков, сопровождаемых световыми белыми, ясными и видимыми с о всех сторон, синхронизированными с ними сигналами',
		right: 'b',
		help: 'XXX'
	},
	{
		img: '02-06.png',
		msg: 'Укажите гафельный тендер:',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'c',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Какие признаки говорят о скором ухудшении погоды при приближении циклона?',
		a: 'Плавное падение давления',
		b: 'Волнообразное изменение давления',
		c: 'Резкое падение давления',
		d: 'Повышение давления',
		right: 'c',
		help: 'XXX'
	},
	{
		img: '02-08.png',
		msg: 'Какой знак обозначает развилку фарватера?',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'a',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Какое из двух парусных судов, идущих разными галсами, имеет право прохода?',
		a: 'Идущее правым галсом',
		b: 'Идущее левым галсом',
		c: 'Идущее с подветра',
		d: 'Идущее выше по ветру',
		right: 'a',
		help: 'XXX'
	},
	{
		img: '02-10.png',
		msg: 'Как обозначается кардинальный знак «Запад»?',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'd',
		help: 'XXX'
	},
	{
		img: '03-01.png',
		msg: 'Какой знак обозначает «Обязанность выйти на радиотелефонную связь»?',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'c',
		help: 'XXX'
	},
	{
		img: '03-02.png',
		msg: 'Как обозначаются суда, на которых разрешается перевозить более 12 пассажиров и длина корпуса которых составляет менее 20 метров?',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'd',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Что такое «Плаванье дрейфом»?',
		a: 'Перемещение судна под действием ветра, волны или течения, без использования движителя',
		b: 'Перемещение судна по инерции после отключения движителя',
		c: 'Перемещение судна стоящего на якоре',
		d: 'Перемещение судна ошвартованного к другому судну',
		right: 'a',
		help: 'XXX'
	},
	{
		img: '03-04.png',
		msg: 'Какой знак обозначает правую сторону фарватера?',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'c',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Чему равна скорость судна 15 узлов в км/ч?',
		a: '≈12',
		b: '≈21',
		c: '≈28',
		d: '≈32',
		right: 'c',
		help: 'XXX'
	},
	{
		img: '03-06.png',
		msg: 'Укажите бермудский шлюп:',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'c',
		help: 'XXX'
	},
	{
		img: '03-07.png',
		msg: 'Укажите узел «восьмёрка»:',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'b',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Что такое автономность судна?',
		a: 'Способность судна выдерживать волновую и ветровую нагрузку',
		b: 'Вместимость топливных баков судна',
		c: 'Способность судна нести на борту большое количество команды и пассажиров',
		d: 'Способность осуществлять плавание без захода в порты',
		right: 'd',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Какое из двух парусных судов, идущих одним галсом, имеет право прохода?',
		a: 'Идущее правым галсом',
		b: 'Идущее левым галсом',
		c: 'Идущее с подветра',
		d: 'Идущее выше по ветру',
		right: 'c',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Какая часть тропического циклона наиболее опасна для судохолетва?',
		a: 'Левая задняя четверть по ходу движения циклона в северном полушарии',
		b: 'Правая передняя четверть по ходу движения циклона в Южном полушарии',
		c: 'Левая задняя четверть по ходу движения циклона в южном подушарим',
		d: 'Правая передняя четверть по ходу движения циклона в северном полушарии',
		right: 'd',
		help: 'XXX'
	},
	{
		img: '04-01.png',
		msg: 'Какой знак обозначает «Фарватер удалён от правого берега на 40м»?',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'c',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Как называется стальные, вдоль всего борта тросовые ограждения, предохраняющие людей от падения за борт?',
		a: 'Тросовые ограждения',
		b: 'Леера',
		c: 'Фальшборта',
		d: 'Ватервейсы',
		right: 'b',
		help: 'XXX'
	},
	{
		img: '04-03.png',
		msg: 'Как обозначается парусное судно длиной менее 7 м?',
		a: 'а и в',
		b: 'б и г',
		c: 'в и г',
		d: 'г и а',
		right: 'b',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Что обязан предпринять судоводитель при приближении к местам отстоя судов около шлюзов?',
		a: 'Увеличить скорость судна',
		b: 'Ничего не предпринимать',
		c: 'Замедлить ход судна',
		d: 'Развернуть судно',
		right: 'c',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Как называются передний и задний паруса при вооружении яхты «бермудский шлюп»?',
		a: 'Кливер и бизань соответственно',
		b: 'Фок и стаксель соответственно',
		c: 'Грот и стаксель соответственно',
		d: 'Стаксель и грот соответственно',
		right: 'd',
		help: 'XXX'
	},
	{
		img: '04-06.png',
		msg: 'Какая используется дополнительная сигнализация судов, ограниченных в возможности маневрировать?',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'b',
		help: 'XXX'
	},
	{
		img: '04-07.png',
		msg: 'Укажите прямой узел:',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'd',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Какой из типов атмосферных фронтов несёт наибольшее количество осадков и шквалистые усиления ветра?',
		a: 'Теплый',
		b: 'Холодный',
		c: 'Окклюдированный',
		d: 'Смешанный',
		right: 'b',
		help: 'XXX'
	},
	{
		img: '',
		msg: 'Какой канал связи на морской радиостанции служит для приема и передачи цифрового избирательного вызова?',
		a: '72',
		b: '70',
		c: '16',
		d: '11',
		right: 'b',
		help: 'XXX'
	},
	{
		img: '04-10.png',
		msg: 'Какой знак указывает место, на котором фарватер переходит от одного берега к другому, и обозначает также ось этого перевала на правом берегу?',
		a: 'а',
		b: 'б',
		c: 'в',
		d: 'г',
		right: 'c',
		help: 'XXX'
	}
];

export default { questions };
