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
    { feature: "Recycled rubber chippings" },
    { feature: "98-99% metal free" },
    { feature: "Inert, frost resistant and long lasting" },
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
                  If you use our rubber chippings, the surface of your arena
                  won't lose its integrity through biodegradation, unlike
                  products derived from wood. It won’t become muddy or slippery
                  in icy or wet conditions, making it a more desirable option
                  than a grass surface. It’s also less prone to freezing, and it
                  is springy, making it safer to fall on.
                </p>
                <h5>Why ours?</h5>
                <ul>
                  <li>
                    The equestrian rubber resists frost to around -5 degrees
                    Celcius, giving it a truly year-round riding experience.
                  </li>
                  <li>
                    It minimises leg concussion risk by offering a level of
                    protection for hooves and tendons
                  </li>
                  <li>
                    Very little maintenance because it does not decompose, break
                    down or blow away
                  </li>
                  <li>Acts as an aid in surface drainage</li>
                </ul>

                <h5>How to best construct your arena</h5>
                <p>
                  To make up the arena surface, tyres are processed into small
                  rubber chippings. Lay down 100mm of silica sand, followed by
                  50mm of rubber chippings in order to form a soft, grippy
                  surface. This is laid over drainage channels, allowing you to
                  exercise your equine companion in all weathers.
                </p>
                <h5>Where can I buy Silica Sand?</h5>
                <p>
                  We offer competitive rates for both rubber chippings and
                  silica sand. Email{" "}
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
                  chickens. They do not absorb moisture, so any mess that does
                  land on them dries quickly, which is much more pleasant for
                  the chickens. Regularly hosing it down will keep the chippings
                  at their best and provide a clean, dust free environment for
                  your chickens.
                </p>
                <h5>How to best construct your coop</h5>
                <p>
                  Lay a basic membrane down and simply place 50mm of the rubber
                  chippings on top. Do not apply to concrete bases because this
                  will result in drainage problems.
                </p>
                <h5>How Much Will I Need?</h5>
                <p>
                  To achieve the recommended 50mm depth you will require 25kg of
                  rubber chippings per square metre.
                </p>
                <h5>Maintenance</h5>
                <p>Rinse with a hose weekly</p>
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
                  for plants than alternatives such as wood chippings. This is
                  because it allows for water and nutrients to reach plant roots
                  that other mulches might retain. It doesn't attract pests that
                  can often damage plants and helps prevent weeds, resulting in
                  less chemical use for control.
                </p>
                <h5>How to best use rubber chippings for your garden</h5>
                <p>
                  Weed the garden thoroughly and do not place heavy amounts of
                  rubber chippings next to tree stumps or plant stems. They need
                  room to breathe. Soak the chippings in a bucket for 24 hours
                  to ensure that there are no oils left on the material.
                </p>
                <h5>How Much Will I Need?</h5>
                <p>
                  {" "}
                  This is down to personal choice depends on your garden and how
                  you wish for it to look. If you'd like some help in
                  understanding how much will be required for your use case,
                  please don't hesitate to reach out to us at{" "}
                  <a href="mailto:info@southernchippings.co.uk">
                    info@southernchippings.co.uk
                  </a>
                  .{" "}
                </p>
                <p>
                  We offer local delivery for any size delivery and national delivery for 10+ Tonnes.
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
                    Rubber trees are grown in hot wet climates e.g. South America. Rubber processing begins at the point of harvesting, when tappers take latex sap from rubber trees.
                  </h3>
                  <h3>
                    Next, the latex is filtered and packaged into drums and sent to be made into sheets.
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
                    The sheets are dried then mixed with carbon black, synthetic rubber and reinforced with steel wire to produce the tyres we use today.
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
                  <h3>With your help, the rubber can achieve one final use.</h3>
                  <h3>
                    To produce our chippings, tyres are processed into small rubber fragments and mixed with sand to form a soft, grippy surface. This can be laid over drainage channels, allowing you to exercise your equine companion in all weathers, raise happy chickens or design that perfect garden.
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
