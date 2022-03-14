import { Article, Image } from "components/atoms";
import React from "react";

const index = () => {
  const lists = [
    {
      image: "bg-image-1",
      title: "Minimalist Apartment",
      description: "Lorem ipsum dolor sit.",
      href: "#",
      subtitle: "lorem",
    },
    {
      image: "bg-image-2",
      title: "Jx Create",
      description: "Lorem ipsum dolor sit.",
      href: "#",
      subtitle: "lorem",
    },
    {
      image: "bg-image-3",
      title: "Pelitre Hall",
      description: "Lorem ipsum dolor sit.",
      href: "#",
      subtitle: "lorem",
    },
    {
      image: "bg-image-4",
      title: "Mave House",
      description: "Lorem ipsum dolor sit.",
      href: "#",
      subtitle: "lorem",
    },
  ];

  return (
    <section className="mb-5">
      <div className="container-fluid">
        {lists ? (
          lists.map((list, index) => {
            let orderImage = "order-0 order-lg-1";
            let orderArticle = "order-1 order-lg-0";

            if (index % 2 === 0) {
              orderImage = "order-0";
              orderArticle = "order-1";
            }

            return (
              <div className="row min-vh-100 mb-5" key={`content-${index}`}>
                <Image className={`${list.image} ${orderImage}`} />
                <Article
                  className={orderArticle}
                  title={list.title}
                  description={list.description}
                  href={list.href}
                  subtitle={list.subtitle}
                />
              </div>
            );
          })
        ) : (
          <h2 className="text-center">No List in this section</h2>
        )}
      </div>
    </section>
  );
};

export default index;
