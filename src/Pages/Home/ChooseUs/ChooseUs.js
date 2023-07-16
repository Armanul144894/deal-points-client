import React from "react";
import book from "../../../assets/choose/book.png";
import price from "../../../assets/choose/price.png";
import delivery from "../../../assets/choose/delivery.png";

const ChooseUs = () => {
  const items = [
    {
      id: 1,
      title: "Largest book collection",
      description:
        "Reading book is a wonderful experience and there's an explorer in all of us who shouldn't be lost at any cost. We offer splendid discounts on bulk purchases.",
      img: book,
    },
    {
      id: 2,
      title: "Best Price",
      description:
        "Reading book is a wonderful experience and there's an explorer in all of us who shouldn't be lost at any cost. We offer splendid discounts on bulk purchases.",
      img: price,
    },
    {
      id: 3,
      title: "On Time Delivery",
      description:
        "On Time 24/7 Delivery is available to meet your unique on-demand and scheduled delivery needs. Our professional executives and friendly customer service will ensure your books are delivered reliability to their destination and it will be free of cost.",
      img: delivery,
    },
  ];
  return (
    <div className="my-16 container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-5">Why Choose Us?</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.id} className="card ">
            <figure className="px-10 pt-10">
              <img
                src={item.img}
                alt=""
                className="rounded-full w-[120px] h-[120px] object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseUs;
