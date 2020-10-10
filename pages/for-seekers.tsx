import Layout from '../components/layout';
import Hero from '../components/hero';
import Footer from '../components/footer';
import Text from '../components/for-seekers/text';
import Testimonials from '../components/testimonials';
import RegisterForm from '../components/for-seekers/register-form';

function ForSeekersPage() {
  return (
    <Layout title="For Seekers - Araxis">
      <Hero
        firstLine="Shifting gears in your career?"
        secondLine="Let us take the steering wheel!"
        intro="Whether you’re a novice in the industry or come with several years of experience, we ensure with our analytical processes that you land the interview of the dream job you’re searching for!"
        type="seekers"
      />
      <Text />
      <Testimonials alternate={true} title="Recruits" />
      <RegisterForm />
      <Footer />
    </Layout>
  );
}

export default ForSeekersPage;
