import React from 'react'

import { Link } from 'react-router-dom'


const login = () => {
  return <>
    <section className="vh-100"  style={{backgroundColor: '#eee'}}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-top h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{borderRadius: "25px"}}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                    <form className="mx-1 mx-md-4">
                     

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="zmdi zmdi-email me-3"></i>
                        <label className="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" className="form-control" placeholder="Email" />
                        </label>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="zmdi zmdi-lock me-3"></i>
                        <label className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" className="form-control" placeholder="Password" />
                        </label>
                      </div>


                      <div className="form-check d-flex justify-content-center mb-2">
                        <label className="form-check-label">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          Remember Me
                        </label>
                      </div>
                      <div className = "my-3 ms-4 ">
                        <div className="d-grid gap-2">
                          <button className="btn btn-primary" type="button">
                          <small><i className = "far fa-user pr-2"> </i>   Login</small>
                          </button> 
                        </div>
                      </div>
                      <div >
                        New User <Link to='/signup'>Register</Link>
                      </div>

                      <p className = "text-center my-3 text-capitalize"><span>Connect With us</span></p>
                      <div className = "row mx-auto justify-content-center ">
                        <div className ="col-3">
                          <a href="www.instagram.com"   target="Mydrive"><i className="fab fa-twitter fa-2x"></i></a>
                        </div>
                        <div className ="col-3">
                          <a href="www.instagram.com" target="Mydrive"><i className="fab fa-facebook fa-2x"></i></a>
                        </div>
                        <div className ="col-3">
                          <a href="www.instagram.com" target="Mydrive"><i className="fab fa-instagram fa-2x"></i></a>
                        </div> 
                      </div>
                       
                     
                    </form>
                   
                

                    

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default login