import { FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto">
        <footer className="py-12 gap-10 px-3 sm:px-3 md:px-5 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5">
          <div>
            <aside>
              <Link className="text-3xl text-green-600 font-bold " to={"/"}>
                Toritorkari
              </Link>
              <div className="flex gap-5 mt-5">
                <a href="https://www.facebook.com/" target="_blank">
                  <FaFacebook size={25} />
                </a>
                <a href="https://www.youtube.com" target="_blank">
                  <FaYoutube size={25} />
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <FaTwitter size={25} />
                </a>
                <a href="https://linkedin.com/" target="_blank">
                  <FaLinkedinIn size={25} />
                </a>
              </div>
            </aside>
          </div>
          <div>
            <nav className="flex flex-col">
              <h6 className="footer-title">Useful Links</h6>
              <Link to="/" className="link link-hover">
                About Us
              </Link>
              <Link to="/" className="link link-hover">
                About Our Shop
              </Link>
              <Link to="/" className="link link-hover">
                Our Services
              </Link>
              <Link to="/" className="link link-hover">
                Our Sitemap
              </Link>
            </nav>
          </div>
          <div>
            <nav className="flex flex-col">
              <h6 className="footer-title">Legal</h6>
              <Link to="/" className="link link-hover">
                Terms of use
              </Link>
              <Link to="/" className="link link-hover">
                Privacy policy
              </Link>
              <Link to="/" className="link link-hover">
                Cookie policy
              </Link>
            </nav>
          </div>
          <div className="lg:col-span-2">
            <form>
              <h6 className="footer-title">Join Our Newsletter Now</h6>
              <p>
                Get E-mail updates about our latest shop and special offers.
              </p>
              <fieldset className="mt-3">
                <div className="join">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="input input-bordered join-item"
                  />
                  <button className="btn btn-success join-item">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </footer>
      </div>

      <footer className="footer footer-center py-4 border-t text-base-content border-base-300">
        <aside className="container mx-auto">
          <p className="">
            Copyright © 2024 - All right reserved by Toritorkari
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
