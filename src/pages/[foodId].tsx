import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";

let payload = {
  idMeal: "52771",
  strMeal: "Spicy Arrabiata Penne",
  strDrinkAlternate: null,
  strCategory: "Vegetarian",
  strArea: "Italian",
  strInstructions:
    "Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes.\r\nIn a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes. Add the chopped tomatoes, red chile flakes, Italian seasoning and salt and pepper to taste. Bring to a boil and cook for 5 minutes. Remove from the heat and add the chopped basil.\r\nDrain the pasta and add it to the sauce. Garnish with Parmigiano-Reggiano flakes and more basil and serve warm.",
  strMealThumb:
    "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
  strTags: "Pasta,Curry",
  strYoutube: "https://www.youtube.com/watch?v=1IszT_guI08",
  strIngredient1: "penne rigate",
  strIngredient2: "olive oil",
  strIngredient3: "garlic",
  strIngredient4: "chopped tomatoes",
  strIngredient5: "red chile flakes",
  strIngredient6: "italian seasoning",
  strIngredient7: "basil",
  strIngredient8: "Parmigiano-Reggiano",
  strIngredient9: "",
  strIngredient10: "",
  strIngredient11: "",
  strIngredient12: "",
  strIngredient13: "",
  strIngredient14: "",
  strIngredient15: "",
  strIngredient16: null,
  strIngredient17: null,
  strIngredient18: null,
  strIngredient19: null,
  strIngredient20: null,
  strMeasure1: "1 pound",
  strMeasure2: "1/4 cup",
  strMeasure3: "3 cloves",
  strMeasure4: "1 tin ",
  strMeasure5: "1/2 teaspoon",
  strMeasure6: "1/2 teaspoon",
  strMeasure7: "6 leaves",
  strMeasure8: "spinkling",
  strMeasure9: "",
  strMeasure10: "",
  strMeasure11: "",
  strMeasure12: "",
  strMeasure13: "",
  strMeasure14: "",
  strMeasure15: "",
  strMeasure16: null,
  strMeasure17: null,
  strMeasure18: null,
  strMeasure19: null,
  strMeasure20: null,
  strSource: null,
  strImageSource: null,
  strCreativeCommonsConfirmed: null,
  dateModified: null,
};

export default function SinglePage() {
  const [steps, setSteps] = useState();
  const [bookMark, setBookMark] = useState(false);
  const [tabActive, setTabActive] = useState("ingridents");
  const router = useRouter();
  // console.log("router:", router);
  const { foodId } = router.query;
  // console.log("router:", foodId);

  return (
    <div
      className="single-outer"
      style={{
        backgroundImage: `url(${"/images/singlepage-cover.png"})`,
      }}
    >
      <div className="site-container">
        <div className="single-inner">
          {/* Header of Single Page */}
          <div className="single-header">
            <div className="single-tabsheader">
              <span>
                <Link href="/">Home</Link>
              </span>

              <BiChevronRight />

              <span>{foodId}</span>
            </div>
            <div>
              <BsBookmarkFill
                onClick={() => setBookMark(!bookMark)}
                className={bookMark ? "isbookmark" : ""}
              />
            </div>
          </div>
          {/* Background Image */}
          <div
            className="single-bgCover"
            style={{
              // backgroundImage: `url(${"/images/food.jpg"})`,
              backgroundImage: `url(${payload.strMealThumb})`,
            }}
          >
            <h1>{payload.strMeal}</h1>
            {/* Category */}

            
            <div className="tool-cover tool-cat">{payload.strCategory}</div>
            {/* Area */}
            <div className="tool-cover tool-area">{payload.strArea}</div>
          </div>

          {/* Tags/Category/Area */}
          <div className="single-tool">
            {/* Tags */}
            <div className="tool-tag-title">Tags</div>
            <div className="tags-container">
              {payload.strTags.split(",").map((item: string, index: number) => (
                <div className="tool-tags" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* ingridents / Procedure */}
          <div className="tabs-ingpro">
            <div
              className={`tabs-btn 
            ${tabActive === "ingridents" ? "tabs--active" : ""}`}
              onClick={() => setTabActive("ingridents")}
            >
              <h1>Ingridents</h1>
            </div>
            <div
              className={`tabs-btn 
                  ${tabActive === "procedure" ? "tabs--active" : ""}`}
              onClick={() => setTabActive("procedure")}
            >
              <h1>Procedure</h1>
            </div>
            <div
              className={`tabs-btn 
                  ${tabActive === "video" ? "tabs--active" : ""}`}
              onClick={() => setTabActive("video")}
            >
              <h1>Video</h1>
            </div>
          </div>

          {/* ingridents Box  */}
          <div className="ingpro-container">
            {tabActive === "ingridents" ? (
              <IngridentsContain />
            ) : tabActive === "procedure" ? (
              <ProcedureContain />
            ) : (
              "Video Recipes"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function IngridentsContain() {
  return (
    <div className="ingridents-grid">
      <div className="ingridents-gridItem">
        <div
          className="ingridents-cover"
          style={{
            backgroundImage: `url(${"/images/lime.png"})`,
          }}
        >
          <h1>500g</h1>
        </div>
        <div className="ingridents-content">
          <div className="ing-img">
            <img src="/images/lime.png" alt="" />
          </div>
          <h1>Lime</h1>
          <p>500g</p>
        </div>
      </div>
      <div className="ingridents-gridItem">
        <div
          className="ingridents-cover"
          style={{
            backgroundImage: `url(${"/images/lime.png"})`,
          }}
        >
          <h1>500g</h1>
        </div>
        <div className="ingridents-content">
          <div className="ing-img">
            <img src="/images/lime.png" alt="" />
          </div>
          <h1>Lime</h1>
          <p>500g</p>
        </div>
      </div>
      <div className="ingridents-gridItem">
        <div
          className="ingridents-cover"
          style={{
            backgroundImage: `url(${"/images/lime.png"})`,
          }}
        >
          <h1>500g</h1>
        </div>
        <div className="ingridents-content">
          <div className="ing-img">
            <img src="/images/lime.png" alt="" />
          </div>
          <h1>Lime</h1>
          <p>500g</p>
        </div>
      </div>
    </div>
  );
}

function ProcedureContain() {
  return (
    <ul className="procedure-list ">
      {payload.strInstructions.split(".").map((item: string, index: number) => (
        <li className="listItem">
          <h1>Step {index + 1}</h1>
          <p>{item}.</p>
        </li>
      ))}
    </ul>
  );
}
