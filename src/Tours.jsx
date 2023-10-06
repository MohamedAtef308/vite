import React from "react";
import { useState } from "react";
import Tour from "./Tour";

export default function Tours({ toursList, removeTour }) {
  const [tours, setTours] = useState(toursList);

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="title-underline"></div>
      </div>

      <div className="tours">
        {toursList.map((tour) => {
          return (
            <Tour
              key={tour.id}
              id={tour.id}
              tourImg={tour.image}
              tourTitle={tour.name}
              tourDescription={tour.info}
              tourPrice={tour.price}
              removeTour={removeTour}
            />
          );
        })}
      </div>
    </section>
  );
}
