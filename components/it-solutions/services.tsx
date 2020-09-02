import Layout from '../layout';

interface PanelProps {
  title: string;
  content: string;
  image: string;
  reverse: boolean;
}

function Services() {
  const panels: PanelProps[] = [
    {
      title: 'Custom\n Application Development',
      content:
        'We develop custom applications to facilitate business processes and automate existing workflows. We have built applications as complicated as complete CRM solutions and as simple as a QuickBooks automation solution. We choose the best tools for the job to make sure you receive a great solution in a short amount of time.',
      image: 'custom-app.svg',
      reverse: false,
    },
    {
      title: 'Custom\n Web Development',
      content:
        'We develop dynamic and robust websites to run your business online. We build custom websites across many different verticals, such as retail e-commerce, financial securities, insurance, telephony B2B and medical research.',
      image: 'custom-dev.svg',
      reverse: true,
    },
    {
      title: 'Search Engine\n Optimization (SEO)',
      content:
        'From soup to nuts we architect and design complete solutions. We recommend technologies and platforms to make sure our clients are always getting the best bang for their technology investment buck. We have designed many different types of solutions for clients, from automating laborious and routine business processes to solving logistical nightmares by employing the right technology at the right time.',
      image: 'web-app.svg',
      reverse: false,
    },
    {
      title: 'Technical\n Support',
      content:
        'We have servers in some of the best data centers in the country. We host applications and database on our secure servers. We supply the bandwidth and power your application needs when it needs it. We work with clients to provide custom hosted solutions including web servers, database servers, firewalls, VPNs and load balancing.',
      image: 'web-app.svg',
      reverse: true,
    },
    {
      title: 'Quality\n Engineering',
      content:
        'From soup to nuts we architect and design complete solutions. We recommend technologies and platforms to make sure our clients are always getting the best bang for their technology investment buck. We have designed many different types of solutions for clients, from automating laborious and routine business processes to solving logistical nightmares by employing the right technology at the right time.',
      image: 'app-architecture.svg',
      reverse: false,
    },
  ];

  return (
    <Layout child="py-24 md:px-32 lg:px-6 text-center">
      <h1 className="text-blue uppercase font-semibold text-3xl md:text-4xl xl:text-inter">
        Our Services
      </h1>
      <p className="mt-3 md:mt-5 lg:mt-6 text-black-light leading-loose text-md lg:text-lg lg:w-10/12 mx-auto">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      {panels.map(panel => (
        <Panel key={panel.title} {...panel} />
      ))}
    </Layout>
  );
}

function Panel({ title, content, image, reverse }: PanelProps) {
  const heading = title.split('\n').map((t, i) => <p key={i}>{t}</p>);
  const flex = reverse ? 'flex-row-reverse' : 'flex-row';

  return (
    <div className={`pt-24 flex flex-col lg:${flex} items-center`}>
      <div className="lg:flex-1 pr-12">
        <img
          src={`/services/${image}`}
          alt={title}
          draggable={false}
          className="h-64 lg:h-auto mx-auto"
        />
      </div>
      <div className="lg:flex-1 text-center text-left mt-12 lg:mt-0 lg:text-left">
        <h1 className="uppercase text-blue font-semibold text-xl hidden lg:block">
          {heading}
        </h1>
        <h1 className="uppercase text-blue font-semibold text-xl block lg:hidden">
          {title}
        </h1>
        <p className="text-sm leading-loose text-black-light pt-2 lg:pt-3 xl:pt-4 sm:text-base">
          {content}
        </p>
      </div>
    </div>
  );
}

export default Services;
