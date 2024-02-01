
export default function CTA({ handleOrderClick }) {
  return (
    <section className='py-12 md:py-24' id="dostavka">
      <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center gap-6 text-center md:text-start'>
          <p className='flex-grow sd:text-lg xz:text-base font-semibold text-primary text-center'>
            Доверьте установку межкомнатных дверей опытному мастеру с необходимыми навыками и большим опытом. Мы предоставляем различные способы оплаты, включая <span className="underline">наличный</span> и <span className="underline">безналичный</span> расчёт. Для получения подробной информации о стоимости и сроках, просто свяжитесь с нами по телефону или нажмите кнопку ниже "Заказать установку", и мы ответим на все ваши вопросы, предоставим необходимую информацию и назначим удобное время для визита мастера.
          </p>
          <button className='btn btn-primary rounded-full sm:btn-lg mt-5 text-white'
          onClick={() => handleOrderClick("Заказать установку")}
          >
            Заказать установку
          </button>
        </div>
      </div>
    </section>
  )
}