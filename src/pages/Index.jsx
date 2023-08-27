import React, { useState } from "react";
import { Route, Link } from "@tanstack/react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { rootRoute } from "../Root";
import "swiper/css";
import BestCategoryCard from "../components/BestCategoryCard";
import ProductCard from "../components/ProductCard";
import ImgGallery from "../components/ImgGallery";

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/i",
  component: Index,
});

function Index() {
  const slices = [
    {
      hero: true,
      img: "img/banner1.jpg",
      title: "TE LA ENTERRAMOS CON LOS PRODUCTOS",
      description: (
        <>
          100% ORIGINALES <br /> CALIDAD GARANTIZADA
        </>
      ),
      href: "#",
    },
    {
      hero: false,
      img: "img/banner2.png",
    },
    {
      hero: false,
      img: "img/banner5.png",
    },
  ];

  const cards = [
    {
      icon: "plane-up",
      title: "Envío gratuito a nivel nacional",
      description: "En pedido superior a $90.000 Pesos",
    },
    {
      icon: "wallet",
      title: "Contrareembolso",
      description: "100% garantía de devolución de dinero",
    },
    {
      icon: "gift",
      title: "Tarjeta regalo especial",
      description: "Ofrece bonos especiales con regalo",
    },
    {
      icon: "headset",
      title: "Servicio al cliente 24/7",
      description: "Llámenos 24/7 al 123-456-7890",
    },
  ];

  const bestCategories = [
    {
      img: "img/Celulares.jpg",
      name: "Celulares",
      href: "#",
    },
    {
      img: "img/Computacion.jpg",
      name: "Computacion",
      href: "#",
    },
    {
      img: "img/Consolas.jpg",
      name: "Consolas",
      href: "#",
    },
  ];

  const services =[
    {
      icon: "envelope",
      title: "Em@il",
      description: "Betabyte.soporte@gmail.com",
    },
    {
      icon: "truck",
      title: "Envio rapido",
      description: "A todas las partes de colombia",
    },
    {
      icon: "phone",
      title: "Venta telefonica",
      description: "Venta telefonica: 012-345-6789",
    }
  ]

  return (
    <>
      <header>
        <header className="bg-background">
          <div className="container py-6 flex flex-col gap-3 justify-evenly items-center md:flex-row">
            <div className="flex items-center gap-5">
              <i className="fa-solid fa-headset text-5xl" />
              <div className="flex flex-col">
                <span>Servicio al Cliente</span>
                <span>123-456-7890</span>
              </div>
            </div>
            <Link to={"/"} className="flex items-center gap-5">
              <img className="h-10" src="img/Logo.png" alt="Logo de Betabyte" />
              <h1 className="font-semibold text-4xl uppercase">Betabyte</h1>
            </Link>
            <div className="flex items-center gap-3 text-5xl">
              <Link
                to={"/login"}
                className="fa-solid fa-user opacity-30"
              ></Link>
              <span className="mx-2 h-10 border-l border-solid border-black"></span>
              <Link
                to={"#"}
                className="fa-solid fa-basket-shopping opacity-30"
              ></Link>
              <div className="flex flex-col text-base">
                <span>Carrito</span>
                <span>( {0} )</span>
              </div>
            </div>
          </div>
        </header>
        <nav className="bg-primary">
          <div className="container flex flex-col lg:flex-row justify-around items-center p-5 gap-3">
            <ul className="flex flex-col md:flex-row gap-5 font-semibold text-xl only:bg-red-500 list-none">
              <li className="hover:text-white group relative">
                <Link to={"#"}>CATEGORÍAS</Link>
              </li>
              <li className="hover:text-white">
                <Link to={"#"}>HISTORIAL</Link>
              </li>
              <li className="hover:text-white">
                <Link to={"#"}>VENDER</Link>
              </li>
              <li className="hover:text-white">
                <Link to={"#"}>SOBRE NOSOTROS</Link>
              </li>
              <li className="hover:text-white">
                <Link to={"#"}>AYUDA</Link>
              </li>
            </ul>
            <form className="flex items-center border-2 border-solid border-white bg-white rounded-full overflow-hidden">
              <input
                type="text"
                name="search"
                placeholder="Buscar..."
                className="px-3 outline-none p-2 border-none "
              />
              <button className="bg-primary p-3">
                <i className="fa-solid fa-magnifying-glass text-white mr-1" />
              </button>
            </form>
          </div>
        </nav>
      </header>
      <section>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
        >
          {slices.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full overflow-hidden h-[450px] text-white text-center">
                <img src={item.img} className="w-full h-full object-cover" />
                {item.hero && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 p-5 rounded-3xl">
                    <h2
                      className="text-3xl text-background font-semibold mb-3"
                      style={{ textWrap: "balance" }}
                    >
                      {item.title}
                    </h2>
                    <div className="flex flex-col mb-3 text-lg">
                      <span>{item.description}</span>
                    </div>
                    <div className="button">
                      <a href={item.href} className="btn-1">
                        Comprar ahora
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <main className="bg-background">
        <section className="grid grid-cols-1 gap-12 py-12 md:grid-cols-2 lg:grid-cols-4 mx-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-6 bg-white rounded-2xl p-4"
            >
              <i className={`fa-solid fa-${card.icon} text-5xl text-primary`} />
              <div className="flex flex-col w-full">
                <span className="font-bold font-lg">{card.title}</span>
                <span className="text-[#777]">{card.description}</span>
              </div>
            </div>
          ))}
        </section>
        <section className="flex flex-col items-center justify-center py-6">
          <h2 className="text-4xl font-bold">Mejores Categorías</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-3 md:gap-25 md:flex-col p-6">
            {bestCategories.map((category, i) => (
              <BestCategoryCard
                key={i}
                href={category.href}
                img={category.img}
                className="md:last-of-type:col-span-2 md:last-of-type:aspect-[3/1] lg:last-of-type:col-span-1 lg:last-of-type:aspect-auto"
              >
                {category.name}
              </BestCategoryCard>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-6 items-center justify-center py-6">
          <h2 className="text-4xl font-bold">Mejores Productos</h2>
          <div className="flex gap-x-8 gap-y-4 flex-wrap justify-center px-12">
            <div className="bg-white rounded-full py-3 px-5 cursor-pointer hover:bg-primary font-semibold text-xl hover:text-white">
              Destacados
            </div>
            <div className="bg-white rounded-full py-3 px-5 cursor-pointer hover:bg-primary font-semibold text-xl hover:text-white">
              Recientes
            </div>
            <div className="bg-white rounded-full py-3 px-5 cursor-pointer hover:bg-primary font-semibold text-xl hover:text-white">
              Más Vendidos
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full px-12">
            <ProductCard img="/img/RTX.jpg" 
            price={8800000} 
            lastPrice={10000000}
            >
              Grafica NVIDIA RTX4090
            </ProductCard>
            
            <ProductCard
              img="/img/Iphone.jpg"
              price={2610000}
              lastPrice={3000000}
            >
              Iphone 13
            </ProductCard>
            <ProductCard
              img="/img/PC gamer.jpg"
              price={4000000}
              lastPrice={5000000}
            >
              PC GAMER
            </ProductCard>
            <ProductCard img="/img/PS5.jpg" price={2699250} lastPrice={3599000}>
              PlayStation 5
            </ProductCard>
          </div>
        </section>
        <section className=" mt-12 img-container">
          <ImgGallery />
        </section>
        <section className="flex flex-col gap-12 items-center justify-center py-6">
          <h2 className="text-4xl font-bold">Especial</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full px-12">
          <ProductCard img="/img/mouse Logitech G502.jpg" 
            price={399200} 
            lastPrice={499000}
            >
              Mouse Logitech G502
            </ProductCard>
            
            <ProductCard
              img="/img/Machenike K500.jpg"
              price={295000}
              lastPrice={369000}
            >
              Teclado Machenike K500
            </ProductCard>
            <ProductCard
              img="/img/portatil MSI katana GF66.jpg"
              price={4000000}
              lastPrice={5000000}
            >
              Portatil MSI katana GF66
            </ProductCard>
            <ProductCard img="/img/switch.png" 
            price={1200000} 
            lastPrice={1500000}>
              Nintendo Switch
            </ProductCard>
          </div>
          </section>
          <section className="flex flex-col gap-12 items-center justify-center py-20">
          <h2 className="text-4xl font-bold">Servicios</h2>
          <section className="grid grid-cols-1 gap-10 py-10 md:grid-cols-3 lg:grid-cols-3 mx-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-4 bg-white rounded-2xl p-4"
              >
                <div className="flex justify-center items-center mb-4">
                  <i className={`fa-solid fa-${service.icon} text-5xl text-primary`} />
                </div>
                <div className="flex flex-col items-center w-full text-center">
                  <span className="font-bold font-lg">
                    {service.title === "Venta telefonica" ? (
                      <strong>{service.title}</strong>
                    ) : (
                      service.title
                    )}
                  </span>
                  <span className="text-[#777] mb-2">{service.description}</span>
                </div>
              </div>
            ))}
          </section>
        </section>
        <section>
        </section>
      </main>
</>
);
}
