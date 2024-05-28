import { useState } from "react";
import { Link,useNavigate  } from "react-router-dom";
import GAuth from "../components/GAuth";

export default function SignUp() {
  const [formData, setFormdata] = useState({});
  const [onSubmit, setOnSubmit] = useState(false);
  const [error, setError] = useState("");
  const navigate=useNavigate()
  const handleChange = (e) => {
    setFormdata({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setOnSubmit(true);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setOnSubmit(false);
        return;
      }
      setOnSubmit(false);
      setOnSubmit(null);
      navigate('/Sign-In')
    } catch (error) {
      setOnSubmit(false);
      setError(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border rounded-lg p-2"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border rounded-lg p-2"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border rounded-lg p-2"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={onSubmit}
          className="bg-slate-700 text-white border rounded-lg p-2 uppercase hover:opacity-95 disabled:opacity-80"
        >
          {onSubmit ? "loading ..." : "sign up  "}
        </button>
        <GAuth/>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/Sign-In"}>
          <span className="text-blue-700">sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-700 mt-5">{error}</p>}
    </div>
  );
}
