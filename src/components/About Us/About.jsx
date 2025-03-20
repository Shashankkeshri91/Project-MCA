const About = () => {
  return (
    <div>
      <section className="text-black-700 bold-font">
        <div className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-4 sm:mb-6">
          About Us
        </div>
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          
          {/* Image First on Small Screens, Left on Large Screens */}
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-8 w-full">
            
            {/* Image with Shadow Effect */}
            <div className="w-full md:w-1/2 flex justify-center order-1 md:order-none">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="About Us Image"
                className="object-cover rounded-lg w-full max-w-md shadow-lg hover:shadow-2xl transition-shadow duration-500"
              />
            </div>

            {/* Text Section (Always Below Image on Mobile, Right on Large Screens) */}
            <div className="w-full md:w-1/2 text-center md:text-left p-2 sm:p-6 order-2 md:order-none">
              <p className="text-gray-600 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
                eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna
                quis elit efficitur consequat. Mauris eleifend velit a pretium iaculis.
                Donec sagittis velit et magna euismod, vel aliquet nulla malesuada.
                Nunc pharetra massa lectus, a fermentum arcu volutpat vel.
              </p>
              <div className="mt-4 sm:mt-8">
                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium">
                  Learn more about us
                  <span className="ml-2">&#8594;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About;
