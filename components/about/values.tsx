import Layout from '../layout';

interface PanelProps {
  title: string;
  content: string;
  image: string;
  className: string;
}

function Values() {
  const panels: PanelProps[] = [
    {
      title: 'Driven by Data',
      content:
        'Whatever we do is driven by data and powered by data. The solutions we provide are analysed based on intensive research that is then brought into effect by actionable steps.',
      image: 'data-driven.svg',
      className: 'lg:mb-10 lg:pr-10'
    },
    {
      title: 'Customer is King',
      content:
        'The client for us has the ultimate power. What we design, create and find solutions for is solely so that our partners remain satisfied, efficient and happy.',
      image: 'customer-delight.svg',
      className: 'mt-10 lg:pl-10 lg:mt-0'
    },
    {
      title: 'Extreme Ownership',
      content:
        'We love owning up to our work, with pride - and our quality of work is what sets us apart.',
      image: 'extreme-ownership.svg',
      className: 'mt-10 lg:pr-10'
    },
    {
      title: 'Givers',
      content: 'We love giving back.',
      image: 'giver.svg',
      className: 'mt-10 lg:pl-10'
    }
  ];

  return (
    <Layout child="py-20 md:px-32 lg:px-6 text-center" animate={true}>
      <h1 className="uppercase text-blue font-semibold text-3xl md:text-4xl lg:text-inter">
        Our Values
      </h1>
      <p className="pt-2 pb-10 lg:pb-8 text-black-light font-medium lg:w-1/2 mx-auto leading-loose">
        All that we do, we do it with great value.
      </p>
      <div className="grid grid-cols-1 mt-12 lg:mt-16 lg:grid-cols-2">
        {panels.map((panel) => (
          <Panel key={panel.title} {...panel} />
        ))}
      </div>
    </Layout>
  );
}

const Panel = ({ title, content, image, className }: PanelProps) => {
  return (
    <div className={className} data-aos="fade-up">
      <div className="flex items-center">
        <img
          src={`values/${image}`}
          alt={title}
          className="h-12 w-12 lg:h-16 lg:w-16"
        />
        <h3 className="uppercase text-blue font-semibold text-2xl ml-5">
          {title}
        </h3>
      </div>
      <div className="mt-3 text-blue text-sm font-medium leading-relaxed lg:leading-loose text-left lg:text-base lg:mt-5">
        {content}
      </div>
    </div>
  );
};

export default Values;
