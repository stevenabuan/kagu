import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.jsx";
import Navigation from "./routes/navigation/navigation.jsx";
import SignInForm from "./routes/sign-in/sign-in.jsx";
import SignUpForm from "./components/sign-up-form/sign-up-form.jsx";
import Shop from "./routes/shop/shop.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="shop" element={<Shop />}></Route>
        <Route path="signin" element={<SignInForm />}></Route>
        <Route path="signup" element={<SignUpForm />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
