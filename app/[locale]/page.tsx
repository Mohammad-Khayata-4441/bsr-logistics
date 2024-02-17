export default function Home() {
  return (
    <main className="flex flex-col ">

      <section className="hero flex flex-col justify-center">
        <div className="container max-w-screen-xl">

          <div className="flex flex-col items-center justify-center py-12">

            <h2 className="text-[75px] font-syne font-bold">Delivering</h2>
            <div className="max-w-[400px] text-center mt-24">
              <p className="text-lg">Seamless transportation, efficient supply chain management, and unparalleled customer satisfaction.
              </p>
            </div>
            <button name='hero-btn' type="button" className="app-btn btn-primary mt-8">
              Parthner
            </button>

          </div>
        </div>
      </section>

      <section>
        <div className="container max-w-screen-xl">

          <div className="section-title">
            <h2>
              Projects
            </h2>
          </div>
          <div className="grid grid-cols-12 gap-y-12 mt-8">

            <div className="col-span-6"></div>

            <div className="col-start-6 col-span-12 md:col-span-6">
              <h3>Our</h3>
              <p >
                Explore our successful projects that showcase our commitment to excellence and innovation.


              </p>
            </div>

            <div className="col-span-12 md:col-span-6">
              <h3>On-going
              </h3>
              <p >
                Discover our current projects that are transforming the logistics industry.



              </p>
            </div>
            <div className="col-span-6"></div>
            <div className="col-span-6"></div>

            <div className=" col-span-12 md:col-span-6">
              <h3>Future</h3>
              <p >
                Get a glimpse of our upcoming projects that will revolutionize the logistics landscape.



              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="about mt-12">
        <div className="container max-w-screen-xl">

          <div className="grid grid-cols-12">

            <div className="col-span-6"></div>
            <div className="col-span-6 space-y-8">
              <h2>About</h2>
              <p>Learn more about BRS Logistics and how we deliver excellence in logistics solutions.</p>
              <button className="app-btn outlined" >Learn</button>
            <div>
              <h5>Contacts</h5>
              <ul>
                <li>Abdullah@brslogistic.com</li>
                <li>+965 65831657</li>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
