import React from "react";
import logo from "../../assets/homePageAssets/hexagon.png";
import background from "../../assets/images/profile-img.png";
import { NavLink } from "react-router-dom";

function SignupComponent() {
  return (
    <>
      <div class="account-pages my-5 pt-sm-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6 col-xl-5">
              <div class="card overflow-hidden">
                <div class="bg-primary bg-soft">
                  <div class="row">
                    <div class="col-7">
                      <div class="text-primary p-4">
                        <h5 class="text-primary">Welcome Back !</h5>
                        <p>Sign in to continue to Skote.</p>
                      </div>
                    </div>
                    <div class="col-5 align-self-end">
                      <img src={background} alt="" class="img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="card-body pt-0">
                  <div class="auth-logo">
                    <a class="auth-logo-dark">
                      <div class="avatar-md profile-user-wid mb-4">
                        <span class="avatar-title rounded-circle bg-light">
                          <img
                            src={logo}
                            alt=""
                            class="rounded-circle"
                            height="34"
                          />
                        </span>
                      </div>
                    </a>
                  </div>
                  <div class="p-2">
                    <form class="form-horizontal">
                      <div class="mb-3">
                        <label for="username" class="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          class="form-control border"
                          id="username"
                          placeholder="Enter username"
                        />
                      </div>

                      <div class="mb-3">
                        <label class="form-label">Password</label>
                        <div class="input-group auth-pass-inputgroup">
                          <input
                            type="password"
                            class="form-control border"
                            placeholder="Enter password"
                            aria-label="Password"
                            aria-describedby="password-addon"
                          />
                          <button
                            class="btn btn-light"
                            type="button"
                            id="password-addon"
                          >
                            <i class="mdi mdi-eye-outline"></i>
                          </button>
                        </div>
                      </div>

                      <div class="mb-3">
                        <label class="form-label">Confirm Password</label>
                        <div class="input-group auth-pass-inputgroup">
                          <input
                            type="password"
                            class="form-control border"
                            placeholder="Enter password"
                            aria-label="Password"
                            aria-describedby="password-addon"
                          />
                          <button
                            class="btn btn-light"
                            type="button"
                            id="password-addon"
                          >
                            <i class="mdi mdi-eye-outline"></i>
                          </button>
                        </div>
                      </div>

                      <div class="mt-3 d-grid">
                        <button
                          class="btn btn-primary waves-effect waves-light"
                          type="submit"
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="mt-5 text-center">
                <div>
                  <p>
                    Already have an account ?{" "}
                    <a class="fw-medium text-primary">
                      {" "}
                      <NavLink to="/login">Login now </NavLink>
                    </a>{" "}
                  </p>
                  <p>© 2023 • Devsinfo.in</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignupComponent;
