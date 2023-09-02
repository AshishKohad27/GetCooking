import { GoFilter } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

export default function HomePage() {
  return (
    <div
      className="hm-outer"
      style={{
        backgroundImage: `url(${"/images/singlepage-cover.png"})`,
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
              <GoFilter />
            </div>
          </div>

          <div className="hm-grid">
            <div className="hm-gridItem">
              <Link className="hm-links" href="/id">
                <div
                  className="hm-cover"
                  style={{
                    backgroundImage: `url(${"images/food.jpg"})`,
                  }}
                >
                  {/* Cover of Item */}
                  <div className="hm-slideCover"></div>
                  {/* Content */}
                  <div className="gridItem-content">
                    <h1>Traditional spare ribs baked</h1>
                    <p>Italian</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="hm-gridItem">
              <Link className="hm-links" href="/id">
                <div
                  className="hm-cover"
                  style={{
                    backgroundImage: `url(${"images/food.jpg"})`,
                  }}
                >
                  {/* Cover of Item */}
                  <div className="hm-slideCover"></div>
                  {/* Content */}
                  <div className="gridItem-content">
                    <h1>Traditional spare ribs baked</h1>
                    <p>Italian</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="hm-gridItem">
              <Link className="hm-links" href="/id">
                <div
                  className="hm-cover"
                  style={{
                    backgroundImage: `url(${"images/food.jpg"})`,
                  }}
                >
                  {/* Cover of Item */}
                  <div className="hm-slideCover"></div>
                  {/* Content */}
                  <div className="gridItem-content">
                    <h1>Traditional spare ribs baked</h1>
                    <p>Italian</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="hm-gridItem">
              <Link className="hm-links" href="/food">
                <div
                  className="hm-cover"
                  style={{
                    backgroundImage: `url(${"images/food.jpg"})`,
                  }}
                >
                  {/* Cover of Item */}
                  <div className="hm-slideCover"></div>
                  {/* Content */}
                  <div className="gridItem-content">
                    <h1>Traditional spare ribs baked</h1>
                    <p>Italian</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="hm-bgCover">
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
      </div>
    </div>
  );
}
