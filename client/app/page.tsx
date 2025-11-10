import { Metadata } from "next";
import Section03 from "./component/Home/Section03";
import Section05 from "./component/Home/Section05";
import Section06 from "./component/Home/Section06";
import Section07 from "./component/Home/Section07";
import Section08 from "./component/Home/Section08";
import Section04 from "./component/Home/Section04";
import Section01 from "./component/Home/Section01";
import Section02 from "./component/Home/Section02";
import { Navbar2 } from "./component/Navbar/Navbar2";
import Section09 from "./component/Home/Section09";
import Footer2 from "./component/Footer/Footer2";

export const metadata: Metadata = {
  title: "Premium Custom Furniture in Sri Lanka | Everwood Collection",
  description:
    "Discover handcrafted, affordable luxury furniture made in Sri Lanka. Everwood Collection offers custom wood designs blending quality, comfort, and timeless style.",
  keywords:
    "premium furniture Sri Lanka, custom furniture, wooden furniture, handcrafted furniture, luxury furniture, Everwood Collection",
  openGraph: {
    title: "Everwood Collection | Premium Custom Furniture in Sri Lanka",
    description:
      "Affordable, handcrafted furniture designed to suit your lifestyle. Made with Sri Lankan craftsmanship.",
    url: "https://everwoodcollection.com/",
    images: ["/images/og-image-home.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Everwood Collection | Premium Custom Furniture in Sri Lanka",
    description:
      "Discover handcrafted furniture combining luxury, affordability, and Sri Lankan design.",
    images: ["/images/og-image-home.jpg"],
  },
};

export default function Home() {
  return (
    <div className="font-poppins">
      <Navbar2 />
      <div className=" py-20 containerpaddin container mx-auto ">
        <Section01 />
        <Section02 />
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
          <Section07 />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
          <Section08 />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
          <Section05 />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
          <Section06 />
        </div>

        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
          <Section03 />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
          <Section04 />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="2000">
          <Section09 />
        </div>
      </div>
      <Footer2 />
    </div>
    // fff
  );
}
