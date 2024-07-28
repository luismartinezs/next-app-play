import { Suspense } from "react";

import {
  FormWrapper,
  MyRCC,
  SkeletonList,
} from "@/features/restaurants";
import { Filters } from "@/features/filters";
import { MyRSC, RestaurantsLoader } from "@/features/restaurants/server";

// NOTE: I could access searchParams from page but then we opt out of full route cache
export default async function RestaurantsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1>Restaurants</h1>
        <p>
          This page uses multiple client and server data fetching and mutating
          strategies
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p>
            Update searchParams client side. Fetch DB data server side, and
            filter it using searchParams, client side
          </p>
          <p>
            Note: Using searchParams on the server opts out of full route
            caching
          </p>
        </div>
        <Filters />
        <Suspense fallback={<SkeletonList count={8} />}>
          <RestaurantsLoader />
        </Suspense>
      </div>
      <MyRSC />
      <MyRCC />
      <FormWrapper />
    </div>
  );
}
