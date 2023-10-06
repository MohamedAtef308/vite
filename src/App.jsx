import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [toursData, setToursData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // get tours
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const newTours = await response.json();
      console.log(newTours);
      setIsLoading(false);
      setToursData(newTours);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };

  // initial load
  useEffect(() => {
    fetchTours();
  }, []);

  // removing a tour
  const removeTour = (id) => {
    const newTours = toursData.filter((tour) => tour.id != id);
    setToursData(newTours);
  };

  // while loading data
  if (isLoading) {
    return (
      <main>
        <Loading />;
      </main>
    );
    // when all tours are deleted
  } else if (toursData.length == 0) {
    return (
      <main>
        <h2>There are no tours left please reload tours</h2>
        <button
          className="btn"
          onClick={() => {
            fetchTours;
          }}
        >
          Reload Tours
        </button>
      </main>
    );
    // when tours are available
  } else {
    return (
      <main>
        <Tours toursList={toursData} removeTour={removeTour} />
      </main>
    );
  }
};
export default App;
