import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Spinner } from "react-bootstrap";

const Login = () => {
  document.title = "Login";

  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;

        navigate(from, { replace: true });
        console.log({
          context: "google",
          user,
          email: user.email,
          image: user.photoURL,
          name: user.displayName,
        });
        const payload = {
          email: user.email,
          image: user.photoURL,
          name: user.displayName,
        };
        fetch(`${process.env.REACT_APP_SERVER_BASEURL}/users/login`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(payload),
        })
          .then((res) => res.json())
          .then((data) => {
            setIsLoading(false);
            console.log("logged in successfully.........", data);
            if (data.success) {
              localStorage.setItem("token", data.data.token);
              navigate(from, { replace: true });
            } else {
              console.log("Token not fetched...");
            }
          })
          .catch((error) => console.log(error))
          .finally(() => {
            setIsLoading(false);
          });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        console.log({ result });
        navigate(from, { replace: true });
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="bg-primary w-60 ">
      <h1 className="text-center text-white">Sign In</h1>
      {isLoading ? (
        <div className="text-center">
          <Spinner className="" animation="border" variant="warning" />
        </div>
      ) : (
        ""
      )}
      <Form onSubmit={handleSubmit} className="w-50 w-sm-100 m-auto">
        <Form.Group className="mb-4 text-white" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            className="border-4 border-dark"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-4 text-white" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            className="border-4 border-dark"
            required
          />
        </Form.Group>

        <div className="">
          <Button
            variant="light"
            className="border-4 border-dark me-2"
            type="submit"
          >
            Login
          </Button>

          <Button variant="warning" className="border-4 border-dark">
            <Link to="/register">Register</Link>
          </Button>
          <Form.Text className="text-danger me-4">{error}</Form.Text>
        </div>
      </Form>
      <div className="text-center">
        <h5 className="text-white">Social login</h5>
        <ButtonGroup vertical>
          <Button
            onClick={handleGoogleSignIn}
            className=""
            variant="outline-light"
          >
            {" "}
            <FaGoogle></FaGoogle> Login with Google
          </Button>
          <Button onClick={handleGithubSignIn} variant="outline-light mb-4">
            {" "}
            <FaGithub></FaGithub> Login with Github
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Login;
