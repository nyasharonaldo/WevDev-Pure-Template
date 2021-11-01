import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import PricingCard from "../components/pricingCard";

const Landing = ({ data }) => {
  const {
    arena,
    tractor,
    img5,
    img6,
    img7,
    logo01,
    logo02,
    logo03,
  } = data.markdownRemark.frontmatter.landingPage;
  console.log(data);

  const features = [
  'hello','ikd','dsas'
  ]
  
  return (
    <Layout current="landing">
      <div className="white-text-container background-image-container bg">
        <div className="opacity"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Southern Chippings</h1>
              <p>
             Here at Southern Chippings, we supply high quality rubber chippings that are 98-99% free from metal. Are chippings are sized 5 – 20mm. Rubber Is a cheap inert material suitable for various applications and uses, from horse arena’s to chicken coops.{" "}
              </p>
              {/* <Link
                href="/download"
                title=""
                className="btn btn-lg btn-primary"
              >
                Download
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      


      <div className="section-container border-section-container">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-container-spacer">
              <div className="text-center">
                <h2>Uses</h2>
                {/* <p>
                  {" "}
                  Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                  amet consectetur adipiscing. Porta non pulvinar neque laoreet.
                  Viverra ipsum nunc aliquet bibendum.{" "}
                </p> */}
              </div>
            </div>

            <div className="col-md-4">
              <div className="fa-container">
                <i className="fa fa-comment-o fa-3x" aria-hidden="true"></i>
              </div>
              <div className="text-center">
                <h3>Equestrian Arena</h3>
              </div>
              <div>
                <p>
                If you used crushed tyre then the surface wouldn't lose its integrity through biodegradation, like wood chip would. It won’t become muddy or slippery in wintery or wet conditions like grass. It’s also less prone to freezing, and it is springy, making it safer to fall on.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="fa-container">
                <i className="fa fa-heart-o fa-3x" aria-hidden="true"></i>
              </div>
              <div className="text-center">
                <h3>Chicken Coops</h3>
              </div>
              <div>
                <p>
                Rubber chippings do not hold moisture. They dry very quickly. Chippings are easy to clean. They are very hygienic. Positives.
                </p>
               {/* <ul>
                 <li>Minimising leg concussion risk by offering a level of protection for feet and tendons</li>
                 <li>The equestrian rubber resists frost to around -5 degrees giving a truly year-round riding experience</li>
                 <li>Very little maintenance as or annual replenishment as the rubber does not decompose, break down or blow away</li>
                 <li>The chipping aids surface drainage</li>
               </ul> */}
              </div>
            </div>
            <div className="col-md-4">
              <div className="fa-container">
                <i className="fa fa-bell-o fa-3x" aria-hidden="true"></i>
              </div>
              <div className="text-center">
                <h3>Gardens</h3>
              </div>
              {/* <div>
                <p>
                  Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                  amet consectetur adipiscing. Porta non pulvinar neque laoreet.
                  Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat
                  lacus. Turpis egestas pretium aenean pharetra magna ac.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      

      {/* <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <Img
                      className="img-responsive"
                      alt=""
                      fluid={img5.childImageSharp.fluid}
                    />
                  </div>
                  <div className="item">
                    <Img
                      className="img-responsive"
                      alt=""
                      fluid={img7.childImageSharp.fluid}
                    />
                  </div>
                  <div className="item">
                    <Img
                      className="img-responsive"
                      alt=""
                      fluid={img5.childImageSharp.fluid}
                    />
                  </div>
                </div>
                <ol className="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="section-container background-color-container white-text-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="text-center">
                <h2>Life Cycle of Southern Chippings</h2>
                {/* <p>
                  {" "}
                  Auctor augue mauris augue neque. Posuere lorem ipsum dolor sit
                  amet consectetur adipiscing. Porta non pulvinar neque laoreet.
                  Viverra ipsum nunc aliquet bibendum. Iaculis urna id volutpat
                  lacus. Turpis egestas pretium aenean pharetra magna ac. Id
                  cursus metus aliquam eleifend mi.{" "}
                </p>
                <a
                  href="./download.html"
                  title=""
                  className="btn btn-primary btn-lg"
                >
                  Download
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <Img
                className="img-responsive"
                alt=""
                fluid={img6.childImageSharp.fluid}
              />
            </div>

            <div className="col-md-5">
              <ul className="features">
                <li>
                  <h3>Rubber Tree’s are grown in hot wet climates e.g. South America, Rubber processing technically begins at the point of harvesting, when tappers take latex sap from rubber trees. Next, the latex is filtered and packaged into drums, then sent to be made into sheets
                 </h3>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <Img
                className="img-responsive"
                alt=""
                fluid={tractor.childImageSharp.fluid}
              />
            </div>

            <div className="col-md-5">
              <ul className="features">
                <li>
                  <h3>The sheets are dried then mixed with carbon black, synthetic rubber and reinforced with Steel wire to produce the tires of today.</h3>
                  <h3>Average life of a tractor tire is 5 years</h3>
                </li>
              </ul>
            </div>

            
          </div>
        </div>
      </div>
      

      <div className="section-container">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <Img
                className="img-responsive"
                alt=""
                fluid={arena.childImageSharp.fluid}
              />
            </div>

            <div className="col-md-5">
              <ul className="features">
                <li>
                  <h3>With your help the rubber can have one final use</h3>
                  <h3>To make up the surface, tyres are processed into small rubber fragments and mixed with sand to form a soft, grippy surface. This is laid over drainage channels, allowing you to exercise your equine companion in all weathers.</h3>
                </li>
              </ul>
            </div>

            
          </div>
        </div>
      </div>

      <div className="section-container background-color-container white-text-container">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="text-center">
                <h2>Pricing</h2>
                <p>
                  {" "}
                  Please request a quote by emailling SouthernChippings@gmail.com.{" "}
                </p>
                <br/>
                <ul>
                  <p>Request a quote for a Equestrian arena, large scale chicken coop</p>
                  <p>1m X 1m X 1m bags from £80 plus shipping</p>
                  <p>Smaller bags are available upon request</p>

                </ul>
                {/* <a
                  href="./download.html"
                  title=""
                  className="btn btn-primary btn-lg"
                >
                  Download
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;

export const pageQuery = graphql`
  query LandingPageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        landingPage {
          arena {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          tractor {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          img5 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          img6 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          img7 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          logo01 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          logo02 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          logo03 {
            childImageSharp {
              fluid(maxWidth: 10000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
        }
      }
    }
  }
`;
