import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="py-6 bg-[#2b303b] text-white">
        <div className="container mx-auto space-y-6 divide-y dark:divide-gray-600 md:space-y-12 divide-opacity-50">
          <div className="grid grid-cols-12">
            <div
              className="pb-6 col-span-full md:pb-0 md:col-span-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex justify-center space-x-3 md:justify-start"
              >
                <div className="flex justify-between items-center">
                  <Link to="/" className="flex flex-shrink-0 items-center">
                    <svg
                      id="logo-33"
                      width="50"
                      height="46"
                      viewBox="0 0 60 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M26.6046 3.72414C25.1108 2.23101 22.6895 2.2315 21.1964 3.72525L8.73506 16.1917L8.72444 16.1886L8.68506 16.1928C8.70128 16.2006 8.7172 16.2083 8.7328 16.2161C6.54682 16.4451 5.61934 17.102 5.60884 17.9456C5.61254 18.2594 5.74129 18.5983 5.97778 18.9501L5.96641 18.9615C7.95369 21.9588 17.7986 25.9127 24.7636 23.2338C19.5436 25.8438 7.25026 26.3611 3.63951 21.2935C2.85537 22.1418 2.52729 23.2566 2.65084 24.3279C3.6047 29.5853 14.2689 31.0196 24.9332 23.4023L27.2409 25.71C24.3693 28.6602 20.1276 45.7967 26.4303 43.1803C26.5798 43.0788 26.7067 42.988 26.8793 42.8574L27.1602 42.5922C27.144 42.5962 27.1279 42.6 27.1119 42.6038L43.9919 26.6681C45.5592 25.1884 45.5947 22.7065 44.0702 21.1826L26.6046 3.72414ZM24.7664 8.91743L25.3433 6.60974L25.9202 8.91743L27.651 9.49436L25.9202 10.0713L25.3433 12.379L24.7664 10.0713L23.0356 9.49436L24.7664 8.91743ZM17.6255 16.4508L18.0101 14.9123L18.3947 16.4508L19.5486 16.8354L18.3947 17.22L18.0101 18.7585L17.6255 17.22L16.4717 16.8354L17.6255 16.4508ZM31.0211 29.4277L30.6365 30.9661L29.4827 31.3508L30.6365 31.7354L31.0211 33.2738L31.4057 31.7354L32.5596 31.3508L31.4057 30.9661L31.0211 29.4277Z"
                        class="ccustom"
                        fill="#4845D2"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M45.2918 5.25128C41.6831 5.25128 38.2608 6.85419 35.9505 9.62649L27.7315 19.4894L32.4775 12.3703L24.5995 15.7466C23.599 16.1754 23.348 17.4789 24.1176 18.2486L26.6528 20.7837L25.3584 22.337L28.2061 25.1846L29.7593 23.8902L32.2945 26.4254C33.0641 27.195 34.3677 26.944 34.7964 25.9436L38.1727 18.0656L31.0537 22.8116L40.9166 14.5925C43.6889 12.2823 45.2918 8.86 45.2918 5.25128ZM37.4609 13.0824C38.2472 13.8687 39.5221 13.8687 40.3085 13.0824C41.0948 12.296 41.0948 11.0211 40.3085 10.2348C39.5221 9.44841 38.2472 9.44841 37.4609 10.2348C36.6745 11.0211 36.6745 12.296 37.4609 13.0824Z"
                        class="ccompli2"
                        fill="#A3A2FF"
                      ></path>{" "}
                      <path
                        opacity="0.6"
                        d="M3.54793 21.1609C5.43339 27.6207 16.8966 27.2839 24.7614 23.2348C19.495 25.8664 7.03695 26.369 3.54793 21.1609Z"
                        fill="#424242"
                      ></path>{" "}
                      <path
                        opacity="0.6"
                        d="M26.4303 43.1803C21.1195 45.3849 23.2955 33.5645 25.8299 28.0245C23.9825 32.9487 22.4055 43.8038 27.1602 42.5922L26.8793 42.8574C26.7067 42.988 26.5798 43.0788 26.4303 43.1803Z"
                        fill="#424242"
                      ></path>{" "}
                    </svg>
                    <a className="text-2xl font-bold text-orange-500">Heaven</a>
                  </Link>
                </div>
              </a>
            </div>
            <div
              className="col-span-6 text-center md:text-left md:col-span-3"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <p className="pb-1 text-lg font-medium">Category</p>
              <ul>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    Advertisement
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div
              className="col-span-6 text-center md:text-left md:col-span-3"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <p className="pb-1 text-lg font-medium">Category</p>
              <ul>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    Galary
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    Testimonial
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-600"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid justify-center pt-6 lg:justify-between">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>©2024 All rights reserved</span>
              <a rel="noopener noreferrer" href="#">
                <span>Privacy policy</span>
              </a>
              <a rel="noopener noreferrer" href="#">
                <span>Terms of service</span>
              </a>
            </div>
            <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Email"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-600 dark:text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
