import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import PricingCard from "../components/pricingCard";
import scrollTo from "gatsby-plugin-smoothscroll";
import ContactForm from "../components/EnquiryForm";

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

  const feats = [
    { feature: "Recycaled rubber chippings" },
    { feature: "98-99% metal free" },
    { feature: "Inert, frost resistent and long lasting" },
  ];

  return (
    <Layout current="landing">
      <div
        className="white-text-container background-image-container bg"
        id="home"
      >
        <div className="opacity"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Southern Chippings</h1>
              <p>
                Rubber is a cheap inert material suitable for various
                applications, from horse arena’s to chicken coops. Here at
                Southern Chippings, we supply high quality rubber chippings that
                are 98-99% free from metal. Our chippings are sized 5 – 20mm.{" "}
              </p>
              <button
                className="col-md-4 btn btn-primary"
                onClick={() => scrollTo("#pricing")}
              >
                See Pricing
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="section-container background-color-container-alt white-text-container"
        id="pricing"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <PricingCard
                title={"Rubber Chip"}
                amount={"£50"}
                currency={"£"}
                period={"Tonne Bag"}
                features={feats}
              />
              <div className="col-md-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="section-container border-section-container"
        id="applications"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-container-spacer">
              <div className="text-center">
                <h2>Applications</h2>
              </div>
            </div>
            <div className="col-md-12 section-container-spacer">
              <div className="fa-container">
                <i className="fa fa-comment-o fa-3x" aria-hidden="true"></i>
              </div>
              <div className="text-center">
                <h3>Equestrian Arena</h3>
              </div>
              <div>
                <p>
                  If you use our rubber chippings the surface of your arena
                  wouldn't lose its integrity through biodegradation, like wood
                  chip would. It won’t become muddy or slippery in wintery or
                  wet conditions like grass. It’s also less prone to freezing,
                  and it is springy, making it safer to fall on.
                </p>
                <h5>Why ours?</h5>
                <ul>
                  <li>
                    The equestrian rubber resists frost to around -5 degrees
                    giving a truly year-round riding experience
                  </li>
                  <li>
                    It Minimises leg concussion risk by offering a level of
                    protection for feet and tendons
                  </li>
                  <li>
                    Very little maintenance as or annual replenishment is
                    required as the rubber does not decompose, break down or
                    blow away
                  </li>
                  <li>Our chipping aids surface drainage</li>
                </ul>

                <h5>Construction</h5>
                <p>
                  To make up the arena surface, tyres are processed into small
                  rubber chippings. 100mm of Silica Sand is laid down, followed
                  by 50mm of Rubber Chippings which form a soft, grippy surface.
                  This is laid over drainage channels, allowing you to exercise
                  your equine companion in all weathers.
                </p>
                <h5>Where can I buy Silica Sand?</h5>
                <p>
                  We offer competitive rates for both Rubber Chippings and
                  Silica Sand. Email{" "}
                  <a href="mailto:info@southernchippings.co.uk">
                    info@southernchippings.co.uk
                  </a>{" "}
                  for more information.
                </p>
              </div>
            </div>
            <div className="col-md-12 section-container-spacer">
              <div className="fa-container">
                <i className="fa fa-heart-o fa-3x" aria-hidden="true"></i>
              </div>
              <div className="text-center">
                <h3>Chicken Coops</h3>
              </div>
              <div>
                <p>
                  Our rubber chippings are a very hygienic surface for your
                  chickens, they do not absorb moisture so any mess that does
                  land on them, dries quickly which is much more pleasant for
                  the chickens. Regular hosing down will keep the chippings at
                  their best and provide a clean dust free environment for your
                  chickens.
                </p>
                <h5>Construction</h5>
                <p>
                  Lay a basic membrane down and simply place the rubber
                  chippings on top 50mm will do perfect. Do not apply to
                  concrete bases this will result in drainage problems.
                </p>
                <h5>How Much Will I Need?</h5>
                <p>
                  To achieve the recommended 50mm depth you will require 25kg of
                  rubber chippings per square metre.
                </p>
                <h5>Maintenance</h5>
                <p> Rince regularly</p>
              </div>
            </div>
            <div className="col-md-12 section-container-spacer">
              <div className="fa-container">
                <i className="fa fa-bell-o fa-3x" aria-hidden="true"></i>
              </div>
              <div className="text-center">
                <h3>Gardens</h3>
              </div>
              <div>
                <p>
                  Using rubber mulch in your landscaping is the healthier choice
                  for plants then such alternatives as wood chippings because it
                  allows for water and nutrients to reach plant roots that other
                  mulches retain, it doesn't attract pests that can often damage
                  plants, and helps prevent weeds leading to less chemical use
                  for control.
                </p>
                <h5>Construction</h5>
                <p>
                  Weed the garden thoroughly and do not place heavy amounts next
                  to tree stumps or plant stems as they need room to breathe.
                  Soak the mulch in a bucket for 24Hours to ensure there are no
                  oils left on material.
                </p>
                <h5>How Much Will I Need?</h5>
                <p>
                  {" "}
                  Up to you, depends on your garden and how you wish for it to
                  look. If you'd like some help in understanding how much will
                  be required for your use case don't hestitate to reach out to
                  us at{" "}
                  <a href="mailto:info@southernchippings.co.uk">
                    info@southernchippings.co.uk
                  </a>.{" "}
                </p>
                <p>
                  We offer local delivery for any size delivery and national
                  delivery for 10+ Tones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="section-container background-color-container white-text-container"
        id="lifecycle"
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="text-center">
                <h2>Lifecycle of Southern Chippings</h2>
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
                  <h3>
                    Rubber Trees are grown in hot wet climates e.g. South
                    America, Rubber processing technically begins at the point
                    of harvesting, when tappers take latex sap from rubber
                    trees.
                  </h3>
                  <h3>
                    Next, the latex is filtered and packaged into drums, then
                    sent to be made into sheets.
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
                  <h3>
                    The sheets are dried then mixed with carbon black, synthetic
                    rubber and reinforced with Steel wire to produce the tyres
                    of today. Average life of a tractor tyre is 5 years.
                  </h3>
                  <h3>Average life of a tractor tyre is 5 years.</h3>
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
                  <h3>With your help the rubber can have one final use.</h3>
                  <h3>
                    To make up the surface, tyres are processed into small
                    rubber fragments and mixed with sand to form a soft, grippy
                    surface. This is laid over drainage channels, allowing you
                    to exercise your equine companion in all weathers.
                  </h3>
                </li>
              </ul>
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
