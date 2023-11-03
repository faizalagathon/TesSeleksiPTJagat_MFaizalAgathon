import { useEffect } from "react";

const AdminDashboard = () => {
  useEffect(() => {
    if (
      !localStorage.getItem("user-info") &&
      !JSON.parse(localStorage.getItem("user-info")).success
    ) {
      return navigate("/login");
    }
    if (!JSON.parse(localStorage.getItem("user-info")).data.role == "admin") {
      return navigate("/");
    }
  }, []);

  return (
    <>
      
    </>
  );
};

export default AdminDashboard;
