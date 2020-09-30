import Layout from "../layout";

interface PanelProps {
  title: string;
  content: string;
  image: string;
  reverse: boolean;
}

function Services() {
  const panels: PanelProps[] = [
    {
      title: "Custom\n Application Development",
      content:
        "We build custom applications to accelerate business processes while automating the existing workflow. From simple QuickBooks automation solutions to complete CRM solutions, we have done everything - all while choosing the best tools for the job to ensure higher efficiencies.",
      image: "custom-app.svg",
      reverse: false,
    },
    {
      title: "Custom\n Web Development",
      content:
        "We develop robust websites to run various online businesses. We build custom websites across many verticals, such as retail e-commerce, financial securities, insurance, telephony B2B and medical research.",
      image: "custom-dev.svg",
      reverse: true,
    },
    {
      title: "Search Engine\n Optimization (SEO)",
      content:
        "We recommend technologies and platforms to ensure our clients always get the best bang for their technology investment buck. We always employ the right technology and use the right words - to ensure what our clients do, reaches those who they intend for it to reach.",
      image: "web-app.svg",
      reverse: false,
    },
    {
      title: "Technical\n Support",
      content:
        "We work with clients to provide custom hosted solutions including web servers, database servers, firewalls, VPNs and load balancing.",
      image: "technical-support.svg",
      reverse: true,
    },
    {
      title: "Quality\n Engineering",
      content:
        "While we have designed many types of solutions for clients, we have also designed and architected complete design solutions with quality engineering to ensure nothing but the best goes out to our partners.",
      image: "app-architecture.svg",
      reverse: false,
    },
  ];

  return (
    <Layout child="py-24 md:px-32 lg:px-6 text-center" animate={true}>
      <h1 className="text-blue uppercase font-semibold text-3xl md:text-4xl xl:text-inter">
        Our Services
      </h1>
      <p className="mt-3 md:mt-5 lg:mt-6 text-black-light leading-loose text-md lg:text-lg lg:w-10/12 mx-auto">
        What we do, we do it best: only for you.
      </p>
      {panels.map((panel) => (
        <Panel key={panel.title} {...panel} />
      ))}
    </Layout>
  );
}

function Panel({ title, content, image, reverse }: PanelProps) {
  const heading = title.split("\n").map((t, i) => <p key={i}>{t}</p>);
  const flex = reverse ? "flex-row-reverse" : "flex-row";
  const dataAos = reverse ? "fade-left" : "fade-right";

  const borderClasses =
    image !== "app-architecture.svg" ? "border-b border-gray-300" : "";

  return (
    <div className={`overflow-x-hidden lg:border-none ${borderClasses}`}>
      <div
        className={`py-12 flex flex-col-reverse lg:pt-24 lg:pb-0 lg:${flex} items-center`}
        data-aos={dataAos}
      >
        <div className="lg:flex-1 lg:pr-12">
          <img
            src={`/services/${image}`}
            alt={title}
            draggable={false}
            className="h-64 lg:h-auto mx-auto"
          />
        </div>
        <div className="lg:flex-1 text-center text-left mb-10 lg:mb-0 lg:text-left">
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
    </div>
  );
}

export default Services;
