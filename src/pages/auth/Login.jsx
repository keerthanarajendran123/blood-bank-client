import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="row g-0">
          <div className="col-md-8 form-banner">
            <img src="./assets/images/banner1.jpg" alt="loginImage"/>
          </div>
          <div className="col-md-4 form-container" style={{backgroundColor:"#000",color:"#fff"}}>
            <Form
              formTitle={"Login Page"}
              submitBtn={"Login"}
              formType={"login"}
            />
            <div className="default-credentials">
              <p>Default credentials for testing:</p>
              <p>Donar: donar@donar.com | Password: 123456</p>
              <p>Organisation: org@org.com | Password: 123456</p>
              <p>Admin: admin@admin.com | Password: 123456</p>
              <p>Hospital: hospital@hospital.com | Password: 123456</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
