"use client";

import { useSearchParams } from "next/navigation";
import { RestaurantRead } from "../types";

const Card = ({ restaurant }: { restaurant: RestaurantRead }) => {
  return (
    <div className="card">
      <h3>{restaurant.name}</h3>
      <div>
        <span className="badge">{restaurant.cuisine_type}</span>
      </div>
    </div>
  );
};

export const List = ({ restaurants }: { restaurants: RestaurantRead[] }) => {
  const searchParams = useSearchParams();
  const cuisine = searchParams.get("cuisine");

  const filteredRestaurants = restaurants.filter((r) => {
    if (!cuisine) {
      return true;
    }
    return r.cuisine_type === cuisine;
  });

  return (
    <div className="flex gap-4 flex-wrap">
      {filteredRestaurants.map((r) => (
        <Card key={r.id} restaurant={r} />
      ))}
    </div>
  );
};
