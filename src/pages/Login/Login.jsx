import { useFormik } from "formik";
import signupImg from "../../assets/imgs/register.png";
import { object, string } from "yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";

export default function Login() {
  let navigate = useNavigate();
  let [exist, setExist] = useState(null);
  async function loginSubmit(values) {
    let tostId = toast.loading("Logging in...");
    try {
      const options = {
        url: "https://note-sigma-black.vercel.app/api/v1/users/signIn",
        method: "POST",
        data: values,
      };
      let { data } = await axios.request(options);
      console.log(data);
      if (data.msg === "done") {
        toast.success("Logged in Successfully");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.msg);
      setExist(error.response.data.msg);
    } finally {
      toast.dismiss(tostId);
    }
  }
  const validationSchema = object({
    email: string().email("Email is invalid").required("Email is required"),
    password: string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: loginSubmit,
  });
  return (
    <>
      <section className="grid grid-cols-6  gap-10 ">
        <div className="lg:grid col-span-2  hidden">
          <img src={signupImg} alt="" />
        </div>
        <form
          className=" shadow-lg space-y-3 grid col-span-6 p-16 lg:col-span-4"
          onSubmit={formik.handleSubmit}
        >
          <h1 className="text-4xl font-bold text-center">Login Now</h1>
          <div className="email ">
            <input
              type="email"
              placeholder="Enter your Email"
              className="form-input pb-4"
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 ">*{formik.errors.email}</p>
            )}
            {exist && <p className="text-red-500 ">*{exist}</p>}
          </div>{" "}
          <div className="password">
            <input
              type="password"
              placeholder="Enter your Password"
              className="form-input pb-4"
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 ">*{formik.errors.password}</p>
            )}
          </div>{" "}
          <button type="submit" className="btn">
            Login
          </button>
          <p className="text-lg">
            Don't have an account yet?{" "}
            <Link className=" underline text-primary " to="/signup">
              Sign up
            </Link>
          </p>
        </form>
      </section>
    </>
  );
}
