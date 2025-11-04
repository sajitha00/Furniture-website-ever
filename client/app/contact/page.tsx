import Header from "../component/contact/header";
import Navbar from "../component/Navbar/Navbar";
import CtLogo from "../component/contact/ctlogo";
import Seamless from "../component/contact/seamless";
import Form from "../component/contact/form";
import Create from "../component/contact/create";
import Footer from "../component/Footer/Footer";
function page() {
  return (
    <div>
      <div className="containerpaddin container mx-auto">
        <Navbar />
      </div>
      <Header />
      <CtLogo />
      <Seamless />
      <Form />
      <Create />
      <Footer />
    </div>
  );
}

export default page;
