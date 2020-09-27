import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Hero from '../components/hero';
import SecondHero from '../components/recruiters/hero';
import End2End from '../components/recruiters/e2e';
import Form from '../components/recruiters/form';

function RecruitersPage() {
  return (
    <>
      <Navbar />
      <Hero
        firstLine="We filter from the rest;"
        secondLine=" to give you the best."
        intro="Find the right talent with us that helps you escalate your business to great heights!"
      />
      <SecondHero
        title="Staff Solutions"
        subtitle="Success is not a matter of coincidence"
        content="Over the years, we have successfully executed various assignments across the globe. Our A-team of consultants, service the true needs of each of our clients, at the drop of a hat. We believe in maintaining long-standing relationships with our clients and candidates, in order to provide the right talent to the right team at the right time."
      />
      <End2End />
      <Form />
      <Footer />
    </>
  );
}

export default RecruitersPage;
