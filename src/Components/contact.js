import React, { Component } from 'react';

class Contact extends Component{
    render(){
        return(
            <div>
                <h1>Contact Us</h1>
                <p>This is Contact Page</p>
                <form name="contact" netlify>
                  <p>
                    <label>Name <input type="text" name="name" /></label>
                  </p>
                  <p>
                    <label>Email <input type="email" name="email" /></label>
                  </p>
                  <p>
                    <button type="submit">Send</button>
                  </p>
                </form>
                <div className="cont-bg"></div>
            </div>
        );
    }
}

export default Contact;
