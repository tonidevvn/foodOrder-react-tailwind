import appImage from "../../assets/app-img.png";
import appStep1 from "../../assets/app-1.png";
import appStep2 from "../../assets/app-2.png";
import appStep3 from "../../assets/app-3.png";

function Home() {
  return (
    <div id="content">
      <section id="banner">
        <div className="c-banner w-full bg-cover bg-no-repeat relative h-banner max-h-screen">
          <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h2 className="text-2xl mb-5 text-gray-600 md:text-white">
              Food App
            </h2>
            <h1 className="text-4xl text-gray-600 md:text-white max-w-full font-bold px-2 mb-4 leading-normal md:px-5 md:text-5xl md:leading-snug">
              Why stay hungry when you can order form Bella Onojie
            </h1>
            <h4 className="text-xl text-gray-600 md:text-white font-light mb-5">
              Download the bella onoje’s food app now on
            </h4>
            <div className="flex justify-center px-2 mb-4">
              <button className="z-30 mx-3 min-w-fit font-semibold border border-primary bg-primary px-6 py-2 md:px-12 md:py-4 rounded-full hover:bg-transparent hover:text-primary md:hover:bg-white md:hover:text-primary md:hover:border-primary hover:-translate-y-1 transition-all duration-500">
                Playstore
              </button>
              <button className="z-30 mx-3 min-w-fit font-semibold border text-primary border-primary bg-white md:text-white md:border-white md:bg-transparent px-6 py-2 md:px-12 md:py-4 rounded-full md:hover:bg-white hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-500">
                App store
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="appImage">
        <div className="relative">
          <div className="absolute z-0 top-1/2 left-1/2 transform -translate-x-2/3 -translate-y-14">
            <img
              src={appImage}
              alt="phone app screen"
              className="max-w-xl w-screen pl-24 md:w-auto hover:-translate-y-10 transition-all duration-1000"
            />
          </div>
        </div>
      </section>
      <section id="appSteps">
        <div className="container mx-auto px-2"></div>
        <div className="pt-40 mt-28 md:pt-96">
          <hr className="w-4/5 mx-auto h-0.5 bg-gray-200 md:w-2/5" />
          <h2 className="font-semibold text-4xl p-4 text-center">
            How the app works
          </h2>
        </div>
        <div
          id="createAccount"
          className="flex flex-col-reverse justify-evenly items-center px-4 py-10 md:flex-row"
        >
          <div className="text-center">
            <img src={appStep1} alt="phone app step1" />
          </div>
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h3 className="font-bold text-2xl text-primary">
              Create an account
            </h3>
            <h2 className="font-bold text-4xl py-4">
              Create/login to an existing account to get started
            </h2>
            <h4 className="text-xl text-gray-600">
              An account is created with your email and a desired password
            </h4>
          </div>
        </div>
        <div
          id="exploreVarieties"
          className="flex flex-col justify-evenly items-center px-4 py-10 md:flex-row"
        >
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h3 className="font-bold text-2xl text-primary">
              Explore varieties
            </h3>
            <h2 className="font-bold text-4xl py-4">
              Shop for your favorites meal as e dey hot.
            </h2>
            <h4 className="text-xl text-gray-600">
              Shop for your favorite meals or drinks and enjoy while doing it.
            </h4>
          </div>
          <div className="text-center">
            <img src={appStep2} alt="phone app step2" />
          </div>
        </div>
        <div
          id="appCheckout"
          className="flex flex-col-reverse justify-evenly items-center px-4 py-10 md:flex-row"
        >
          <div className="text-center">
            <img src={appStep3} alt="phone app step3" />
          </div>
          <div className="w-full text-center md:w-1/2 md:text-left">
            <h3 className="font-bold text-2xl text-primary">Checkout</h3>
            <h2 className="font-bold text-4xl py-4">
              When you done check out and get it delivered.
            </h2>
            <h4 className="text-xl text-gray-600">
              When you done check out and get it delivered with ease.
            </h4>
          </div>
        </div>
      </section>
      <section
        id="bannerBottom"
        className="c-bannerBottom w-full bg-cover bg-no-repeat relative h-bannerBottom mt-20"
      >
        <div className="absolute top-1/2 left-1/2 transition -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h2 className="text-2xl mb-5">Download the app now.</h2>
          <h4 className="text-xl font-light mb-5">
            Available on your favorite store. Start your premium experience now.
          </h4>
          <div className="flex justify-center px-2 mb-4">
            <button className="z-30 mx-3 min-w-fit font-semibold border border-transparent bg-primary px-6 py-2 md:px-12 md:py-6 rounded-md hover:bg-transparent hover:border-white transition-all">
              Playstore
            </button>
            <button className="z-30 mx-3 min-w-fit font-semibold border border-white bg-transparent px-6 py-2 md:px-12 md:py-6 rounded-md hover:bg-white hover:border-primary hover:text-primary transition-all">
              App store
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
