import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const json = await res.json();
      setData(json.products);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <h1 className="text-center fw-bold mb-4">Products</h1>

        {loading && <h2 className="text-center text-secondary">Loading...</h2>}

        <div className="row g-4">
          {data.map((item) => (
            <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
              <div
                className="card h-100 border-0 shadow-sm"
                style={{ borderRadius: "18px" }}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="card-img-top"
                  style={{
                    height: "180px",
                    objectFit: "contain",
                    backgroundColor: "#f8f9fa",
                    padding: "12px",
                    borderRadius: "18px 18px 0 0",
                  }}
                />

                <div className="card-body d-flex flex-column">
                  <h3 className="card-title fs-5 fw-semibold">{item.title}</h3>
                  <p className="text-secondary small mt-2 mb-3">
                    {item.description.slice(0, 60)}...
                  </p>
                  <p className="text-warning fw-semibold mb-3">{item.rating} ★</p>

                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-bold fs-5">${item.price}</span>
                    <Link to={`/product/${item.id}`} className="btn btn-primary btn-sm">
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;