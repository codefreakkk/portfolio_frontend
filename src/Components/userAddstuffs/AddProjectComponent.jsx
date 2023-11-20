import React from "react";
import StuffHeader from "./StuffHeader";

function AddProjectComponent() {
  return (
    <>
      <div class="row" style={{ width: "80%" }}>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <StuffHeader title={"Add Projects"} url={""} />
              {/* Route body */}
              <div>
                <form>
                  <div class="mb-3">
                    <label for="formrow-firstname-input" class="form-label">
                      Project name
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
                          Tagline
                        </label>
                        <input
                          type="text"
                          class="form-control input-border"
                          id="formrow-email-input"
                          placeholder="Enter Tagline"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="formrow-email-input" class="form-label">
                          Cover Image
                        </label>
                        <input
                          type="file"
                          class="form-control input-border"
                          id="resume"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-3">
                        <label for="formrow-email-input" class="form-label">
                          Github repo
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
                          Project URL
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddProjectComponent;
