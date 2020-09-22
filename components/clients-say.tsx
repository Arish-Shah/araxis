import React from 'react';
import Layout from './layout';
import Slider from 'react-slick';

function ClientsSay({
  alternate,
  title,
}: {
  alternate?: boolean;
  title: string;
}) {
  const alt = alternate || false;
  const className = alt ? 'flex-row-reverse' : 'flex-row';

  const testimonals: { name: string; of: string; comment: string }[] = [
    {
      name: 'John Doe',
      of: 'Multinational Corp.',
      comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      name: 'Alice May',
      of: 'Multinational Corp.',
      comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    },
    {
      name: 'Jack Smith',
      of: 'Multinational Corp.',
      comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
    {
      name: 'Karen Rae',
      of: 'Multinational Corp.',
      comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <>
      <Layout
        parent="bg-lavendar"
        child={`md:px-32 lg:px-6 py-20 h-128 lg:${className}`}
      >
        <div
          className={`flex-1 flex items-center pb-5 lg:pb-0 ${
            alt ? 'lg:text-right lg:flex-row-reverse' : ''
          }`}
        >
          <div className={`flex ${alt ? 'gap-6' : 'gap-10'} float-right`}>
            <img src="/clients-say.svg" alt="Comment" draggable={false} />
            <h1 className="uppercase text-blue text-3xl md:text-4xl lg:text-inter font-semibold">
              What our <br /> {title} say
            </h1>
          </div>
        </div>
        <div className="flex-1">
          <Slider {...settings}>
            {testimonals.map((t, index) => (
              <React.Fragment key={index}>
                <span className="text-red text-5xl absolute -mt-1">"</span>
                <span className="italic text-black-light leading-10 text-normal lg:text-lg inline-block indent">
                  {t.comment}
                  <span className="not-italic text-red text-5xl absolute mt-3 -ml-5">
                    "
                  </span>
                </span>
                <p className="text-blue text-sm font-semibold italic pt-4 pb-8">
                  - {t.name}, {t.of}
                </p>
              </React.Fragment>
            ))}
          </Slider>
        </div>
      </Layout>
    </>
  );
}

export default ClientsSay;
