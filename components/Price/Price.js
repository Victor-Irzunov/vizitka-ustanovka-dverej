const dataPrice = [
	{ work: 'Установка одинарной двери с наличником на одну сторону (Эмаль)', price: '70 (80)' },
	{ work: 'Установка одинарной двери без доборных элементов (Эмаль)', price: '75 (85)' },
	{ work: 'Установка одинарной двери с доборными элементами (Эмаль)', price: '90 (100)' },
	{ work: 'Установка двойной двери без доборных элементов (Эмаль)', price: '140 (150)' },
	{ work: 'Установка двойной двери с доборными элементами (Эмаль)', price: '150 (160)' },
	{ work: 'Установка раздвижной одиночной двери', price: '100' },
	{ work: 'Установка раздвижной двойной двери', price: '160' },
	{ work: 'Установка портала', price: '50' },
	{ work: 'Установка порога', price: '8' },
	{ work: 'Отбитие откоса', price: 'от 50' },
	{ work: 'Отбитие порога', price: 'от 10' },
	{ work: 'Установка арки', price: 'от 50' },
	{ work: 'Установка магнитного механизма (AGB), замка', price: '12' },
	{ work: 'Врезка скрытой петли', price: '10' },
	{ work: 'Подрезка полотна', price: 'от 10' },
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
