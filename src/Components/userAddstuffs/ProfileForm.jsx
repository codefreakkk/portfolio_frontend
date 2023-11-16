import React from "react";

function ProfileForm() {
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
              placeholder="Enter Your User Name"
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

          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-email-input" class="form-label">
                  Company name
                </label>
                <input
                  type="text"
                  class="form-control input-border"
                  id="formrow-email-input"
                  placeholder="Enter Company name"
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-password-input" class="form-label">
                  Work Experience
                </label>
                <input
                  type="text"
                  class="form-control input-border"
                  id="formrow-password-input"
                  placeholder="Enter Work Experience"
                />
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label class="form-label">Description</label>
            <div>
              <textarea
                required
                class="form-control input-border"
                rows="3"
              ></textarea>
            </div>
          </div>

          {/* skill set start */}
          <div className="mb-3">
            <label for="formrow-email-input" class="form-label">
              Skill Set
            </label>
            <div class="flex">
              <div class="mr-10" style={{ width: "100%" }}>
                <input
                  type="text"
                  class="form-control input-border"
                  id="formrow-email-input"
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="btn btn-primary waves-effect waves-light"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          {/* Skill set end */}

          <div class="row">
            <div class="col-lg-4">
              <div class="mb-3">
                <label for="formrow-inputCity" class="form-label">
                  Country
                </label>
                <input
                  type="text"
                  class="form-control input-border"
                  id="formrow-inputCity"
                  placeholder="Enter Your Living City"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-3">
                <label for="formrow-inputCity" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  class="form-control input-border"
                  id="formrow-inputCity"
                  placeholder="Enter Your Living City"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="mb-3">
                <label for="formrow-inputCity" class="form-label">
                  Contact
                </label>
                <input
                  type="text"
                  class="form-control input-border"
                  id="formrow-inputCity"
                  placeholder="Enter Your Living City"
                />
              </div>
            </div>

            {/* links */}
            {/* <div className="mt-4 mb-2">
              <h5 className="primary-color">Links</h5>
            </div> */}

            {/* <div class="row"> */}
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-email-input" class="form-label">
                  Leetcode
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
                  Codeforces
                </label>
                <input
                  type="text"
                  class="form-control input-border"
                  id="formrow-password-input"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            {/* </div> */}

            {/* <div class="row"> */}
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-email-input" class="form-label">
                  Geeks For Geeks
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
                  LinkedIn
                </label>
                <input
                  type="text"
                  class="form-control input-border"
                  id="formrow-password-input"
                  placeholder="Enter Your Email"
                />
              </div>
            </div>
            {/* </div> */}

            {/* resume */}

            {/* <div class="row"> */}
            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-email-input" class="form-label">
                  Update Profile Picture
                </label>
                <input
                  type="file"
                  class="form-control input-border"
                  id="resume"
                />
              </div>
            </div>

            <div class="col-md-6">
              <div class="mb-3">
                <label for="formrow-password-input" class="form-label">
                  Upload Resume
                </label>
                <input
                  type="file"
                  class="form-control input-border"
                  id="resume"
                />
              </div>
            </div>
          </div>

          {/* </div> */}
          <div className="">
            <input
              data-repeater-create
              type="button"
              class="btn btn-success mt-3 mt-lg-0"
              value="Save"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfileForm;
