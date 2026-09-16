import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  const fetchProduct = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const json = await res.json();
      setItem(json);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!item) return <h2 className="text-center mt-5">Loading...</h2>;

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <div
          className="bg-white shadow rounded-4 p-4 p-md-5 mx-auto"
          style={{ maxWidth: "1100px" }}
        >
          <Link to="/" className="btn btn-success mb-4">
            Back
          </Link>

          <div className="row g-4 align-items-center">
            <div className="col-md-6">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="img-fluid rounded-4"
                style={{
                  width: "100%",
                  height: "420px",
                  objectFit: "contain",
                  backgroundColor: "#f8f9fa",
                  padding: "20px",
                }}
              />
            </div>

            <div className="col-md-6">
              <h1 className="fw-bold mb-3">{item.title}</h1>
              <p className="text-secondary mb-3">{item.description}</p>
              <p className="mb-2">
                <span className="fw-semibold">Category:</span> {item.category}
              </p>
              <p className="fs-2 fw-bold mb-4">${item.price}</p>

              <div className="d-flex gap-3 flex-wrap">
                <button className="btn btn-success px-4">Buy Now</button>
                <a href="#" className="btn btn-success px-4">
                  Share
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;