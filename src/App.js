import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import Header from './components/Header';
import Filter from './components/Filter';
import RecipeCard from './components/RecipeCard';
import { items } from './data'
import { useState } from 'react';

function App() {
  const [itemsList, setItemsList] = useState(items)
  // get unique category
  const uniqueCategory = ["الكل", ...new Set(items.map((item) => item.category))]
  // filter category
  const filterCategory = (cat) => {
    if (cat === "الكل") {
      setItemsList(items)
    } else {
      const CategoryButtons = items.filter((item) => item.category === cat)
      setItemsList(CategoryButtons)
    }
  }
  // search by input
  const Searchbyinput = (word) => {
    if (word !== "") {
      const SearchWord = items.filter((item) => item.title === word)
      setItemsList(SearchWord)
    }
  }
  return (
    <div className="App">
      <NavbarComp Searchbyinput={Searchbyinput} />
      <Header />
      <Filter filterCategory={filterCategory} uniqueCategory={uniqueCategory} />
      <RecipeCard itemsList={itemsList} />
    </div>
  );
}

export default App;
