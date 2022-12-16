import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
  return (
    <div className="h-screen">
      <Header />

      <main>
        <p>300+ stays for 3 guests</p>

        <h1>Stay in London</h1>

        <div>
          <p>Type of place</p>
          <p>Number of Rooms</p>
          <p>Price</p>
          <p>Filters</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
