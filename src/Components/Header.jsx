import React from "react";
import avtar from "../assets/images/users/avatar-1.jpg";

function Header() {
  return (
    <>
      <header id="page-topbar">
        <div class="navbar-header">
          <div class="d-flex">
            <div class="navbar-brand-box">
              <a class="logo logo-dark">
                <span class="logo-sm">PeerList</span>
                <span
                  class="logo-lg font_size_20px"
                  style={{ fontWeight: "bold", color: "black" }}
                >
                  PeerList
                </span>
              </a>
            </div>

            <button
              type="button"
              class="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
              data-bs-toggle="collapse"
              data-bs-target="#topnav-menu-content"
            >
              <i class="fa fa-fw fa-bars"></i>
            </button>

            <form class="app-search d-none d-lg-block">
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search..."
                />
                <span class="bx bx-search-alt"></span>
              </div>
            </form>
          </div>

          <div class="d-flex">
            <div class="dropdown d-inline-block">
              <button
                type="button"
                class="btn header-item noti-icon waves-effect"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="bx bx-bell bx-tada"></i>
                <span class="badge bg-danger rounded-pill">3</span>
              </button>
              <div
                class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                aria-labelledby="page-header-notifications-dropdown"
              >
                <div class="p-3">
                  <div class="row align-items-center">
                    <div class="col">
                      <h6 class="m-0" key="t-notifications">
                        {" "}
                        Notifications{" "}
                      </h6>
                    </div>
                  </div>
                </div>
                <div data-simplebar style={{ maxHeight: "230px" }}>
                  <a
                    href="javascript: void(0);"
                    class="text-reset notification-item"
                  >
                    <div class="d-flex">
                      <img
                        src="assets/images/users/avatar-4.jpg"
                        class="me-3 rounded-circle avatar-xs"
                        alt="user-pic"
                      />
                      <div class="flex-grow-1">
                        <h6 class="mb-1">Salena Layfield</h6>
                        <div class="font-size-12 text-muted">
                          <p class="mb-1" key="t-occidental">
                            As a skeptical Cambridge friend of mine occidental.
                          </p>
                          <p class="mb-0">
                            <i class="mdi mdi-clock-outline"></i>{" "}
                            <span key="t-hours-ago">1 hours ago</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="p-2 border-top d-grid">
                  <a
                    class="btn btn-sm btn-link font-size-14 text-center"
                    href="javascript:void(0)"
                  >
                    <i class="mdi mdi-arrow-right-circle me-1"></i>{" "}
                    <span key="t-view-more">View More..</span>
                  </a>
                </div>
              </div>
            </div>

            <div class="dropdown d-inline-block">
              <button
                type="button"
                class="btn header-item waves-effect"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  class="rounded-circle header-profile-user"
                  src={avtar}
                  alt="Header Avatar"
                />
                <span class="d-none d-xl-inline-block ms-1" key="t-henry">
                  Henry
                </span>
                <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-end">
                <a class="dropdown-item" href="#">
                  <i class="bx bx-user font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-profile">Profile</span>
                </a>
                <a class="dropdown-item" href="#">
                  <i class="bx bx-wallet font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-my-wallet">My Wallet</span>
                </a>
                <a class="dropdown-item d-block" href="#">
                  <span class="badge bg-success float-end">11</span>
                  <i class="bx bx-wrench font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-settings">Settings</span>
                </a>
                <a class="dropdown-item" href="#">
                  <i class="bx bx-lock-open font-size-16 align-middle me-1"></i>{" "}
                  <span key="t-lock-screen">Lock screen</span>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-danger" href="#">
                  <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>{" "}
                  <span key="t-logout">Logout</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
