"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { ChevronDown } from "lucide-react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "../src/globals.css";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]); 
  const [showFilters, setShowFilters] = useState(true);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");

  const sortOptions = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFiltered(response.data); 
      })
      .catch((error) => console.error("API error:", error));
  }, []);

  // This wil receives selected filters from Filters.jsx
  const handleFilterChange = (selectedFilters) => {
    if (selectedFilters.length === 0) {
      setFiltered(products);
    } else {
      const filteredData = products.filter((product) => {
        const categories = product.category.toLowerCase();
        return selectedFilters.some((f) =>
          categories.includes(f.toLowerCase().replace("&", "and"))
        );
      });
      setFiltered(filteredData);
    }
  };

  return (
    <div className="site-root">
      <Header />

      <section className="discover">
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </section>

      <div className="filterbar">
        <div className="filterbar-inner">
          <div className="left">
            <span className="items-count">{filtered.length} ITEMS</span>
            <button
              className="toggle-filters"
              onClick={() => setShowFilters(!showFilters)}
            >
              <ChevronDown className={`chev ${showFilters ? "open" : ""}`} />
              {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
            </button>
          </div>

          <div className="right">
            <div className="sort-dropdown">
              <button
                className="sort-btn"
                onClick={() => setShowSortDropdown(!showSortDropdown)}
              >
                {selectedSort}
                <ChevronDown
                  className={`chev ${showSortDropdown ? "open" : ""}`}
                />
              </button>

              {showSortDropdown && (
                <ul className="sort-menu">
                  {sortOptions.map((opt) => (
                    <li
                      key={opt}
                      className={opt === selectedSort ? "active" : ""}
                      onClick={() => {
                        setSelectedSort(opt);
                        setShowSortDropdown(false);
                      }}
                    >
                      {opt}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      <main className="main-content">
        {showFilters && (
          <aside className="sidebar">
            <Filters onFilterChange={handleFilterChange} />
          </aside>
        )}

        <section
          className={`product-grid-wrap ${
            showFilters ? "with-sidebar" : "no-sidebar"
          }`}
        >
          <div className="product-grid">
            {filtered.length > 0 ? (
              filtered.map((p) => <ProductCard key={p.id} product={p} />)
            ) : (
              <div className="loading">No products found</div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
