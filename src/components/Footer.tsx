const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Golf Software Agency. Confidential &
          Proprietary.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
