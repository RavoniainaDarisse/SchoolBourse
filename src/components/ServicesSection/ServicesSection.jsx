import ScheduleButton from "../ScheduleButton/ScheduleButton";

export default function ServicesSection() {
    return (
      <section className="px-6 py-20 ">
        <div className="mx-auto max-w-7xl">
  
          {/* Header */}
          <div className="max-w-5xl mx-auto mb-20 text-center">
            <p className="mb-4 text-2xl tracking-widest text-gray-600 uppercase">
              Our Services
            </p>
  
            <h2 className="mb-6 font-serif leading-tight text-8xl md:text-7xl">
              Five Pathways is here to simplify
              your retirement planning.
            </h2>
  
            <p className="mt-10 text-2xl text-gray-700 leading -relaxed">
              We’ll work with you to create a personalized strategy that incorporates
              all of the paths of retirement planning: Income, Taxes, Investments,
              healthcare and <span className="underline">Estate Planning</span>.
            </p>
          </div>
  
          {/* Content */}
          <div className="space-y-64">
  
            {/* Block 1 */}
            <div className="grid items-center grid-cols-1 gap-16 md:grid-cols-2">
              <img
                src="/img/Thirdsection1.png"
                alt="Retirement planning"
                className="w-full"
              />
  
              <div>
                <h3 className="mb-4 font-serif text-4xl">
                  Retirement Income Planning
                </h3>
  
                <p className="mt-10 mb-10 leading-relaxed text-gray-700 text-[15px]">
                  You've got goals. But goals cost money. Make sure you
                  have an income that works for you in retirement.
                  And while we're at it, why not make that income guaranteed?
                  We'll show you how to get the most out of your current
                  assets, pension, and/or Social Security (whatever you
                  might have). We'll also be along for the full ride, helping
                  smooth things out when the road ahead gets a little
                  bumpy. There are no shortcuts on the path to retirement,
                  but we do know all kinds of clever side streets.
                </p>
  
                 <ScheduleButton text='learn more' />
              </div>
            </div>
  
            {/* Block 2 */}
            <div className="grid items-center grid-cols-1 gap-16 md:grid-cols-2">
              <div>
                <h3 className="mb-4 font-serif text-4xl">
                  Tax Planning
                </h3>
  
                <p className="mt-10 mb-10 leading-relaxed text-gray-700 text-[15px]">
                  Your retirement plans may not include the IRS. But rest
                  assured, the IRS has plans for your retirement. Let's work
                  together to make sure you get to keep the money you've
                  earned. We'll show you how to diversify your tax strategy
                  and maximize your retirement benefits. We'll make sure
                  that paying taxes isn't a roadblock on your way to
                  retirement.
                </p>
  
                <ScheduleButton text='learn more' />
              </div>
  
              <img
                src="/img/Thirdsection2.png"
                alt="Tax planning"
                className="w-full"
              />
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  