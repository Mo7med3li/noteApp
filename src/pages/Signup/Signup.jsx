import { useFormik } from "formik";
import signupImg from "../../assets/imgs/register.png";
import { number, object, string } from "yup";
export default function Signup() {
  const phoneRegex = /^(02)?01[0125][0-9]{8}$/;
  const validationSchema = object({
    name: string().required("Name is required"),
    email: string().email("Email is invalid").required("Email is required"),
    password: string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    age: number().required("Age is required"),
    phone: string().required("Phone is required").matches(phoneRegex),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      age: "",
      phone: "",
    },
    validationSchema,
  });
  return (
    <>
      <section className="grid grid-cols-6  gap-10 ">
        <div className="lg:grid col-span-2  hidden">
          <img src={signupImg} alt="" />
        </div>
        <form
          action=""
          className=" shadow-lg space-y-5 grid col-span-6 p-10 lg:col-span-4"
        >
          <h1 className="text-4xl font-bold text-center">Signup Now</h1>
          <div className="name ">
            <input
              type="text"
              placeholder="Enter your Name"
              className="form-input pb-4"
              value={formik.values.name}
              onChange={formik.handleChange}
              name="name"
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 ">*{formik.errors.name}</p>
            )}
          </div>
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
          <div className="age">
            <input
              type="number"
              placeholder="Enter your Age"
              className="form-input pb-4"
              value={formik.values.age}
              onChange={formik.handleChange}
              name="age"
              onBlur={formik.handleBlur}
            />
            {formik.touched.age && formik.errors.age && (
              <p className="text-red-500 ">*{formik.errors.age}</p>
            )}
          </div>{" "}
          <div className="phone">
            <input
              type="tel"
              placeholder="Enter your Phone"
              className="form-input pb-4"
              value={formik.values.phone}
              onChange={formik.handleChange}
              name="phone"
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-500 ">*{formik.errors.phone}</p>
            )}
          </div>
          <button type="submit" className="btn">
            Signup
          </button>
        </form>
      </section>
    </>
  );
}
