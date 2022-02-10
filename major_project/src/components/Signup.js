import React from 'react'

const signup = () => {
  return <>
    <section className="vh-60" style={{backgroundColor: '#eee'}}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{borderRadius: "25px"}}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                      <i className="zmdi zmdi-accounts me-3"></i>
                        <label className="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" className="form-control" placeholder='Your Name' />
                        </label>
                      </div>

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

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="zmdi zmdi-lock me-3"></i>
                        <label className="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4cd" className="form-control" placeholder="Confirm Password" />
                        </label>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          value=""
                          id="form2Example3c"
                        />
                        <label className="form-check-label" htmlFor="form2Example3">
                          Remember Me
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn btn-primary btn-lg">Register</button>
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

export default signup
