

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-white py-10 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="w-full flex gap-10 justify-between items-center">
            <div className="w-1/2">
              <img
                className="w-full h-96"
                src="https://img.freepik.com/premium-vector/business-consultants-presenting-new-strategy-clients-sleek-conference-room-vector_1075459-1155.jpg?w=360"
                alt=""
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                About Us
              </h3>
              <p className="mt-4 text-lg leading-6 text-gray-500 text-justify">
                Welcome to toritorkari, your trusted source for the freshest
                vegetables, meat, chicken, and fruits. We are dedicated to
                providing you with the very best of farm-fresh produce, with a
                focus on quality, sustainability, and customer service.
              </p>
            </div>
          </div>
          <div className="w-full flex gap-10 justify-between items-center">
            <div className="w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Our Story
              </h3>
              <p className="mt-4 text-lg leading-6 text-gray-500 text-justify">
                Founded in 2023, toritorkari has come a long way from its
                beginnings as a small local market. When we first started out,
                our passion for fresh and organic food drove us to start our own
                business so that toritorkari can offer you the worlds freshest
                and healthiest produce. We now serve customers all over
                Bangladesh, and are thrilled to be a part of the eco-friendly
                wing of the food industry.
              </p>
            </div>
            <div className="w-1/2">
              <img
                className="w-full"
                src="https://img.freepik.com/premium-vector/book-festival-fair-concept-small-people-reading-open-huge-book-back-school_1187015-11801.jpg?w=740"
                alt=""
              />
            </div>
          </div>
          <div className="w-full flex gap-10 justify-between items-center">
            <div className="w-1/2">
              <img
                className="w-full h-96"
                src="https://img.freepik.com/premium-vector/learn-from-failure-mistake-admit-embrace-failure-practice-achieve-success-t_926199-3663305.jpg?w=740"
                alt=""
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Our Mission
              </h3>
              <p className="mt-4 text-lg leading-6 text-gray-500 text-justify">
                Our mission is simple: to provide high-quality fresh produce
                that you can trust. We believe in building a better community by
                supporting local farmers and offering our customers products
                that are not only fresh but also sustainably sourced. We are
                committed to ensuring that every item you purchase meets our
                high standards of quality and freshness.
              </p>
            </div>
          </div>
          <div className="w-full flex gap-10 justify-between items-center">
            <div className="w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Why Choose Us?
              </h3>
              <ul className="mt-4 list-disc list-inside text-lg leading-6 text-gray-500">
                <li>
                  Quality Assurance: Only the freshest produce makes it to your
                  door.
                </li>
                <li>
                  Sustainable Sourcing: We support local farmers and sustainable
                  practices.
                </li>
                <li>
                  Exceptional Customer Service: We are here to help you with all
                  your needs.
                </li>
                <li>
                  Convenient Delivery: Get fresh produce delivered to your
                  doorstep.
                </li>
              </ul>
            </div>
            <div className="w-1/2">
              <img
                className="w-full h-96"
                src="https://img.freepik.com/premium-vector/brand-strategy-tactic-planning-reach-goal-achieve-target-challenge-professional-skill_926199-3663314.jpg?w=740"
                alt=""
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-10 justify-between items-center">
            <div className="w-1/2">
              <img
                className="w-full h-96"
                src="https://img.freepik.com/free-vector/illustration-diverse-people_53876-28459.jpg?t=st=1718785572~exp=1718789172~hmac=4b938b7dfa61b3117fda4a8607a0a5ba9440537f66cc723e28ef64b4db2a96d3&w=740"
                alt=""
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                Join Our Community
              </h3>
              <p className="mt-4 text-lg leading-6 text-gray-500">
                We are more than just a marketplace; we are a community of food
                enthusiasts who believe in the power of fresh and healthy food.
                Follow us on our social media platforms and subscribe to our
                newsletter to stay updated on the latest news, offers, and tips
                for a healthy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
