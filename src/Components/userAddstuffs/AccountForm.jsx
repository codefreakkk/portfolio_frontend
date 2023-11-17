import React from "react";

function AccountForm() {
  return (
    <>
      <div class="col-xl-12">
        <div className="mb-3"></div>
        <form>
          <div class="mb-3">
            <label for="formrow-firstname-input" class="form-label">
              Username
            </label>
            <input
              type="text"
              class="form-control input-border"
              id="formrow-firstname-input"
              placeholder="Username"
            />
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-email-input" class="form-label">
                  Full name
                </label>
                <input
                  type="text"
                  class="form-control input-border"
                  id="formrow-email-input"
                  placeholder="Enter Your Full Name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-password-input" class="form-label">
                  Email
                </label>
                <input
                  type="text"
                  class="form-control input-border"
                  id="formrow-password-input"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
          </div>

          {/* <div className="mt-4 mb-2">
            <h5 className="primary-color">Change Username</h5>
          </div> */}

          <div class="mb-3">
            <label for="formrow-firstname-input" class="form-label">
              Password
            </label>
            <input
              type="text"
              class="form-control input-border"
              id="formrow-firstname-input"
              placeholder="password"
            />
          </div>

          <div className="">
          <input data-repeater-create type="button" class="btn btn-success mt-3 mt-lg-0" value="Save"/>
          </div>
        </form>
      </div>
    </>
  );
}

export default AccountForm;
