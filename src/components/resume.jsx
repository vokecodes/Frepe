import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="resume">
          <div className="container">
            <h1>
              My <span className="spn-col">Resume.</span>
            </h1>
            <div className="row">
              <div className="col-md-4 sidebar">
                <div className="resume-img">
                  <img src="" alt="" />
                </div>
                <div className="resume-tabs">
                  <ul className="nav flex-column" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="active show"
                        id="edu-tab"
                        data-toggle="tab"
                        href="#edu"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        <i class="fa fa-graduation-cap" aria-hidden="true" />
                        Education
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className=""
                        id="exp-tab"
                        data-toggle="tab"
                        href="#exp"
                        role="tab"
                        aria-controls="exp"
                        aria-selected="false"
                      >
                        <i class="fa fa-briefcase" aria-hidden="true" />
                        Experience
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className=""
                        id="skl-tab"
                        data-toggle="tab"
                        href="#skl"
                        role="tab"
                        aria-controls="skl"
                        aria-selected="false"
                      >
                        <i class="fa fa-th-list" aria-hidden="true" />
                        Skills
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className=""
                        id="awd-tab"
                        data-toggle="tab"
                        href="#wad"
                        role="tab"
                        aria-controls="awd"
                        aria-selected="false"
                      >
                        <i class="fa fa-trophy" aria-hidden="true" />
                        Awards
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div class="tab-content" id="myTabContent">
                  <div
                    class="tab-pane fade show active"
                    id="edu"
                    role="tabpanel"
                    aria-labelledby="edu-tab"
                  >
                    <div class="row ">
                      <div class="col-xl-12">
                        <div
                          className="resume-content wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay="0.25s"
                        >
                          <h3> - Master of Design</h3>
                          <h5>University Of Design - 2016</h5>
                          <p>
                            Sit amet, consectetur adipiscing elit. Aenean
                            consectetur suscipit viverra. Morbi non arcu blandit
                            justo pellentesque condimentum. Integer dignissim
                            risus quis felis accumsan quis pulvinar tellus
                            fermentum. Aenean consectetur suscipit viverra.
                            Morbi non arcu blandit justo pellentesque
                            condimentum.
                          </p>
                        </div>
                        <div className="resume-content">
                          <h3> - Bachelor of Design</h3>
                          <h5>University Of Design - 2014</h5>
                          <p>
                            Sit amet, consectetur adipiscing elit. Aenean
                            consectetur suscipit viverra. Morbi non arcu blandit
                            justo pellentesque condimentum. Integer dignissim
                            risus quis felis accumsan quis pulvinar tellus
                            fermentum. Aenean consectetur suscipit viverra.
                            Morbi non arcu blandit justo pellentesque
                            condimentum.
                          </p>
                        </div>
                        <div className="resume-content">
                          <h3> - Bachelor of IT</h3>
                          <h5>University Of Design - 2010</h5>
                          <p>
                            Sit amet, consectetur adipiscing elit. Aenean
                            consectetur suscipit viverra. Morbi non arcu blandit
                            justo pellentesque condimentum. Integer dignissim
                            risus quis felis accumsan quis pulvinar tellus
                            fermentum. Aenean consectetur suscipit viverra.
                            Morbi non arcu blandit justo pellentesque
                            condimentum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane"
                    id="exp"
                    role="tabpanel"
                    aria-labelledby="exp-tab"
                  >
                    <div class="row ">
                      <div class="col-xl-12">
                        <div
                          className="resume-content wow fadeInUp"
                          data-wow-duration="1s"
                          data-wow-delay="0.25s"
                        >
                          <h3> - Themeforest </h3>
                          <h5>WordPress Developer (2012-2016)</h5>
                          <p>
                            Sit amet, consectetur adipiscing elit. Aenean
                            consectetur suscipit viverra. Morbi non arcu blandit
                            justo pellentesque condimentum. Integer dignissim
                            risus quis felis accumsan quis pulvinar tellus
                            fermentum. Aenean consectetur suscipit viverra.
                            Morbi non arcu blandit justo pellentesque
                            condimentum.
                          </p>
                        </div>
                        <div className="resume-content">
                          <h3> - GRAPHICRIVER</h3>
                          <h5>Web Design (2008-2012)</h5>
                          <p>
                            Sit amet, consectetur adipiscing elit. Aenean
                            consectetur suscipit viverra. Morbi non arcu blandit
                            justo pellentesque condimentum. Integer dignissim
                            risus quis felis accumsan quis pulvinar tellus
                            fermentum. Aenean consectetur suscipit viverra.
                            Morbi non arcu blandit justo pellentesque
                            condimentum.
                          </p>
                        </div>
                        <div className="resume-content">
                          <h3> - VIDEOHIVE</h3>
                          <h5> After Effect (2007-2008) </h5>
                          <p>
                            Sit amet, consectetur adipiscing elit. Aenean
                            consectetur suscipit viverra. Morbi non arcu blandit
                            justo pellentesque condimentum. Integer dignissim
                            risus quis felis accumsan quis pulvinar tellus
                            fermentum. Aenean consectetur suscipit viverra.
                            Morbi non arcu blandit justo pellentesque
                            condimentum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wtmark text-right">
                  <p>My Education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Resume;
