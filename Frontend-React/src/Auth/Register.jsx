import { Link, useNavigate } from "react-router-dom";
import Header from "../User/Sections/Header";
import Footer from "../User/Sections/Footer";
import InputForm from "../User/Components/InputForm";
import Button from "../User/Components/Button";
import { useEffect, useState } from "react";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info") && JSON.parse(localStorage.getItem('user-info')).success) {
      return navigate("/");
    }
  }, []);

  const handleSubmit = async () => {
    try {
      let item = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      };

      let result = await fetch("http://localhost:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(item),
      });

      result = await result.json();
      localStorage.setItem("user-info", JSON.stringify(result));
      return navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // console.log({ firstName, lastName, email, password });

  return (
    <>
      <Header page="Create Account" />
      <div className="body flex flex-col items-center justify-center mb-[377px]">
        <div className="mb-[29px]">
          <InputForm
            labelName="First Name"
            labelFor="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>
        <div className="mb-[29px]">
          <InputForm
            labelName="Last Name"
            labelFor="lastName"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </div>
        <div className="mb-[29px]">
          <InputForm
            labelName="Email"
            labelFor="email"
            typeInput="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-[41px]">
          <InputForm
            labelName="Password"
            labelFor="password"
            typeInput="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <Button text="Create" onClick={handleSubmit} />
        <Link
          className="text-center text-[#B52225] text-[20px] [line-height:30px] font-[500] border-b-[3px] border-[#B52225] px-[7.5px] pb-[4px]"
          to="/login"
        >
          Login
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Register;
