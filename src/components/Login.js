import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidEmail, checkValidName, checkValidPassword } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BACKGROUD_IMAGE, PROFILE_AVATAR} from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const testEmail = "test123@gmail.com";
  const testPassword = "Password@123";

  const handleButtonClick = () => {
    //validate the user
    const validMail = checkValidEmail(email.current.value);
    const validPassword = checkValidPassword(password.current.value);
    const validFullName = checkValidName(fullName?.current?.value);

    let errorMessage = null;
    if(!validMail || !validPassword){
      errorMessage = "Email or Password is not valid";
    }
    if(!validFullName && !isSignInForm) {
      errorMessage = "Please enter a valid name";
    }
    setErrorMessage(errorMessage);
    if(errorMessage) return;

    if(!isSignInForm){
      //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: fullName?.current?.value,
            photoURL: PROFILE_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode, "-", errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode, "-", errorMessage);
        });
    }
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover md:w-screen"
          src={BACKGROUD_IMAGE}
          alt="Background"
        />
      </div>
      <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-xl md:text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          value={testEmail}
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          value={testPassword}
          ref={password}
          type="password"
          placeholder={isSignInForm ? "Enter Password" : "Set Password"}
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          type="button"
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <>
              <>New to Netflix? </>
              <span className="text-red-800 font-bold">Sign Up</span> <>Now</>
            </>
          ) : (
            <>
              Already a User? Sign In
              <span className="text-red-800 font-bold"> Here</span>
            </>
          )}
        </p>
        {isSignInForm && (
          <>
            {/* <p>For demo purposes:</p>
            <p>Email: test123@gmail.com</p>
            <p>Password: Password@123</p> */}
          </>
        )}
      </form>
    </div>
  );
}

export default Login;