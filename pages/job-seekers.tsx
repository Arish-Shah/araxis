import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Footer from '../components/footer';
import Text from '../components/job-seekers/text';
import ClientsSay from '../components/clients-say';
import RegisterForm from '../components/job-seekers/register-form';

function JobSeekers() {
  return (
    <>
      <Navbar />
      <Hero
        firstLine="Looking for a Career Change?"
        secondLine="Let us take care of it!"
      />
      <Text />
      <ClientsSay alternate={true} title="Recruits" />
      <RegisterForm />
      <Footer />
    </>
  );
}

export default JobSeekers;
