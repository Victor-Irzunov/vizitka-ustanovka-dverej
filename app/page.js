"use client"
import CTA from "@/components/CTA/CTA";
import Preimushestva from "@/components/Preimushestva/Preimushestva";
import Price from "@/components/Price/Price";
import Step from "@/components/Step/Step";
import Modal from "@/components/modal/Modal";
import { useState } from "react";

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleOrderClick = (product) => {
    setSelectedProduct(product);
    document.getElementById("my_modal_3").showModal();
  };
  const closeModal = () => {
    document.getElementById("my_modal_3").close();
  };
  return (
    <main className="" id="main">
      <section className=''>
        <div className="hero min-h-screen" style={{ backgroundImage: 'url("/fon/fon.webp")' }}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-secondary">
            <div className="sd:max-w-2xl xz:max-w-full">
              <h1 className="mb-5 sd:text-7xl xz:text-4xl font-bold">
                Установка межкомнатных дверей <span className="text-primary block">в Минске</span>
              </h1>
              <p className="mb-5 text-base xz:text-sm text-white/80 font-normal xz:font-light">
                Мастер, имеющий нужные навыки, накопленный опыт и весь набор профессионального инструмента, выполнит работу качественно и в срок.
              </p>

              <button
                className="btn btn-primary text-white sd:mt-10 xz:mt-4 sd:text-xl xz:text-lg"
                onClick={() => handleOrderClick('Заказать звонок')}
              >
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </section>

      <Preimushestva />

      <Step />

      <Price />

      <CTA handleOrderClick={handleOrderClick} />

      <Modal
        selectedProduct={selectedProduct}
        closeModal={closeModal}
        isFormSubmitted={isFormSubmitted}
        setIsFormSubmitted={setIsFormSubmitted}
      />
    </main>
  );
}
