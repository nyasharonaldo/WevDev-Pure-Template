import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

const about = ({ data }) => {
  const { img01, img02, img03 } = data.markdownRemark.frontmatter.aboutPage;
  console.log(data);
  return (
    <Layout current="about">
      <div class="">
        <div class="container">
          <div class="row">
            <div class="col-xs-12">
              <Img
                className="img-responsive"
                alt=""
                fluid={img01.childImageSharp.fluid}
              />
            </div>
          </div>
        </div>
      </div>

      <div class="section-container">
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-8 col-md-offset-2">
              <div class="text-center">
                <h1>Type something</h1>
              </div>
              <p class="section-container-spacer">
                Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                amet consectetur adipiscing. Porta non pulvinar neque laoreet.
                Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat
                lacus. Turpis egestas pretium aenean pharetra magna ac. Id
                cursus metus aliquam eleifend mi. Odio tempor orci dapibus
                ultrices in iaculis. Lacus luctus accumsan tortor posuere ac ut
                consequat semper. Tincidunt ornare massa eget egestas purus
                viverra accumsan. Odio euismod lacinia at quis. Sit amet nulla
                facilisi morbi. At varius vel pharetra vel turpis nunc eget
                lorem dolor. Feugiat vivamus at augue eget. Feugiat nisl pretium
                fusce id velit ut. Venenatis tellus in metus vulputate eu
                scelerisque felis imperdiet. Ut placerat orci nulla
                pellentesque. Laoreet suspendisse interdum consectetur libero
                id.
              </p>

              <div class="row section-container-spacer">
                <div class="col-md-6">
                  <Img
                    className="img-responsive"
                    alt=""
                    fluid={img03.childImageSharp.fluid}
                  />
                </div>
                <div class="col-md-6">
                  <Img
                    className="img-responsive"
                    alt=""
                    fluid={img02.childImageSharp.fluid}
                  />
                </div>
              </div>
            </div>

            <div class="col-xs-12 col-md-8 col-md-offset-2">
              <p>
                Non blandit massa enim nec dui nunc mattis enim ut. Cursus in
                hac habitasse platea dictumst quisque sagittis purus Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Adipiscing
                commodo elit at imperdiet dui accumsan sit. Ipsum dolor sit amet
                consectetur adipiscing elit. Integer quis auctor elit sed. In
                pellentesque massa placerat duis ultricies. Interdum consectetur
                libero id faucibus nisl tincidunt. Condimentum mattis
                pellentesque id nibh tortor id aliquet
              </p>
              <small class="signature pull-right">Team</small>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default about;

export const pageQuery = graphql`
  query aboutQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        aboutPage {
          img01 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img02 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img03 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
