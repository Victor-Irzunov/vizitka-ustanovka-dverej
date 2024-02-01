import Image from "next/image";


export default function Preimushestva() {
	return (
		<section className='py-10 md:py-16'>
			<div className='container mx-auto'>
				<div className='text-center'>
					<h2 className='text-2xl sm:text-4xl font-bold text-primary mb-4 uppercase'>
						Наши преимущества
					</h2>
					<p className='text-base sm:text-lg mb-6 md:mb-14'>
						Здесь вы можете узнать, почему выбор наших услуг по установке дверей - это верное решение. Мы гордимся следующими преимуществами:
					</p>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-10'>

					<div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
						<div className="card-body items-center text-center gap-4">
							<Image src='/svg/doors.svg' alt='Мы устанавливаем' width={80} height={80} />
							<h3 className="card-title text-primary">
								Мы устанавливаем
							</h3>
							<p className="text-sm base-content">
								Мастер обеспечивает скрытый монтаж коробок (без использования заглушек), врезку всех видов петель, замков и выполняет работы по установке дверей различных типов и материалов, таких как:
							</p>
							<ul className=''>
								<li className='mb-1'>
									• двери из экошпона и натурального шпона
								</li>
								<li className='mb-1'>
									• двери с покрытием эмаль
								</li>
								<li className='mb-1'>
									• двери из массива
								</li>
								<li className='mb-1'>
									• распашные
								</li>
								<li className='mb-1'>
									• раздвижные
								</li>
								<li className='mb-1'>
									• складные системы
								</li>
								<li className='mb-1'>
									• порталы и откосы
								</li>
							</ul>
						</div>
					</div>

					<div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
						<div className="card-body items-center text-center gap-4">
							<Image src='/svg/worker.svg' alt='Качественный монтаж' width={80} height={80} />
							<h3 className="card-title text-primary">
								Качественный монтаж
							</h3>
							<p className="text-sm base-content">
								Мы обладаем глубокими знаниями в области монтажа дверей и следим за последними тенденциями в индустрии, что бы использовать передовые методы, обеспечивающие качество и долговечность установки. Ваш проект будет в надежных руках и задуманные вами идеи будут воплощены в реальность с максимальной точностью и вниманием к деталям.
							</p>
						</div>
					</div>

					<div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
						<div className="card-body items-center text-center gap-4">
							<Image src='/svg/tools.svg' alt='Профессиональный инструмент' width={80} height={80} />
							<h3 className="card-title text-primary">
								Профессиональный инструмент
							</h3>
							<p className="text-sm base-content">
							Мы гарантируем качество наших услуг благодаря использованию в работе инструмента мировых брендов (Вosch, Makita, Dewalt), а так же специализированных шаблонов, позволяющих выполнять качественную заводскую врезки петель и замков. Все работы организовываются с эффективным пылеудалением.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}