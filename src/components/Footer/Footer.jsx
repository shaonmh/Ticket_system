import { FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container w-full lg:w-11/12 mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-5 place-items-center grid-cols-auto-fit-minmax">
        <div className="system">
          <h1>CS — Ticket System</h1>
          <p className="mt-5 text-gray-400 text-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="company">
          <h1>Company</h1>
          <ul className="flex flex-col text-xs gap-5 mt-5">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Our Mission
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Contact Saled
              </a>
            </li>
          </ul>
        </div>
        <div className="Services">
          <h1>Services</h1>
          <ul className="flex flex-col text-xs gap-5 mt-5">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Products & Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Customer Stories
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Download Apps
              </a>
            </li>
          </ul>
        </div>
        <div className="Information">
          <h1>Information</h1>
          <ul className="flex flex-col text-xs gap-5 mt-5">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Join Us
              </a>
            </li>
          </ul>
        </div>
        <div className="SocialLinks">
          <h1>Social Links</h1>
          <ul className="text-gray-400 text-xs flex flex-col gap-3 mt-3">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white flex items-center gap-1"
              >
                <FaFacebook /> @CS — Ticket System
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white flex items-center gap-1"
              >
                <FaTwitter /> @CS — Ticket System
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white flex items-center gap-1"
              >
                <FaLinkedin /> @CS — Ticket System
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white flex items-center gap-1"
              >
                <MdEmail /> @CS — Ticket System
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="divider h-px mt-20 py-0 bg-gray-700 w-11/12 mx-auto"></div>
      <div className="flex justify-center items-center  flex-col lg:flex-row gap-5 w-11/12 lg:w-7/10 mx-auto py-5 px-2">
        <h3 className="text-gray-50">
          <p className=" text-center">
            © 2026 CS — Ticket System. All rights reserved.
          </p>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
