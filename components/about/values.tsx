import Layout from '../layout';

interface PanelProps {
  title: string;
  content: string;
  image: string;
}

function Values() {
  const panels: PanelProps[] = [
    {
      title: 'Data Driven',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: 'data-driven.svg',
    },
    {
      title: 'Customer Delight',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: 'customer-delight.svg',
    },
    {
      title: 'Extreme Ownership',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: 'extreme-ownership.svg',
    },
    {
      title: 'Giver',
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: 'giver.svg',
    },
  ];

  return (
    <Layout child="py-20 md:px-32 lg:px-6 text-center">
      <h1 className="uppercase text-blue font-semibold text-3xl md:text-4xl lg:text-inter">
        Our Values
      </h1>
      <div className="grid grid-cols-1 gap-10 mt-12 lg:mt-16 lg:grid-cols-2 lg:gap-20">
        {panels.map(panel => (
          <Panel key={panel.title} {...panel} />
        ))}
      </div>
    </Layout>
  );
}

const Panel = ({ title, content, image }: PanelProps) => {
  return (
    <div>
      <div className="flex items-center gap-5">
        <img src={`values/${image}`} alt={title} className="h-12 lg:h-16" />
        <h3 className="uppercase text-blue font-semibold text-2xl">{title}</h3>
      </div>
      <div className="mt-3 text-blue text-sm font-medium leading-relaxed lg:leading-loose text-left lg:text-base lg:mt-5">
        {content}
      </div>
    </div>
  );
};

export default Values;
