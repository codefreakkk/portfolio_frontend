import React, { useEffect, useState } from "react";
import { addPersonalDetails, getUser } from "../../api/UserApi";

// need to worl on this section
function ProfileForm() {
  const [full_name, setFullName] = useState("");
  const [u_email, setEmail] = useState("");
  const [u_contact, setContact] = useState("");
  const [u_description, setDescription] = useState("");
  const [u_company_name, setCompanyName] = useState("");
  const [u_work_experience, setWorkExperience] = useState("");
  const [u_city, setCity] = useState("");
  const [u_country, setCountry] = useState("");
  const [leetcode, setLeetcode] = useState("");
  const [codeforces, setCodeforces] = useState("");
  const [gfg, setGFG] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [skillsArray, setSkillsArray] = useState([]);
  const [skills, setSkills] = useState("");

  // get all the data
  useEffect(() => {
    (async () => {
      const result = await getUser();
      const data = result.data;
      if (data != null && data.success) {
        const user = data.data;
        setFullName(user.full_name);
        setEmail(user.u_email);
        setContact(user.u_contact);
        setDescription(user.u_description);
        setCompanyName(user.u_company_name);
        setWorkExperience(user.u_work_experience);
        setCity(user.u_city);
        setCountry(user.u_country);
        setLeetcode(user.leetcode);
        setCodeforces(user.codeforces);
        setGFG(user.gfg);
        setLinkedin(user.linkedin);
        setSkillsArray(user.skills);
      } else {
        console.log("Data not fetched");
      }
    })();
  }, []);

  // validate all fields
  function checkEmptyFields() {
    if (
      !full_name ||
      !u_email ||
      !u_contact ||
      !u_description ||
      !u_company_name ||
      !u_work_experience ||
      !u_city ||
      !u_country ||
      !leetcode ||
      !codeforces ||
      !gfg ||
      !linkedin ||
      skillsArray.length == 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  function addSkills() {
    if (skills.length > 0) {
      skillsArray.push(skills);
      setSkillsArray(skillsArray);
    }
    setSkills("");
  }

  async function submitForm() {
    console.log("Submitting Form");

    // post data
    if (checkEmptyFields()) {
      alert("Please fill all fields");
      return;
    }
    const result = await addPersonalDetails({
      full_name,
      u_email,
      u_contact,
      u_description,
      u_company_name,
      u_work_experience,
      u_city,
      u_country,
      leetcode,
      gfg,
      linkedin,
      skillsArray,
    });
    
    const data = result.data;
    if (data != null && data.success) {
      alert(data.message);
    } else {
      alert("Some error occured");
    }
  }

  return (
    <>
      <div class="col-xl-12">
        <div className="mb-3"></div>
        <form>
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
                  value={full_name}
                  onChange={(e) => setFullName(e.target.value)}
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
                  value={u_email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={u_company_name}
                  onChange={(e) => setCompanyName(e.target.value)}
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
                  value={u_work_experience}
                  onChange={(e) => setWorkExperience(e.target.value)}
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
                value={u_description}
                onChange={(e) => setDescription(e.target.value)}
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
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  class="form-control input-border"
                  id="formrow-email-input"
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div>
                <button
                  type="button"
                  class="btn btn-primary waves-effect waves-light"
                  onClick={addSkills}
                >
                  Submit
                </button>
              </div>
            </div>
            {/* skills container */}
            <div className="pt-3 flex flex-wrap">
              {skillsArray.map((result, index) => {
                return (
                  <div className="mr-5 skills-container border" key={index}>
                    {result}
                  </div>
                );
              })}
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
                  value={u_country}
                  onChange={(e) => setCountry(e.target.value)}
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
                  value={u_city}
                  onChange={(e) => setCity(e.target.value)}
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
                  value={u_contact}
                  onChange={(e) => setContact(e.target.value)}
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
                  value={leetcode}
                  onChange={(e) => setLeetcode(e.target.value)}
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
                  value={codeforces}
                  onChange={(e) => setCodeforces(e.target.value)}
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
                  value={gfg}
                  onChange={(e) => setGFG(e.target.value)}
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
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
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
              onClick={submitForm}
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default ProfileForm;
