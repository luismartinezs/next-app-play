import { getAll } from "@/features/restaurants";
import { List } from "@/features/restaurants";

// NOTE: I could access searchParams from page but then we opt out of full route cache
export async function RestaurantsLoader() {
  const { data: restaurants } = await getAll();

  if (!restaurants) {
    return <div>No restaurants found</div>;
  }

  return <List restaurants={restaurants} />;
}
