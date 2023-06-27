import { Outlet } from "react-router-dom";
import Categories from "../../components/Categories/categories.component";
import Hero from "../../components/hero/hero.component";
const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Outlet />
    </div>
  );
};

export default Home;
