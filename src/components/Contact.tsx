const Contact = () => {
  return (
    <section id="contact" className="bg-gray-800 py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          If you are interested in learning more about the Golf Software Agency
          opportunity, please reach out.
        </p>
        <a
          href="mailto:partners@golfsoftware.agency"
          className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
        </a>
        <p className="text-gray-500 mt-4">partners@golfsoftware.agency</p>
      </div>
    </section>
  );
};

export default Contact;
