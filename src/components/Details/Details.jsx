import React, { useContext, useEffect } from "react";
import "./details.css";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";


const Details = () => {
  const { id } = useParams();
  const { recipeData, setRecipeData , favoritesArray , setFavoritesArray , addFavorites} = useContext(GlobalContext);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await res.json();
        setRecipeData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (!recipeData || !recipeData.data || !recipeData.data.recipe) {
  return <div>Loading...</div>;
  }

  const recipe = recipeData.data.recipe;


  return (
    <div className="container">
      <div className="image">
        <img src={recipe.image_url} alt="" />
      </div>
      <div className="details">
        <div className="summary">
          <span>{recipe.publisher}</span>
          <p>{recipe.title}</p>
          <button onClick={() => addFavorites(recipe)}>
            { favoritesArray.findIndex(item => item.id === recipe.id) === -1 ? 'Add to favorites' : 'Remove from favorites'}
          </button>
        </div>
        <div className="ingredients">
          <h1>Ingredients:</h1>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li>
                {ingredient.quantity} {ingredient.unit} {ingredient.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
