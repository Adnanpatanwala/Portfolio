import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return ( 
    <Wrapper className='page'>
      <div className="formbold-main-wrapper"> 
  <div className="formbold-form-wrapper">
    <form  method="POST">
      <div className="formbold-mb-5">
        <label for="name" className="formbold-form-label"> Full Name </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="formbold-form-input"
        />
      </div>
 
      <div className="formbold-mb-5">
        <label for="email" className="formbold-form-label"> Email Address </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="formbold-form-input"
        />
      </div>

      <div className="formbold-mb-5">
        <label for="subject" className="formbold-form-label"> Subject </label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          className="formbold-form-input"
        />
      </div>

      <div className="formbold-mb-5">
        <label for="message" className="formbold-form-label"> Message </label>
        <textarea
          rows="6"
          name="message"
          id="message"
          placeholder="Type your message"
          className="formbold-form-input"
        ></textarea>
      </div>

      <div>
        <button className="formbold-btn">Submit</button>
      </div>
    </form>
  </div>
</div>
<style></style>
    </Wrapper>
  )
}

export default Contact
const  Wrapper = styled.div`
margin-top: 25px;
  .formbold-mb-5 {
    margin-bottom: 20px;
  }
  .formbold-pt-3 {
    padding-top: 12px;
  }
  .formbold-main-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px; 
  }

  .formbold-form-wrapper {
    margin: 0 auto;
    max-width: 550px;
    width: 100%;  
  }
  .formbold-form-label {
    display: block;
    font-weight: 500;
    font-size: 16px;
    color: white;
    margin-bottom: 12px;
  }
  .formbold-form-label-2 {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
  }

  .formbold-form-input {
    width: 100%;
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px solid #e0e0e0;
    background: white;
    font-weight: 500;
    font-size: 16px;
    color: #6b7280;
    outline: none;
    resize: none;
    box-sizing: border-box;
  }
  .formbold-form-input:focus {
    border-color: #6a64f1;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }

  .formbold-btn {
    text-align: center;
    font-size: 16px;
    border-radius: 6px;
    padding: 10px 20px;
    border: none;
    font-weight: 600;
    background-color: var(--texthover);
    color: white;
    cursor: pointer;
  }
  .formbold-btn:hover {
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
  }

  .formbold--mx-3 {
    margin-left: -12px;
    margin-right: -12px;
  }
  .formbold-px-3 {
    padding-left: 12px;
    padding-right: 12px;
  }
  .flex {
    display: flex;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .w-full {
    width: 100%;
  }
  @media (min-width: 540px) {
    .sm\:w-half {
      width: 50%;
    }
  }

`