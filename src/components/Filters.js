"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { ChevronDown } from "lucide-react";

const Filters = ({ onFilterChange }) => {
  const [open, setOpen] = useState({
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const [categories, setCategories] = useState([]);
  const [selected, setSelected] = useState({});

  const toggle = (k) => setOpen((s) => ({ ...s, [k]: !s[k] }));

  // this wil Fetch unique categories from FakeStore API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        const uniqueCategories = [...new Set(res.data.map((p) => p.category))];
        setCategories(uniqueCategories);

        // initialize all as unchecked
        const initialState = {};
        uniqueCategories.forEach((cat) => (initialState[cat] = false));
        setSelected(initialState);
      })
      .catch((err) => console.error("Error loading categories:", err));
  }, []);

  const handleCheckbox = (key) => {
    setSelected((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      const activeFilters = Object.keys(updated).filter((k) => updated[k]);
      onFilterChange && onFilterChange(activeFilters);
      return updated;
    });
  };

  return (
    <div className="filters">
      <label className="customizable">
        <input type="checkbox" />
        <span>CUSTOMIZABLE</span>
      </label>

      <div className="filter-section">
        <button className="section-header" onClick={() => toggle("idealFor")}>
          <span>CATEGORY</span>
          <ChevronDown className={`chev ${open.idealFor ? "open" : ""}`} />
        </button>

        {open.idealFor && (
          <div className="section-body">
            <div className="all-text">All</div>

            {categories.length > 0 ? (
              categories.map((item) => (
                <label key={item}>
                  <input
                    type="checkbox"
                    checked={selected[item] || false}
                    onChange={() => handleCheckbox(item)}
                  />
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </label>
              ))
            ) : (
              <div>Loading categories...</div>
            )}
          </div>
        )}
      </div>

      {/* Other filter sections can stay collapsed */}
      <div className="filter-section">
        <button className="section-header" onClick={() => toggle("occasion")}>
          <span>OCCASION</span>
          <ChevronDown className={`chev ${open.occasion ? "open" : ""}`} />
        </button>
      </div>
       <div className="filter-section">
        <button className="section-header" onClick={() => toggle("work")}>
          <span>WORK</span>
          <ChevronDown className={`chev ${open.work ? "open" : ""}`} />
        </button>
      </div>

      <div className="filter-section">
        <button className="section-header" onClick={() => toggle("fabric")}>
          <span>FABRIC</span>
          <ChevronDown className={`chev ${open.fabric ? "open" : ""}`} />
        </button>
      </div>
      <div className="filter-section">
        <button className="section-header" onClick={() => toggle("segment")}>
          <span>SEGMENT</span>
          <ChevronDown className={`chev ${open.segment ? "open" : ""}`} />
        </button>
      </div>
      <div className="filter-section">
        <button
          className="section-header"
          onClick={() => toggle("suitableFor")}
        >
          <span>SUITABLE FOR</span>
          <ChevronDown className={`chev ${open.suitableFor ? "open" : ""}`} />
        </button>
      </div>
      <div className="filter-section">
        <button
          className="section-header"
          onClick={() => toggle("rawMaterials")}
        >
          <span>RAW MATERIALS</span>
          <ChevronDown className={`chev ${open.rawMaterials ? "open" : ""}`} />
        </button>
      </div>
      <div className="filter-section">
        <button className="section-header" onClick={() => toggle("pattern")}>
          <span>PATTERN</span>
          <ChevronDown className={`chev ${open.pattern ? "open" : ""}`} />
        </button>
      </div>
    </div>
  );
};

export default Filters;
