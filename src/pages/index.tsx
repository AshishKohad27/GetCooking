import { GoFilter } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";
import category from "../../category.json";
import area from "../../area.json";
import { useState, useEffect } from "react";
import food from "../../food.json";
import axios from "axios";

interface AreaItems {
  strArea: string;
  btnHover: string;
}

let AreaArray: Array<AreaItems> = [
  {
    strArea: "American",
    btnHover: "#ffae25",
  },
  {
    strArea: "British",
    btnHover: "#ff002a",
  },
  {
    strArea: "Canadian",
    btnHover: "#fc16a8",
  },
  {
    strArea: "Chinese",
    btnHover: "#ff4f00",
  },
  {
    strArea: "Croatian",
    btnHover: "#7fc61b",
  },
  {
    strArea: "Dutch",
    btnHover: "#ff002a",
  },
  {
    strArea: "Egyptian",
    btnHover: "#61CE70",
  },
  {
    strArea: "Filipino",
    btnHover: "#077a6e",
  },
  {
    strArea: "French",
    btnHover: "#cc5b06",
  },
  {
    strArea: "Greek",
    btnHover: "#52a815",
  },
  {
    strArea: "Indian",
    btnHover: "#00baff",
  },
  {
    strArea: "Irish",
    btnHover: "#007bff",
  },
  {
    strArea: "Italian",
    btnHover: "#E53E3E",
  },
  {
    strArea: "Jamaican",
    btnHover: "#DD6B20",
  },
  {
    strArea: "Japanese",
    btnHover: "#38A169",
  },
  {
    strArea: "Kenyan",
    btnHover: "#319795",
  },
  {
    strArea: "Malaysian",
    btnHover: "#3182CE",
  },
  {
    strArea: "Mexican",
    btnHover: "#086F83",
  },
  {
    strArea: "Moroccan",
    btnHover: "#805AD5",
  },
  {
    strArea: "Polish",
    btnHover: "#D53F8C",
  },
  {
    strArea: "Portuguese",
    btnHover: "#22543D",
  },
  {
    strArea: "Russian",
    btnHover: "#702459",
  },
  {
    strArea: "Spanish",
    btnHover: "#9C4221",
  },
  {
    strArea: "Thai",
    btnHover: "#C53030",
  },
  {
    strArea: "Tunisian",
    btnHover: "#ECC94B",
  },
  {
    strArea: "Turkish",
    btnHover: "#0BC5EA",
  },
  {
    strArea: "Vietnamese",
    btnHover: "#702459",
  },
];

export default function HomePage() {
  console.log("food:", food[0]);

  return (
    <div
      className="hm-outer"
      style={{
        backgroundImage: `url(${"/images/bgcover-hm.png"})`,
      }}
    >
      <div className="site-container">
        <div className="hm-inner">
          <article className="hm-heading">
            <div className="hm-title">
              <h1>Hello,</h1>
              <p>What are you cooking today?</p>
            </div>
            <div
              className="hm-logo"
              style={{
                backgroundImage: `url(${"/images/logo.png"})`,
              }}
            ></div>
          </article>
          <div className="hm-inputbox">
            <div className="hm-input">
              <div className="hm-searchbox">
                <BsSearch />
              </div>
              <input type="text" placeholder="Search Recipes" />
            </div>
            <div className="hm-filter">
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#filterModal"
              >
                <GoFilter />
              </button>
            </div>
          </div>

          {/* Category/Area Block */}
          <div className="hm-areacat">
            <button
              type="button"
              className="btn-block btn-category"
              data-bs-toggle="modal"
              data-bs-target="#categoryModal"
            >
              Category
            </button>
            <button
              type="button"
              className="btn-block btn-area"
              data-bs-toggle="modal"
              data-bs-target="#areaModal"
            >
              Area
            </button>
          </div>

          {area &&
            area.map((item: any, index: number) => (
              <div className="btn-area" key={index}>
                {/* <Area areaProps={item.strArea} /> */}
              </div>
            ))}

          <div className="hm-grid">
            {food &&
              food.map(
                (
                  {
                    strMealThumb,
                    strArea,
                    strMeal,
                    idMeal,
                  }: {
                    strMealThumb: string;
                    strArea: string;
                    strMeal: string;
                    idMeal: string;
                  },
                  index: number
                ) => (
                  <GridItemContent
                    key={index}
                    strMealThumb={strMealThumb}
                    strArea={strArea}
                    strMeal={strMeal}
                    idMeal={idMeal}
                  />
                )
              )}
          </div>
        </div>
      </div>

      {/* Background */}
      {/* <div className="hm-bgCover">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="b">
              <stop offset="0%" stop-color="#4accc5" />
              <stop offset="50%" stop-color="#d8ffff" />
              <stop offset="100%" stop-color="#fff" />
            </linearGradient>
            <clipPath id="a">
              <path
                fill="currentColor"
                d="M785 687q-69 187-291 197T198 697q-74-197 21.5-357.5t304-201Q732 98 793 299t-8 388Z"
              />
            </clipPath>
          </defs>
          <g clip-path="url(#a)">
            <path
              fill="url(#b)"
              d="M785 687q-69 187-291 197T198 697q-74-197 21.5-357.5t304-201Q732 98 793 299t-8 388Z"
            />
          </g>
        </svg>
      </div> */}

      {/* Modal: Area */}
      <div
        className="modal fade"
        id="areaModal"
        aria-labelledby="areaModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="areaModalLabel">
                Area title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Category */}
      <div
        className="modal fade"
        id="categoryModal"
        aria-labelledby="categoryModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="categoryModalLabel">
                Category title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal: Filter */}
      <div
        className="modal fade"
        id="filterModal"
        aria-labelledby="filterModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="filterModalLabel">
                filter title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GridItemContent({
  strMealThumb,
  strArea,
  strMeal,
  idMeal,
}: {
  strMealThumb: string;
  strArea: string;
  strMeal: string;
  idMeal: string;
}) {
  // console.log(item)
  const [color, setColor] = useState<string>("");

  useEffect(() => {
    let filteredItems = AreaArray.filter(
      (item) => item.strArea.toLowerCase() === strArea.toLowerCase()
    )[0];
    setColor(filteredItems.btnHover);
  }, [strArea]);
  return (
    <div
      className="hm-gridItem"
      style={{
        backgroundColor: color,
      }}
    >
      <Link
        className="hm-links"
        href={{
          pathname: idMeal,
          query: {
            color,
          },
        }}
      >
        <div
          className="hm-cover"
          style={{
            backgroundImage: `url(${strMealThumb})`,
          }}
        >
          {/* Cover of Item */}
          <div
            className="hm-slideCover"
            style={{
              backgroundColor: color,
            }}
          ></div>

          {/* Content */}
          <div className="gridItem-content">
            <h1>{strMeal}</h1>
            <p
              style={{
                backgroundColor: color,
              }}
            >
              {strArea}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
