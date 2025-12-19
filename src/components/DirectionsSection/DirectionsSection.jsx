export default function DirectionsSection() {
    return (
      <section className="md:bg-[#FBF6EE] py-24">
  
        {/* PRESS LOGOS */}
       
  
        {/* MAIN CARD */}
        <div className="md:max-w-[80%] mx-auto border border-black rounded-xl bg-[#fffaf5] md:px-20 px-10 py-32">
  
          {/* ICON */}
          <div className="flex justify-center mb-8">
            <span className="text-4xl"></span>

            <h2 className="mx-auto mb-6 font-serif text-4xl leading-tight text-center md:text-7xl">
                Get directions on<br />
                the road to retirement
              </h2>
          </div>
  
          {/* CONTENT */}
          <div className="grid items-center grid-cols-1 gap-16 md:grid-cols-2">
  
            {/* LEFT TEXT */}
            <div>
  
              <p className="font-serif font- md:text-2xl leading-[26px] text-justify">
                Your journey through retirement is unique. Each part of your
                financial life is just one of many pathways on your personal
                retirement roadmap. But that roadmap can get a little complicated.
                It's ok to stop and ask for directions. Of course, if you ask three
                people for directions, you'll probably get three different answers.
                We're here to help you make sense of it all.
                <br /><br />
                We recognize that the route to retirement is not a single road.
                It is a journey to the place where all roads converge. We're here
                to make sure you reach your destination with confidence.
              </p>
  
              {/* SIGNATURE */}
              <p className="mt-10 font-serif text-lg italic">
                The Five Pathways Family
              </p>
            </div>
  
            {/* VIDEO */}
            <div className="relative overflow-hidden border border-black rounded-lg">
              <video
                className="object-cover w-full h-full"
                poster="/img/Firstsection1.png"
              />
  
              
            </div>
          </div>
        </div>
      </section>
    );
  }
  