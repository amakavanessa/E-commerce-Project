import { Outlet } from "react-router-dom";
import Categories from "../../components/Categories/categories.component";
import Footer from "../../components/footer/footer.component";

const Home = () => {
  return (
    <div>
      <Categories />;
      <Footer />
      <Outlet />
    </div>
  );
};

export default Home;
