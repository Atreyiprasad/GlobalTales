import axios from "axios";

export async function fetchCitySuggestions(query) {
  try {
    const response = await axios.get(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${query}`,
      {
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      }
    );
    return response.data.data.map((city) => city.city);
  } catch (error) {
    console.error("City fetch error", error);
    return [];
  }
}

