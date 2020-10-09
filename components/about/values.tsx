import Layout from '../layout';

interface PanelProps {
  title: string;
  content: string;
  image: string;
}

function Values() {
  const panels: PanelProps[] = [
    {
      title: 'Driven by Data',
      content:
        'Whatever we do is driven by data and powered by data. The solutions we provide are analysed based on intensive research that is then brought into effect by actionable steps.',
      image: 'data-driven.svg'
    },
    {
      title: 'Customer is King',
      content:
        'The client for us has the ultimate power. What we design, create and find solutions for is solely so that our partners remain satisfied, efficient and happy.',
      image: 'customer-delight.svg'
    },
    {
      title: 'Extreme Ownership',
      content:
        'We love owning up to our work, with pride - and our quality of work is what sets us apart.',
      image: 'extreme-ownership.svg'
    },
    {
      title: 'Givers',
      content: 'We love giving back.',
      image: 'giver.svg'
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
      <div className="grid grid-cols-1 gap-10 mt-12 lg:mt-16 lg:grid-cols-2 lg:gap-20">
        {panels.map((panel) => (
          <Panel key={panel.title} {...panel} />
        ))}
      </div>
    </Layout>
  );
}

const Panel = ({ title, content, image }: PanelProps) => {
  return (
    <div data-aos="fade-up">
      <div className="flex items-center gap-5">
        <img
          src={`values/${image}`}
          alt={title}
          className="h-12 w-12 lg:h-16 lg:w-16"
        />
        <h3 className="uppercase text-blue font-semibold text-2xl">{title}</h3>
      </div>
      <div className="mt-3 text-blue text-sm font-medium leading-relaxed lg:leading-loose text-left lg:text-base lg:mt-5">
        {content}
      </div>
    </div>
  );
};

export default Values;
