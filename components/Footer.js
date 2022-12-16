function Footer() {
  return (
    <div className="max-w-[1024px] px-8 sm:px-16 mx-auto text-gray-600 grid grid-cols-2 md:grid-cols-4 text-sm py-4">
      <div className="space-y-2">
        <h2 className="font-bold">About</h2>
        <p>How Airbnb works</p>
        <p>News</p>
        <p>Affiliate</p>
        <p>Community</p>
      </div>

      <div className="space-y-2">
        <h2 className="font-bold">Hosts</h2>
        <p>Become host</p>
        <p>View lists</p>
      </div>

      <div className="space-y-2">
        <h2 className="font-bold">Accessibility</h2>
        <p>Students</p>
        <p>Join</p>
        <p>Affiliate</p>
        <p>Community</p>
      </div>

      <div className="space-y-2">
        <h2 className="font-bold">Help Center</h2>
        <p>Tweeter</p>
        <p>WhatsApp</p>
        <p>Facebook</p>
        <p>Instagram</p>
      </div>
    </div>
  );
}

export default Footer;
