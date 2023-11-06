import React from "react";
import StuffHeader from "../../Components/addstuffs/StuffHeader";
import image from "../../assets/images/small/img-2.jpg";
function UserProjectPage() {
  return (
    <>
      <div class="row" style={{ width: "60%" }}>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <StuffHeader title={"View Project"} url={"/dashboard/home"} />
              {/* body */}
              <div className="mt-4">
                <div className="view-project-header">
                  <div className="project-left-side">
                    <h5>Devsinfo - Make your portfolio</h5>
                  </div>
                  <div className="project-right-side">
                    <div className="font-size-12 font-weight-500">
                      Published On
                    </div>
                    <div className="font-size-10">12-10-2023</div>
                  </div>
                </div>

                <div class="my-3">
                  <img
                    src={image}
                    alt=""
                    style={{ height: "50vh" }}
                    class="img-thumbnail mx-auto d-block"
                  />
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
