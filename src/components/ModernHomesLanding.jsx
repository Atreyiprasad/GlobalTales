import React, { useState, useEffect } from "react";
import "./ModernHomesLanding.css";
import Navbar from "./Navbar";
import DestinationCard from "./DestinationCard";
import { fetchCitySuggestions } from "../api/cityApi";
import { fetchImages } from "../api/imageApi";

const ModernHomesLanding = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 1) {
      fetchCitySuggestions(query).then(setSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSearch = async (city) => {
    const images = await fetchImages(city);
    setResults(images);
    setSuggestions([]);
    setQuery(city);
  };

  return (
    <div>
      <Navbar />
      <div className="hero-container">
        <h1>
          The only <span className="highlight">all-in-one</span> platform
          <br /> you need for travelling
        </h1>
        <p className="subtext">
          Free easy-to-use tools built for players who want full control over their session.
        </p>

        {!showSearch ? (
          <button className="cta-button" onClick={() => setShowSearch(true)}>
            Look for Destination →
          </button>
        ) : (
          <div className="search-box">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a city..."
              className="city-input"
            />

            {suggestions.length > 0 && (
              <div className="suggestions">
                {suggestions.map((city, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleSearch(city)}
                  >
                    {city}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="results">
        {results.map((res, index) => (
          <DestinationCard key={index} title={res.title} imageUrl={res.url} />
        ))}
      </div>
    </div>
  );
};

export default ModernHomesLanding;
