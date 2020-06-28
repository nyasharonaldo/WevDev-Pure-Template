import React from "react";
import Layout from "../components/layout";

const download = () => {
  return (
    <Layout>
      <div class="section-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-8 col-md-offset-2">
              <div class="section-container-spacer">
                <div class="text-center">
                  <h1>Download</h1>
                </div>
                <p>
                  Adipiscing vitae proin sagittis nisl rhoncus mattis. Bibendum
                  enim facilisis gravida neque convallis a cras semper auctor.
                  Sit amet risus nullam eget felis eget. Metus dictum at tempor
                  commodo ullamcorper a lacus vestibulum. Sit amet facilisis
                  magna etiam tempor orci eu. Eleifend mi in nulla posuere. Et
                  magnis dis parturient montes nascetur ridiculus mus mauris
                  vitae. Arcu risus quis varius quam quisque id diam. Sagittis
                  vitae et leo duis ut diam quam. Risus nullam eget felis eget
                  nunc lobortis mattis aliquam.
                </p>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 ">
              <div class="download-card ">
                <p>
                  Bibendum enim facilisis gravida <br />
                  neque convallis a cras semper{" "}
                </p>
                <br />
                <a href="https://itunes.apple.com/fr/genre/mac/" title="">
                  {" "}
                  <img
                    src="./assets/images/app-store-apple.svg"
                    class="img-responsive"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="col-md-6 ">
              <div class="download-card">
                <p>
                  Bibendum enim facilisis gravida <br />
                  neque convallis a cras semper{" "}
                </p>
                <br />
                <a href="https://play.google.com/store/apps" title="">
                  {" "}
                  <img
                    src="./assets/images/google-play.svg"
                    class="img-responsive"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <div class="text-center">
                <blockquote>
                  <p>
                    “Eu augue ut lectus arcu bibendum at varius”
                    <small class="">Francois Mathieu</small>
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default download;
