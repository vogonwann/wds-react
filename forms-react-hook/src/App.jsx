import { FormGroup } from "./FormGroup";
import ReactSelect from "react-select";
import { useRef, useState } from "react";
import "./styles.css";
import { checkCountry, checkEmail, checkPassword } from "./validators";
import { useForm } from "react-hook-form";

const COUNTRY_OPTIONS = [
  { label: "United States", value: "US" },
  { label: "India", value: "IN" },
  { label: "Mexico", value: "MX" },
];

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const emailRef = useRef();
  const passwordRef = useRef();
  const countryRef = useRef();
  console.log(errors);

  // const [emailErrors, setEmailErrors] = useState([]);
  const [passwordErrors, setPasswordErrors] = useState([]);
  const [countryErrors, setCountryErrors] = useState([]);

  function onSubmit(data) {
    console.log(data);
    alert("Success");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <FormGroup errorMessage={errors?.email?.message}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          className="input"
          type="email"
          id="email"
          {...register("email", {
            required: true,
            validate: (value) => {
              if (!value.endsWith("@webdevsimplified.com")) {
                return "Email must be from webdevsimplified.com";
              }
            },
          })}
        />
      </FormGroup>
      <FormGroup errors={passwordErrors}>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          className="input"
          type="password"
          id="password"
          ref={passwordRef}
        />
      </FormGroup>
      <FormGroup errors={countryErrors}>
        <label className="label" htmlFor="country">
          Country
        </label>
        <ReactSelect
          isClearable
          classNamePrefix="react-select"
          id="country"
          ref={countryRef}
          options={COUNTRY_OPTIONS}
        />
      </FormGroup>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;
