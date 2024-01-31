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
							<Image src='/svg/bank.svg' alt='Низкие цены на установку дверей' width={80} height={80} />
							<h3 className="card-title text-primary">
								Низкие цены
							</h3>
							<p className="text-sm base-content">
								Мы можем гарантировать наилучшие цены, так как являемся надежным поставщиком услуг по установке дверей. Наша компания ценит каждого клиента и стремится предоставить доступные и конкурентоспособные цены без потери качества. Мы осуществляем эффективное управление расходами, что позволяет нам предложить вам оптимальные финансовые условия. Низкие цены — это одно из наших ключевых преимуществ, направленных на вашу удовлетворенность и уверенность в выборе наших услуг.
							</p>
						</div>
					</div>

					<div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
						<div className="card-body items-center text-center gap-4">
							<Image src='/svg/worker.svg' alt='Опытные установщики' width={80} height={80} />
							<h3 className="card-title text-primary">
								Опытные установщики
							</h3>
							<p className="text-sm base-content">
								Высококвалифицированные мастера с многолетним опытом в установке дверей различных типов обеспечивают профессиональное выполнение работ. Наша команда специалистов обладает глубокими знаниями в области монтажа дверей, что позволяет нам решать задачи любой сложности без переплат. Мы следим за последними тенденциями в индустрии и используем передовые методы, чтобы обеспечить качество и долговечность установки. Ваш проект будет в надежных руках опытных профессионалов, готовых воплотить ваши идеи в реальность с максимальной точностью и вниманием к деталям.
							</p>

						</div>
					</div>

					<div className="card bg-base-200 transform-gpu transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
						<div className="card-body items-center text-center gap-4">
							<Image src='/svg/garantiya.svg' alt='Гарантия на установку' width={80} height={80} />
							<h3 className="card-title text-primary">
								Гарантия на установку
							</h3>
							<p className="text-sm base-content">
								Гарантия на установленные нашими мастерами двери составляет 12 месяцев. Мы гарантируем качество наших услуг и используем только высококачественные материалы, что позволяет нам предоставлять долгосрочные гарантии на нашу работу. Ваша уверенность в долгосрочной надежности и безопасности установленных дверей для нас приоритетна.
							</p>

						</div>
					</div>
				</div>
			</div>
		</section>

	)
}