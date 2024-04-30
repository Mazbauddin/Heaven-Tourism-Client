import { FaLandmark, FaWarehouse } from "react-icons/fa";
import { GiNuclearPlant } from "react-icons/gi";
import { ImPower } from "react-icons/im";
import { MdSevereCold } from "react-icons/md";
import { PiThermometerColdFill } from "react-icons/pi";
const Features = () => {
  return (
    <div>
      <div
        className="hero min-h-screen mt-20"
        style={{
          backgroundImage: "url(https://i.ibb.co/5BKRz7k/viatnam.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <section className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="container mx-auto p-4 my-6 space-y-2 text-center heading_title">
              <h2
                className="text-6xl font-bold "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                Southeast Asia Tourist Spots are Here
              </h2>
            </div>
            <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div
                className="flex flex-col items-center p-4"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <FaLandmark className="text-4xl sm:text-6xl text-[#ff691a]"></FaLandmark>

                <h3 className="my-3 text-3xl font-semibold">Bangladesh</h3>
                <div className="space-y-1 leading-tight">
                  <p>
                    Sundarban, Cox’s Bazar, Rangamati, Bandarban, Saint Martin’s
                    Island
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center p-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <MdSevereCold className="text-4xl sm:text-6xl text-[#ff691a]" />
                <h3 className="my-3 text-3xl font-semibold">Thailand</h3>
                <div className="space-y-1 leading-tight">
                  <p>Bangkok, Chiang Mai, Ayutthaya, Phuket, Phi Phi Islands</p>
                </div>
              </div>
              <div
                className="flex flex-col items-center p-4"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <ImPower className="text-4xl sm:text-6xl text-[#ff691a]" />
                <h3 className="my-3 text-3xl font-semibold">Indonesia</h3>
                <div className="space-y-1 leading-tight">
                  <p>
                    Bali, Borobudur Temple, Komodo National Park, Raja Ampat
                    Islands, Yogyakarta
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center p-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <GiNuclearPlant className="text-4xl sm:text-6xl text-[#ff691a]" />
                <h3 className="my-3 text-3xl font-semibold">Malaysia</h3>
                <div className="space-y-1 leading-tight">
                  <p>
                    Kuala Lumpur, Langkawi, Penang, Cameron Highlands, Taman
                    Negara National Park
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center p-4"
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <PiThermometerColdFill className="text-4xl sm:text-6xl text-[#ff691a]" />
                <h3 className="my-3 text-3xl font-semibold">Vietnam</h3>
                <div className="space-y-1 leading-tight">
                  <p>
                    Ha Long Bay, Ho Chi Minh City, Hoi An Ancient Town, Phong
                    Nha Caves, Mekong Delta
                  </p>
                </div>
              </div>
              <div
                className="flex flex-col items-center p-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="linear"
              >
                <FaWarehouse className="text-4xl sm:text-6xl text-[#ff691a]" />
                <h3 className="my-3 text-3xl font-semibold">Cambodia</h3>
                <div className="space-y-1 leading-tight">
                  <p>
                    Angkor Wat, Siem Reap, Phnom Penh, Kep, Bokor National Park
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Features;
