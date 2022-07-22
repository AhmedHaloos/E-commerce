import { useLocation, useNavigate } from "react-router-dom";

const Home = (props) => {
  const location = useLocation();

  const navigate = useNavigate();

  const handleGoToFool = () => {
    // logic
    console.log("LOGIC Done!");
    navigate("/product/fool/22", { replace: true });
  };

  return (
    <>
      <h1>Welcome to Burger King</h1>
      <div onClick={handleGoToFool} className="btn btn-danger">
        Go To Fool
      </div>
    </>
  );
};

export default Home;
