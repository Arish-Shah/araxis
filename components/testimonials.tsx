import React from 'react';
import Container from './container';
import Slider from 'react-slick';

function Testimonials({
  alternate,
  title,
  page
}: {
  alternate?: boolean;
  title: string;
  page: 'index' | 'for-seekers';
}) {
  const alt = alternate || false;
  const className = alt ? 'flex-row-reverse' : 'flex-row';

  const testimonals: { name: string; of: string; comment: string }[] =
    page === 'index'
      ? [
          {
            name: 'David',
            of: 'Fintech Firm',
            comment:
              'Araxis did a tremendous job in finding the right skill and right fit for our organization and saving a lot of time.'
          },
          {
            name: 'Alexandra',
            of: 'Design Agency',
            comment:
              'Hassle free search for the right candidate for your company starts here.'
          },
          {
            name: 'Charles',
            of: 'Job Seeker',
            comment:
              'We always want to get placed in the right organization and araxis helped me get placed just there.'
          },
          {
            name: 'Alex',
            of: 'Job Seeker',
            comment:
              'All it took me was my resume upload and araxis took care of the rest.'
          }
        ]
      : [
          {
            name: 'Charles',
            of: 'Job Seeker',
            comment:
              'We always want to get placed in the right organization and araxis helped me get placed just there.'
          },
          {
            name: 'Alex',
            of: 'Job Seeker',
            comment:
              'All it took me was my resume upload and araxis took care of the rest.'
          },
          {
            name: 'Chaitanya',
            of: 'Job Seeker',
            comment:
              'For a junior developer, it was difficult to find both growth opportunity and right compensation. Araxis made it possible for me.'
          }
        ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true
  };

  return (
    <>
      <Container
        parent="bg-lavendar"
        child={`md:px-32 lg:px-6 py-20 h-128 lg:${className} flex flex-col`}
        animate={true}
      >
        <div
          className={`flex-1 flex items-center pb-5 lg:pb-0 ${
            alt ? 'lg:text-right lg:flex-row-reverse' : ''
          }`}
        >
          <div className="flex float-right">
            <img
              src="/clients-say.svg"
              alt="Comment"
              draggable={false}
              className={`${alt ? 'mr-6' : 'mr-10'}`}
            />
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
                <p className="text-blue text-sm font-semibold italic pt-4 pb-4">
                  - {t.name}, {t.of}
                </p>
              </React.Fragment>
            ))}
          </Slider>
        </div>
      </Container>
    </>
  );
}

export default Testimonials;
