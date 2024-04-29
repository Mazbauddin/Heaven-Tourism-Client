const View_Details = () => {
  return (
    // <div className="dark:bg-gray-100 dark:text-gray-900">
    //   <div className="container grid grid-cols-12 mx-auto">
    //     <div
    //       className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto"
    //       style="background-image: url('https://source.unsplash.com/random/640x480'); background-position: center center; background-blend-mode: multiply; background-size: cover;"
    //     >
    //       <div className="flex flex-col items-center p-8 py-12 text-center dark:text-gray-800">
    //         <span>12 June</span>
    //         <h1 className="py-4 text-5xl font-bold">
    //           Lorem, ipsum dolor sit amet consectetur adipisicing.
    //         </h1>
    //         <p className="pb-6">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!
    //         </p>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //           className="w-7 h-7"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
    //             clipRule="evenodd"
    //           ></path>
    //         </svg>
    //       </div>
    //     </div>
    //     <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
    //       <div className="pt-6 pb-4 space-y-2">
    //         <span>12 June</span>
    //         <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!
    //         </p>
    //         <a
    //           rel="noopener noreferrer"
    //           href="#"
    //           className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600"
    //         >
    //           <span>Read more</span>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //             className="w-4 h-4"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
    //               clipRule="evenodd"
    //             ></path>
    //           </svg>
    //         </a>
    //       </div>
    //       <div className="pt-6 pb-4 space-y-2">
    //         <span>12 June</span>
    //         <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!
    //         </p>
    //         <a
    //           rel="noopener noreferrer"
    //           href="#"
    //           className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600"
    //         >
    //           <span>Read more</span>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //             className="w-4 h-4"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
    //               clipRule="evenodd"
    //             ></path>
    //           </svg>
    //         </a>
    //       </div>
    //       <div className="pt-6 pb-4 space-y-2">
    //         <span>12 June</span>
    //         <h1 className="text-3xl font-bold">Lorem ipsum dolor sit.</h1>
    //         <p>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!
    //         </p>
    //         <a
    //           rel="noopener noreferrer"
    //           href="#"
    //           className="inline-flex items-center py-2 space-x-2 text-sm dark:text-violet-600"
    //         >
    //           <span>Read more</span>
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //             className="w-4 h-4"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
    //               clipRule="evenodd"
    //             ></path>
    //           </svg>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default View_Details;
