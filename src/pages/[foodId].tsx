import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BsBookmarkFill } from "react-icons/bs";
import { BiChevronRight } from "react-icons/bi";
import food from "../../food.json";

type data = {
  idMeal?: string | null;
  strMeal?: string | null;
  strDrinkAlternate?: string | null;
  strCategory?: string | null;
  strArea?: string | null;
  strInstructions?: string | null;
  strTags?: string | null;
  strYoutube?: string | null;
  strIngredient1?: string | null;
  strIngredient2?: string | null;
  strIngredient3?: string | null;
  strIngredient4?: string | null;
  strIngredient5?: string | null;
  strIngredient6?: string | null;
  strIngredient7?: string | null;
  strIngredient8?: string | null;
  strIngredient9?: string | null;
  strIngredient10?: string | null;
  strIngredient11?: string | null;
  strIngredient12?: string | null;
  strIngredient13?: string | null;
  strIngredient14?: string | null;
  strIngredient15?: string | null;
  strIngredient16?: string | null;
  strIngredient17?: string | null;
  strIngredient18?: string | null;
  strIngredient19?: string | null;
  strIngredient20?: string | null;
  strMeasure1?: string | null;
  strMeasure2?: string | null;
  strMeasure3?: string | null;
  strMeasure4?: string | null;
  strMeasure5?: string | null;
  strMeasure6?: string | null;
  strMeasure7?: string | null;
  strMeasure8?: string | null;
  strMeasure9?: string | null;
  strMeasure10?: string | null;
  strMeasure11?: string | null;
  strMeasure12?: string | null;
  strMeasure13?: string | null;
  strMeasure14?: string | null;
  strMeasure15?: string | null;
  strMeasure16?: string | null;
  strMeasure17?: string | null;
  strMeasure18?: string | null;
  strMeasure19?: string | null;
  strMeasure20?: string | null;
  strSource?: string | null;
  strImageSource?: string | null;
  strCreativeCommonsConfirmed?: string | null;
  dateModified?: string | null;
};

export default function SinglePage() {
  const [data, setData] = useState<data>({
    idMeal: "",
    strMeal: "",
    strDrinkAlternate: "",
    strCategory: "",
    strArea: "",
    strInstructions: "",
    strTags: "",
    strYoutube: "",
    strIngredient1: "",
    strIngredient2: "",
    strIngredient3: "",
    strIngredient4: "",
    strIngredient5: "",
    strIngredient6: "",
    strIngredient7: "",
    strIngredient8: "",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "",
    strMeasure2: "",
    strMeasure3: "",
    strMeasure4: "",
    strMeasure5: "",
    strMeasure6: "",
    strMeasure7: "",
    strMeasure8: "",
    strMeasure9: "",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: "",
    strMeasure17: "",
    strMeasure18: "",
    strMeasure19: "",
    strMeasure20: "",
    strSource: "",
    strImageSource: "",
    strCreativeCommonsConfirmed: "",
    dateModified: "",
  });

  const [steps, setSteps] = useState();
  const [bookMark, setBookMark] = useState(false);
  const [tabActive, setTabActive] = useState("ingridents");
  const router = useRouter();
  // console.log("router:", router);
  const { foodId, color } = router.query;
  // console.log("router:", color);

  useEffect(() => {
    let filter = food.filter((item) => item.idMeal === foodId)[0];
    // console.log("filter:", filter);
    setData(filter);
  }, [foodId]);
  // console.log("Data:", data);
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
            <div className="single-breadcrums">
              <span>
                <Link href="/">Home</Link>
              </span>
              <BiChevronRight />
              <span>{data.strArea}</span>
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
              // backgroundImage: `url(${data.strMealThumb})`,
            }}
          >
            <h1>{data.strMeal}</h1>
            {/* Category */}
            <div className="tool-cover tool-cat">{data.strCategory}</div>
            {/* Area */}
            <div className="tool-cover tool-area">{data.strArea}</div>
          </div>

          {/* Tags/Category/Area */}
          <div className="single-tool">
            {/* Tags */}
            <div className="tool-tag-title">Tags</div>
            <div className="tags-container">
              {/* {data &&
                data.strTags.split(",").map((item?: string, index: number) => (
                  <div className="tool-tags" key={index}>
                    {item}
                  </div>
                ))} */}
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
      {/* {data &&
        data.strInstructions.split(".").map((item?: string, index: number) => (
          <li className="listItem">
            <h1>Step {index + 1}</h1>
            <p>{item}.</p>
          </li>
        ))} */}
    </ul>
  );
}
