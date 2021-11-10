// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xzbyljbk");
  if (state.succeeded) {
      return (
      <div className="col-md-6 alert alert-success" role="alert">
        Your message was successfully sent, we will be in touch soon.
      </div>
      );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="template-example">
        <h2 className="template-title-example">Enquiry</h2>

        <div className="form-group">
          <input
            id="email"
            className="form-control"
            type="email" 
            name="email"
            placeholder="Email"
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            id="tonsRequired"
            name="tonsRequired"
            placeholder="Amount Required"
          />
          <ValidationError 
            prefix="TonsRequired"
            field="tonsRequired"
            errors={state.errors}
          />
        </div>
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            className="form-control"
            rows="3"
            placeholder="Enter your message"
          ></textarea>
          <ValidationError
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <button className="col-md-6 btn btn-primary" type="submit" disabled={state.submitting}>
          Submit
        </button>
      </div>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
