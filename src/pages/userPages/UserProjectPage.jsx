import React from "react";
import StuffHeader from "../../Components/userAddstuffs/StuffHeader";
import image from "../../assets/images/small/img-2.jpg";
import ViewProjectCommentsCard from "../../Components/userProjects/ViewProjectCommentsCard";

function UserProjectPage() {
  return (
    <>
      <div class="row" style={{ width: "70%" }}>
        <div class="col-lg-12">
          <div class="card pl-5">
            <div class="card-body">
              <StuffHeader title={"View Project"} url={""} />
              {/* body */}
              <div className="mt-4">
                <div className="view-project-header">
                  <div className="project-left-side">
                    <h5>Devsinfo - Make your portfolio</h5>
                    <span className="description-color font-size-12">
                      Lorem, ipsum dolor sit amet consectetur react js node
                    </span>
                  </div>
                  <div className="project-right-side">
                    <div className="upvote-button">
                      <div className="upvote-button-leftside">Upvote</div>
                      <div className="upvote-button-rightside">6</div>
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
                <div>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae maiores saepe aut. Inventore ipsum, corporis recusandae
                  expedita quis atque numquam deserunt perspiciatis
                  reprehenderit dolorum ipsa nesciunt esse ratione velit et
                  praesentium rem eligendi provident sint. Eius hic quidem
                  officiis earum doloremque sed repudiandae facilis neque velit
                  reprehenderit! Doloremque, quas facere!
                </div>
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
