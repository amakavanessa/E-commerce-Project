import { Routes, Route } from 'react-router-dom';
import Home from './Routes/home/home.component';
import NavBar from './Routes/navigation/navigation.component';
import Authentication from './Routes/authentication/authentication.component';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
