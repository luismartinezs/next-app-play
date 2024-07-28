"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { cuisineOptions } from "../constants"

export const Filters = () => {
  const router = useRouter()
  const searchParams = useSearchParams();
  const cuisineSearchParam = searchParams.get("cuisine");

  function handleSubmit(formData: FormData) {
    const cuisine = formData.get("cuisine") as string

    router.push(`/restaurants?cuisine=${cuisine}`)
  }

  return (
    <form action={handleSubmit}>
      <div className="flex gap-2">
        <select name="cuisine" className="bg-gray-800 shadow-inner p-1 rounded-md">
          {cuisineOptions.map((cuisine) => (
            <option key={cuisine} value={cuisine} selected={cuisine === cuisineSearchParam}>
              {cuisine}
            </option>
          ))}
        </select>
        <button type="submit" className="bg-purple-600 text-white px-4 py-1 hover:bg-purple-700 rounded-md">Submit</button>
      </div>
    </form>
  )
}
