import { Link, useNavigate } from "react-router-dom";
import ProdukItem from "../Components/ProdukItem";
import Footer from "../Sections/Footer";
import { Carousel, Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [openLogoutMenu, setOpenLogoutMenu] = useState(false);
  const [barangAPI, setBarangAPI] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const formatter = new Intl.NumberFormat("id-ID");

  const fetchBarang = async () => {
    try {
      let res = await axios.get("http://localhost:8000/api/barang");
      setBarangAPI(res.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem('user-info')).success) {
      return navigate("/login");
    }
    fetchBarang();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user-info");
    return navigate("/login");
  };

  return (
    <>
      <section className="hero h-[1024px] relative mb-[101px] font-poppins">
        <Carousel autoplay autoplayDelay={5000} prevArrow="" nextArrow="">
          <img
            src="img/hero-img-1.png"
            alt="Hero Image"
            className="w-full h-full object-cover object-center"
          />
          <img
            src="img/hero-img-1.png"
            alt="Hero Image"
            className="w-full h-full object-cover object-center"
          />
          <img
            src="img/hero-img-1.png"
            alt="Hero Image"
            className="w-full h-full object-cover object-center"
          />
        </Carousel>
        <nav className="h-[212px] w-full pl-[55px] pr-[109px] text-white flex justify-between items-center absolute top-0 bg-gradient-to-b from-black/75 to-black/0">
          <div className="nav-link flex gap-x-[51px]">
            <Link
              to="/"
              className="font-[500] text-[20px] [line-height:23.87px] w-max"
            >
              SPECIAL DEAL
            </Link>
            <Link
              to="/"
              className="font-[500] text-[20px] [line-height:23.87px]"
            >
              SHOP
            </Link>
            <Link
              to="/"
              className="font-[500] text-[20px] [line-height:23.87px]"
            >
              ABOUT
            </Link>
          </div>
          <div className="nav-actions flex justify-end gap-x-[35px] w-max">
            <img src="svg/search.svg" alt="" />
            <div className="relative">
              <img
                src="svg/profile.svg"
                alt=""
                onClick={() => {
                  setOpenLogoutMenu(!openLogoutMenu);
                }}
                className="cursor-pointer"
              />
              {openLogoutMenu && (
                <div className="bg-black/50 text-white p-4 absolute top-[50px] right-0 rounded-lg w-max">
                  <button
                    onClick={handleLogout}
                    className="py-1 px-2 border-[1px] border-white text-center rounded-md hover:bg-white hover:text-black transition-colors duration-300"
                  >
                    Log Out
                  </button>
                </div>
              )}
            </div>
            <img src="svg/cart.svg" alt="" />
          </div>
        </nav>
        <div className="nav-head h-[212px] absolute top-0 flex flex-col items-center justify-center left-[300px] right-[300px] text-white">
          <h1 className="text-[40px] font-[700] [letter-spacing:0.205em] [line-height:60px] h-[40px]">
            EBLIETHOS
          </h1>
          <h1 className="text-[40px] font-[400] [letter-spacing:0.21em] [line-height:60px]">
            INDONESIA
          </h1>
        </div>
      </section>
      <section className="body px-[102px] mb-[390px]">
        <section className="banner flex justify-center mb-[171px]">
          <img src="img/banner.png" alt="Banner" />
        </section>
        <section className="product-popular">
          <div className="text flex flex-col justify-center items-center mb-[94px]">
            <p className="font-[500] text-[30px] [line-height:45px] mb-[17px] font-poppins">
              Product Popular
            </p>
            <button className="border-[3px] border-[#B52225] text-[#B52225] text-center w-fit font-[400] text-[25px] py-[10px] px-[53px] transition-colors duration-200 hover:bg-[#B52225] hover:text-white font-sfuitext">
              View All
            </button>
          </div>
          {!isLoading ? (
            <div className="produk-list flex flex-wrap gap-x-[105px] gap-y-[94px]">
              {barangAPI.map((item, i) => (
                <ProdukItem
                  key={i}
                  imgUrl={"img/" + item.gambar_barang}
                  name={item.nama_barang}
                  discount={formatter.format(item.harga_barang)}
                  price={formatter.format(item.diskon_barang)}
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center">
              <Spinner className="w-20 h-20" />
            </div>
          )}
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
