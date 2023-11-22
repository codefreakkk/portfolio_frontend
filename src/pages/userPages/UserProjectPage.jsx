import React, { useEffect, useState } from "react";
import StuffHeader from "../../Components/userAddstuffs/StuffHeader";
import image from "../../assets/images/small/img-2.jpg";
import { useParams } from "react-router-dom";
import ViewProjectCommentsCard from "../../Components/userProjects/ViewProjectCommentsCard";
import { getProjectByIdAndPid } from "../../api/projectApi";

function UserProjectPage() {
  const { uid, pid } = useParams();
  const [state, setState] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const result = await getProjectByIdAndPid({ uid, pid });
      const data = result.data;
      if (data != null && data.success) {
        setData(data.data);
        setState(true);
        console.log(data.data);
      } else {
        console.log(result.data);
      }
    })();
  }, []);

  return (
    <>
    NOTE Need to change rendering method (state code) do it later
      <div class="row" style={{ width: "70%" }}>
        <div class="col-lg-12">
          <div class="card pl-5">
            <div class="card-body">
              <StuffHeader title={"View Project"} url={""} />
              {/* body */}
              <div className="mt-4">
                <div className="view-project-header">
                  <div className="project-left-side">
                    <h5>{data.project_name}</h5>
                    <span className="description-color font-size-12">
                      {data.tagline}
                    </span>
                    <div className="font-size-12">
                      <b>Project Domain : </b> {data.project_domain}
                    </div>
                  </div>
                  <div className="project-right-side">
                    <div className="upvote-button">
                      <div className="upvote-button-leftside">Upvote</div>
                      <div className="upvote-button-rightside">6</div>
                    </div>

                    {/* open project */}
                    <div className="flex">
                      <div className="mt-2 pointer">
                        <span
                          className="mr-3"
                          onClick={() => {
                            window.location.href = data.project_url;
                          }}
                        >
                          <i class="bx bxs-folder-open"></i>{" "}
                          <span className="font-size-12">Open</span>
                        </span>
                        <span
                          onClick={() => {
                            window.location.href = data.github_repo;
                          }}
                        >
                          <i class="bx bxs-folder-open"></i> Github
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="my-5">
                  <img
                    src={image}
                    alt=""
                    style={{ height: "50vh" }}
                    class="img-thumbnail d-block"
                  />
                </div>

                {/* description */}
                <div className="mt-5">
                  <h5>Description</h5>
                </div>
                <div>{data.description}</div>
                {/* Post comment */}
                <div className="bar mt-5 mb-4"></div>
                <div>
                  <div className="mb-3">
                    <div class="flex">
                      <div class="mr-10" style={{ width: "100%" }}>
                        <input
                          type="text"
                          class="form-control input-border project-comment radius-50"
                          id="formrow-email-input"
                          placeholder="Post your comment"
                        />
                      </div>
                      <div>
                        <button
                          type="submit"
                          class="btn color-light-green radius-50 waves-effect waves-light"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comments */}
                <div class="mt-5">
                  <h5 class="font-size-15">
                    <i class="bx bx-message-dots text-muted align-middle me-1"></i>{" "}
                    Comments :
                  </h5>
                  {/* Comments body */}
                  <ViewProjectCommentsCard />
                  <ViewProjectCommentsCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProjectPage;
