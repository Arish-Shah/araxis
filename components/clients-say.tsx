import { useState, useEffect } from 'react';
import Layout from './layout';

function ClientsSay() {
  const [selected, setSelected] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSelected(s => (s + 1) % testimonals.length);
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

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

  const { name, of, comment } = testimonals[selected];

  return (
    <Layout
      parent="bg-lavendar"
      child="md:px-32 lg:px-6 py-20 flex flex-col lg:flex-row"
    >
      <div className="flex-1 flex items-center pb-5 lg:pb-0">
        <div className="flex gap-10">
          <img src="/clients-say.svg" alt="Comment" draggable={false} />
          <h1 className="uppercase text-blue text-3xl md:text-4xl font-semibold">
            What our <br /> clients say
          </h1>
        </div>
      </div>
      <div className="flex-1">
        <p>
          <span className="text-red text-5xl absolute -mt-1">"</span>
          <span className="italic text-black-light leading-loose text-normal lg:text-lg inline-block indent">
            {comment}
            <span className="not-italic text-red text-5xl absolute -mt-4 -ml-4">
              "
            </span>
          </span>
        </p>
        <p className="text-blue text-sm font-semibold italic pt-4 pb-2">
          - {name}, {of}
        </p>
        <div className="flex">
          {testimonals.map((_, index) => {
            const className = index === selected ? 'text-red' : 'text-blue';
            return (
              <div className="w-6 leading-0" key={index}>
                <span
                  onClick={() => setSelected(index)}
                  className={`${className} cursor-pointer text-3xl`}
                >
                  &bull;
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default ClientsSay;
