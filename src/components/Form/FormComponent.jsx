import { useState } from "react";
import "./form.scss";
import { Navigate } from "react-router-dom";
import Loader from "../Loader/Loader";

function FormComponent() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmationPassword: "",
    subscribe: false,
  });
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmationPassword, setIsValidConfirmationPassword] =
    useState(true);
  const passwordPattern =
    /^(?=.*[!@#$%^&*()\-_=+{};:,<.>/?[\]'"\\|`~])(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
  const [accessGranted, setAccessGranted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const targetName = event.target.name;
    const targetValue = event.target.value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [targetName]:
        targetName === "subscribe" ? event.target.checked : targetValue,
    }));

    switch (targetName) {
      case "password":
        targetValue && setIsValidPassword(passwordPattern.test(targetValue));
        break;
      case "confirmationPassword":
        targetValue &&
          formData.password &&
          setIsValidConfirmationPassword(formData.password === targetValue);
        break;
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 3000));

    if (formData.email === "email@gmail.com") {
      setAccessGranted(true);
    } else {
      setAccessGranted(false);
    }
    setIsLoading(false);
  };

  return (
    <>
    {isLoading && <Loader />}
      {accessGranted && <Navigate to={"/signup-success"} replace={true} />}
      <form onSubmit={handleFormSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        {!isValidPassword && <p>Your password is too weak</p>}

        <input
          name="confirmationPassword"
          type="password"
          placeholder="Confirm password"
          onChange={handleChange}
          required
        />
        {!isValidConfirmationPassword && <p>Your password doesn't match</p>}

        <div className="subscribe">
          <input
            name="subscribe"
            type="checkbox"
            id="joinNewsletter"
            checked={formData.subscribe}
            onChange={handleChange}
          />
          <label htmlFor="joinNewsletter">I want to join the newsletter</label>
        </div>
        <button>Sign up</button>
      </form>
    </>
  );
}

export default FormComponent;
