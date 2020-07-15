import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

const about = ({ data }) => {
  const {
    img01,
    img02,
    img03,
    paragraph2,
    paragraph,
    title,
  } = data.markdownRemark.frontmatter.aboutPage;
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
                <h1>{title}</h1>
              </div>
              <p class="section-container-spacer">{paragraph}</p>

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
              <p>{paragraph2}</p>
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
          title
          paragraph
          paragraph2
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
