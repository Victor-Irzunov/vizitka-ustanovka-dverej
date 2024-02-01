const dataPrice = [
	{ work: 'Установка одинарной двери без доборных элементов (Эмаль)', price: '80 (95)' },
	{ work: 'Установка одинарной двери с доборными элементами (Эмаль)', price: '95 (110)' },
	{ work: 'Установка двойной двери без доборных элементов (Эмаль)', price: '130 (155)' },
	{ work: 'Установка двойной двери с доборными элементами (Эмаль)', price: '145 (165)' },
	{ work: 'Установка раздвижной одиночной двери', price: '80' },
	{ work: 'Установка раздвижной двойной двери', price: '130' },
	{ work: 'Установка портала', price: '50' },
	{ work: 'Установка порога', price: '10' },
	{ work: 'Сбитие откоса', price: '15' },
	{ work: 'Сбитие порога', price: '15' },
	{ work: 'Установка магнитного механизма (AGB), замка', price: '12' },
	{ work: 'Врезка скрытой петли 1 шт', price: '20' },
	{ work: 'Подрезка полотна', price: 'от 15' },
	{ work: 'Доплата за установку (если в заказе 1 дверь)', price: '30' },
];



const Price = () => {
	return (
		<section className="container mx-auto py-10 text-center" id="price">
			<h5 className='text-2xl sm:text-4xl font-bold text-primary mb-8 uppercase'>
				Цены на работы
			</h5>
			<table className="table-auto w-full">
				<thead>
					<tr>
						<th className="border px-4 py-2">Наименование работ</th>
						<th className="border px-4 py-2">Цена (руб.)</th>
					</tr>
				</thead>
				<tbody>
					{dataPrice.map((item, index) => (
						<tr key={index}>
							<td className="border px-4 py-2 text-left">{item.work}</td>
							<td className="border px-4 py-2">{item.price}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default Price;
