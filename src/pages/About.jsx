

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="bg-white py-10 px-4 sm:px-6 lg:py-10 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="mt-10 text-2xl font-bold text-gray-900 sm:text-3xl">
            About Us
          </h3>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Welcome to toritorkari, your trusted source for the freshest
            vegetables, meat, chicken, and fruits. We are dedicated to providing
            you with the very best of farm-fresh produce, with a focus on
            quality, sustainability, and customer service.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-gray-900 sm:text-3xl">
            Our Story
          </h3>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Founded in 2023, toritorkari has come a long way from its beginnings
            as a small local market. When we first started out, our passion for
            fresh and organic food drove us to start our own business so that
            toritorkari can offer you the worlds freshest and healthiest
            produce. We now serve customers all over Bangladesh, and are
            thrilled to be a part of the eco-friendly wing of the food industry.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-gray-900 sm:text-3xl">
            Our Mission
          </h3>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Our mission is simple: to provide high-quality fresh produce that
            you can trust. We believe in building a better community by
            supporting local farmers and offering our customers products that
            are not only fresh but also sustainably sourced. We are committed to
            ensuring that every item you purchase meets our high standards of
            quality and freshness.
          </p>

          <h3 className="mt-10 text-2xl font-bold text-gray-900 sm:text-3xl">
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
              Convenient Delivery: Get fresh produce delivered to your doorstep.
            </li>
          </ul>

          <h3 className="mt-10 text-2xl font-bold text-gray-900 sm:text-3xl">
            Join Our Community
          </h3>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            We are more than just a marketplace; we are a community of food
            enthusiasts who believe in the power of fresh and healthy food.
            Follow us on our social media platforms and subscribe to our
            newsletter to stay updated on the latest news, offers, and tips for
            a healthy lifestyle.
          </p>

          <div className="mt-10">
            <a
              href="/contact"
              className="inline-block bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-green-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
