import { Outlet } from "react-router-dom";
import Categories from "../../components/Categories/categories.component";

const Home = () => {
  return (
    <div>
      <Categories />
      <Outlet />
    </div>
  );
};

export default Home;
