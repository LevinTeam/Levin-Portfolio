import React, { useState, useRef } from "react";
import { toast } from "react-hot-toast";
import "./Login.css";
import { Helmet } from "react-helmet";
import Configs from "../../Private/Configs/Configs";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function Login() {
  const [isActive, setIsActive] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [registerPhoneNumber, setRegisterPhoneNumber] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerUserFirstName, setRegisterUserFirstName] = useState("");
  const [registerUserLastName, setRegisterUserLastName] = useState("");

  const active = () => {
    setIsActive(true);
  };
  const deactive = () => {
    setIsActive(false);
  };

  const [inputType, setInputType] = useState("password");
  const inputRef = useRef(null);

  const showPassword = () => {
    setInputType((prevType) => (prevType === "text" ? "password" : "text"));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (typeof password == "string") {
      axios.post(`${Configs.API_URL}/api/v${Configs.API_VERSION}/${Configs.API_ROUTE.USER}/login`, {
        PhoneNumber: phoneNumber,
        Password: password
      }, {
        headers: {
          authorization: Configs.API_KEY
        }
      }).then(async response => {
        switch (response.status) {
          case 200:
            console.log(`Account Successfully Loggined for Number : ${response.data.UserData.UserPhoneNumber}`)
            toast('Account Successfully Loggined')
            cookies.set('userToken', response.data.UserToken, { path: '/' })
            return {
              Data: response.data.UserData,
              Token: response.data.UserToken
            }
          break;

          default:break;
        }
      }).catch(async error => {
        switch (error.response.status) {
          case 400:
            console.log(`Error -> Login -> handleLoginSubmit => ${error.response.data.Data}`)
            toast('Account not registred before')
            cookies.set('userToken', "", { path: '/' })
            return {
              Data: error.response.data.Data
            }
          break;

          case 404:
            console.log(`Error -> Login -> handleLoginSubmit => ${error.response.data.Data}`)
            toast('Password incorrect')
            cookies.set('userToken', "", { path: '/' })
            return {
              Data: error.response.data.Data
            }
          break;

          default:break;
        }
      })
    } else {
      toast("password type should be string");
    }

    setInputType("password");
  };

  const handleSingupSubmit = (e) => {
    e.preventDefault();

    if (typeof registerPassword && typeof confirmPassword == "string") {
      if (registerPassword === confirmPassword) {
        axios.post(`${Configs.API_URL}/api/v${Configs.API_VERSION}/${Configs.API_ROUTE.USER}/create`, {
          FirstName: registerUserFirstName,
          LastName: registerUserLastName,
          PhoneNumber: registerPhoneNumber,
          Password: registerPassword
        }, {
          headers: {
            authorization: Configs.API_KEY
          }
        }).then(async response => {
          switch (response.status) {
            case 201:
              console.log(`Account Created for Number: ${response.data.UserData.UserPhoneNumber}`)
              toast('Account Successfully Created')
              cookies.set('userToken', response.data.UserToken, { path: '/' })
              return {
                Data: response.data.UserData,
                Token: response.data.UserToken
              }
            break;

            default:break;
          }
        }).catch(async error => {
          switch (error.response.status) {
            case 400:
              console.log(`Error -> Login -> handleSingupSubmit => ${error.response.data.Data}`)
              toast('This phone number already registred before')
              cookies.set('userToken', "", { path: '/' })
              return {
                Data: error.response.data.Data
              }
            break;

            case 500:
              console.log(`Error -> Login -> handleSingupSubmit => ${error.response.data.Data}`)
              toast('an unknown error happened when creating account')
              cookies.set('userToken', "", { path: '/' })
              return {
                Data: error.response.data.Data
              }
            break;

            case 503:
              console.log(`Error -> Login -> handleSingupSubmit => ${error.response.data.Data}`)
              toast('an server error happened')
              cookies.set('userToken', "", { path: '/' })
              return {
                Data: error.response.data.Data
              }
            break;

            default:break;
          }
        })
      } else {
        toast("password and confirmation password should be match together");
      }
    } else {
      toast("password type should be string");
    }

    setInputType("password");
  };
  return (
    <section className="form-container">
      <Helmet>
        <title> {isActive ? "Signup" : "Login"} </title>
      </Helmet>

      <div className={isActive ? "wrapper active" : "wrapper"}>
        <span className="bg-animate"></span>
        <span className="bg-animate2"></span>

        <div className="form-box login">
          <h2 className="animation" style={{ "--i": 0, "--j": 21 }}>
            {" "}
            ورود{" "}
          </h2>
          <form onSubmit={handleLoginSubmit}>
            <div
              className="input-box animation"
              style={{ "--i": 1, "--j": 22 }}
            >
              <input
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <label> شماره تلفن </label>
              <i className="bx bxs-phone"></i>
            </div>
            <div className="input-box animation" style={{ "--i": 2 }}>
              <input
                type={inputType}
                value={password}
                ref={inputRef}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label> رمز عبور </label>
              <i className="bx bxs-lock-alt" onClick={showPassword}></i>
            </div>
            <button
              type="submit"
              className="sub-btn animation"
              style={{ "--i": 3, "--j": 20 }}
            >
              {" "}
              ورود{" "}
            </button>
            <div
              className="logreg-link animation"
              style={{ "--i": 4, "--j": 21 }}
            >
              <p>
                {" "}
                تا به حال اکانت نداشته‌اید؟{" "}
                <a href="#" className="register-link" onClick={active}>
                  {" "}
                  ثبت نام{" "}
                </a>{" "}
              </p>
            </div>
          </form>
        </div>

        <div className="info-text login">
          <h2 className="animation" style={{ "--i": 0 }}>
            {" "}
            خوش برگشتید{" "}
          </h2>
          <p className="animation" style={{ "--i": 1 }}>
            {" "}
            مشتاق دیدار دوباره با شما بودیم :){" "}
          </p>
        </div>

        <div className="form-box register">
          <h2 className="animation" style={{ "--i": 15, "--j": 0 }}>
            {" "}
            ثبت نام{" "}
          </h2>
          <form onSubmit={handleSingupSubmit}>
            <div
              className="input-box animation"
              style={{ "--i": 16, "--j": 1 }}
            >
              <input
                type="text"
                value={registerUserFirstName}
                onChange={(e) => setRegisterUserFirstName(e.target.value)}
                required
              />
              <label>نام</label>
              <i className="bx bx-user-pin"></i>
            </div>
            <div
              className="input-box animation"
              style={{ "--i": 17, "--j": 1 }}
            >
              <input
                type="text"
                value={registerUserLastName}
                onChange={(e) => setRegisterUserLastName(e.target.value)}
                required
              />
              <label>نام خانوادگی</label>
              <i className="bx bxs-user-pin"></i>
            </div>
            <div
              className="input-box animation"
              style={{ "--i": 18, "--j": 1 }}
            >
              <input
                type="number"
                value={registerPhoneNumber}
                onChange={(e) => setRegisterPhoneNumber(e.target.value)}
                required
              />
              <label> شماره تلفن </label>
              <i className="bx bxs-phone"></i>
            </div>
            <div
              className="input-box animation"
              style={{ "--i": 19, "--j": 2 }}
            >
              <input
                type={inputType}
                value={registerPassword}
                ref={inputRef}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
              <label> رمز عبور </label>
              <i className="bx bxs-lock-alt" onClick={showPassword}></i>
            </div>
            <div
              className="input-box animation"
              style={{ "--i": 20, "--j": 3 }}
            >
              <input
                type={inputType}
                value={confirmPassword}
                ref={inputRef}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <label> تکرار رمز عبور </label>
              <i className="bx bxs-lock-alt" onClick={showPassword}></i>
            </div>
            <button
              type="submit"
              className="sub-btn animation"
              style={{ "--i": 21, "--j": 4 }}
            >
              {" "}
              ثبت نام{" "}
            </button>
            <div
              className="logreg-link animation"
              style={{ "--i": 22, "--j": 5 }}
            >
              <p>
                {" "}
                از قبل اکانت دارید؟{" "}
                <a href="#" className="login-link" onClick={deactive}>
                  {" "}
                  ورود{" "}
                </a>{" "}
              </p>
            </div>
          </form>
        </div>

        <div className="info-text register">
          <h2 className="animation" style={{ "--i": 17, "--j": 0 }}>
            {" "}
            خوش آمدید{" "}
          </h2>
          <p className="animation" style={{ "--i": 18, "--j": 1 }}>
            {" "}
            تیم لوین آماده برای ارائه خدمات برنامه نویسی به شما!{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

// const SubmitForm = ({PhoneNumber: PhoneNumber, Password: Password, ConfrimPassword: ConfrimPassword, FirstName: FirstName, LastName: LastName}) => {
//   axios.post(`${Configs.API_URL}:${Configs.API_PORT}/api/v${Configs.API_VERSION}/${Configs.API_ROUTE.USER}/create-comment`, {
//     ApiKey: Configs.API_KEY,
//     PhoneNumber: PhoneNumber,
//   }).then(async response => {
//     switch (response.status) {
//       case 201:
//         if (response.data.Data === "Comment Created") {
//           console.log(`Comment Created with ID: #${response.data.CommentData.CommentID}`)
//           return {
//             Data: response.data.CommentData
//           }
//         }
//       break;

//       default:break;
//     }
//   }).catch(async error => {
//     switch (error.response.status) {
//       case 404:
//         console.log(`Error -> ContactUs => ${error.response.data.Data}`)
//         return {
//           Data: error.response.data.Data
//         }
//       break;

//       case 500:
//         console.log(`Error -> ContactUs => ${error.response.data.Data}`)
//         return {
//           Data: error.response.data.Data
//         }
//       break;

//       default:break;
//     }
//   })
// }
