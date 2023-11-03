import { Link, useNavigate } from "react-router-dom";
import Button from "../User/Components/Button";
import InputForm from "../User/Components/InputForm";
import Header from "../User/Sections/Header";
import Footer from "../User/Sections/Footer";
import { useEffect, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info") && JSON.parse(localStorage.getItem("user-info")).success) {
      return navigate("/");
    }
  }, []);

  const handleSubmit = async () => {
    try {
      let item = {
        email: email,
        password: password,
      };

      let result = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });

      result = await result.json().then((result) => {
        if (!result.success) return alert(result.message);
        console.log('result: ',result.data.role);
        localStorage.setItem("user-info", JSON.stringify(result));
        if (result.data.role == 'admin') return navigate('/admin')
        return navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header page="Login" />
      <div className="body flex flex-col items-center justify-center mb-[377px]">
        <div className="mb-[29px]">
          <InputForm
            labelName="Email"
            labelFor="email"
            typeInput="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-[41px]">
          <InputForm
            labelName="Password"
            labelFor="pass"
            typeInput="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button text="Sign in" onClick={handleSubmit} />
        <Link
          className="text-center text-[#B52225] text-[20px] [line-height:30px] font-[500] border-b-[3px] border-[#B52225] px-[7.5px] pb-[4px] font-poppins"
          to="/register"
        >
          Create account
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Login;
