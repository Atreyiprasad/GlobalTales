import axios from "axios";

export async function fetchImages(cityName) {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?query=${cityName}`,
      {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_KEY}`,
        },
      }
    );

    return response.data.results.map((img) => ({
      title: cityName,
      url: img.urls.small,
    }));
  } catch (error) {
    console.error("Image fetch error", error);
    return [];
  }
}

