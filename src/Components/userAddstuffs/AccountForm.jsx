import React, { useState } from "react";
import { updateAccountDetails } from "../../api/UserApi";

function AccountForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  // check empty fields
  function checkEmptyFields() {
    if (!username || !password || !password) {
      return false;
    } else {
      return true;
    }
  }

  async function submitForm() {
    // check empty fields
    if (!checkEmptyFields()) {
      alert("Please fill all fields");
      return;
    }
    // check if password matches
    if (password != cpassword) {
      alert("Password does not match");
      return;
    }

    // submit form
    const result = await updateAccountDetails({
      u_name: username,
      u_password: password,
    });
    const data = result.data;
    if (data != null && data.success) {
      console.log(data);
    } else {
      console.log(data);
    }
  }

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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-email-input" class="form-label">
                  Password
                </label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  class="form-control input-border"
                  id="formrow-email-input"
                  placeholder="Enter Your Full Name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-password-input" class="form-label">
                  Confirm Password
                </label>
                <input
                  type="text"
                  value={cpassword}
                  onChange={(e) => setCPassword(e.target.value)}
                  class="form-control input-border"
                  id="formrow-password-input"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
          </div>

          <div className="">
            <input
              data-repeater-create
              type="button"
              class="btn btn-success mt-3 mt-lg-0"
              value="Save"
              onClick={submitForm}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default AccountForm;
