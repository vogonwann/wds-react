import { useRef, useState } from "react";
import "./styles.css";

function App() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    if (email === "" || !email.endsWith("@webdevsimplified.com")) {
      setEmailError("Email must end with @webdevsimplified.com");
    } else {
      setEmailError("");
    }

    if (password === "" || !pattern.test(password)) {
      setPasswordError(
        "Password must contain a number, letter, uppercase letter and special character and be at least 10 characters long"
      );
    } else {
      setPasswordError("");
    }

    setSubmitted(true);
  }

  function passwordChangedHanler(e) {
    if (submitted) {
      const password = e.target.value;
      const pattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{10,})/;

      if (password === "" || !pattern.test(password)) {
        setPasswordError(
          "Password must contain a number, letter, uppercase letter and special character and be at least 10 characters long"
        );
      } else {
        setPasswordError("");
      }
    }
  }

  function emailChangedHanler(e) {
    if (submitted) {
      const email = e.target.value;
      if (email === "" || !email.endsWith("@webdevsimplified.com")) {
        setEmailError("Email must end with @webdevsimplified.com");
      } else {
        setEmailError("");
      }
    }
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className={"form-group " + (emailError !== "" ? "error" : "")}>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            type="email"
            id="email"
            defaultValue="test@test.com"
            ref={emailRef}
            onChange={(e) => {
              emailChangedHanler(e);
            }}
          />
          {emailError !== "" ? <div className="msg">{emailError}</div> : ""}
        </div>
        <div className={"form-group " + (passwordError !== "" ? "error" : "")}>
          <label className="label" htmlFor="password">
            Password
          </label>
          <input
            className="input"
            defaultValue="Password123!"
            type="password"
            id="password"
            ref={passwordRef}
            onChange={(e) => {
              passwordChangedHanler(e);
            }}
          />
          {passwordError ? <div className="msg">{passwordError}</div> : ""}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
