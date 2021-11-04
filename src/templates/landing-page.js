import React from "react";
import Layout from "../components/layout";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import PricingCard from "../components/pricingCard";
import scrollTo from 'gatsby-plugin-smoothscroll';

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
              <button onClick={() => scrollTo('#pricing')}>See Pricing</button>
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

      <div className="section-container background-color-container white-text-container" id='pricing'>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <PricingCard
                    title={"Pricing"}
                    amount={"20"}
                    currency={"£"}
                    period={"1w"}
                    features={["Green","Red"]}
                  />
              <div className="col-md-8">
                  <div className="template-example">
                    <h2 className="template-title-example">Inputs</h2>

                    <div className="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <select className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox1" value="option1" />{" "}
                        Email me a copy
                      </label>
                      <label className="checkbox-inline">
                        <input type="checkbox" id="inlineCheckbox2" value="option2" />{" "}
                        I am a human
                      </label>
                    </div>

                    <div className="form-group">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Enter your message"
                      ></textarea>
                    </div>

                    <div className="alert alert-success" role="alert">
                      Your message was successfully sent
                    </div>
                    <div className="alert alert-danger" role="alert">
                      Your message has not been sent, restart
                    </div>
                  </div>
              </div>

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
            <div className="col-md-12 section-container-spacer">
              <div className="fa-container">
                <i className="fa fa-comment-o fa-3x" aria-hidden="true"></i>
              </div>
              <div className="text-center">
                <h3>Equestrian Arena</h3>
              </div>
              <div>
                <p>
                The product is frost resistant and is very well drained to produce a cushioned non-slip surface that is safe for both the horse and the rider. Rubber chippings are safe for equestrian use in turnout areas as horses tend not to eat it and the softer nature of rubber chip is kinder on the hooves.The product is frost resistant and is very well drained to produce a cushioned non-slip surface that is safe for both the horse and the rider. Rubber chippings are safe for equestrian use in turnout areas as horses tend not to eat it and the softer nature of rubber chip is kinder on the hooves.
                </p>
                <p>
                <h5>Construction:</h5> Equstrian arena require a 100mm silica sand layed upon a drainage channels, topped with 50mm of Rubber chipping, allowing you to exercise your equine companion in all weathers. 
                </p>
                <p>
                <h5>How Much Will I Need?:</h5> To achieve the recommended 50mm depth you will require 25kg of rubber chippings per square metre. 
                </p>
                <p>
                We offer competitive rates for both Rubber Chippings and Silica Sand.
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
                Our rubber chippings are a very hygienic surface for your chickens, they do not absorb moisture so any mess that does land on them, dries quickly which is much more pleasant for the chickens. Regular hosing down will keep the chippings at their best and provide a clean dust free environment for your chickens.
                </p>
                <p>
                <h5>Construction:</h5> Lay a basic membrane down and simply place the rubber chippings on top 50mm will do perfect. Do not apply to concrete bases this will result in drainage problems. 
                </p>
                <p>
                <h5>How Much Will I Need?:</h5> To achieve the recommended 50mm depth you will require 25kg of rubber chippings per square metre. 
                </p>
                <p>
                Maintaines: Rince regulerly
                </p>
               {/* <ul>
                 <li>Minimising leg concussion risk by offering a level of protection for feet and tendons</li>
                 <li>The equestrian rubber resists frost to around -5 degrees giving a truly year-round riding experience</li>
                 <li>Very little maintenance as or annual replenishment as the rubber does not decompose, break down or blow away</li>
                 <li>The chipping aids surface drainage</li>
               </ul> */}
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
                Using rubber mulch in your landscaping is the healthier choice for plants then such alternitives as wood chippings because it allows for water and nutrients to reach plant roots that other mulches retain, it doesn't attract pests that can often damage plants, and helps prevent weeds leading to less chemical use for control.
                </p>
                <p>
                <h5>Construction:</h5> Weed the garden thorougherly and do not place heavy amounts next to tree stumps or plant stems as they need room to breath. Soak the mulch in a bucket for 24Hours to ensure there are no oils left on material.
                </p>
                <p>
                <h5>How Much Will I Need?:</h5> Up to you, depends on your garden and how you wish for it to look
                </p>
                <p>
                We offer local delivery for any size delivery and national delivery for 10+ Tones
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
