import ProfileMain from './ProfileMain';
import Header from '../Common/Header';
import Footer from '../Common/Footer';

function Profile() {
  return (
  <>
    <Header
          backgroundColor="white"
          color="black"
    />
    <ProfileMain/>
    <Footer/>
  </>
  );
}

export default Profile;
