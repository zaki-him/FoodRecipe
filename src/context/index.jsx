import React, { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [search, setSearch] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [recipeData, setRecipeData] = useState({});
  const [favoritesArray, setFavoritesArray] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );
      const data = await response.json();

      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        setSearch("");
        navigate("/");
      }

      console.log(data);
    } catch (error) {
      setSearch("");
      console.log(error);
    }
  };

  const addFavorites = (currentItem) => {
    const copyFavorites = [...favoritesArray];
    const index = copyFavorites.findIndex(
      item => item.id === currentItem.id
    )
    if (index === -1) {
      copyFavorites.push(currentItem);
    } else {
      copyFavorites.splice(index);
    }
    setFavoritesArray(copyFavorites);

    localStorage.setItem('favorites', JSON.stringify(copyFavorites));
  };

  console.log(favoritesArray);
  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        handleSubmit,
        recipeList,
        recipeData,
        setRecipeData,
        favoritesArray,
        setFavoritesArray,
        addFavorites
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
