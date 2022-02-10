import React from 'react'

const contact = () => {
  return <>
    <section className="vh-60" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Contact us</p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="zmdi zmdi-accounts me-3 zmdi-hc-lg"></i>
                        <label className="form-outline flex-fill mb-0">
                          <input type="text" id="form3Example1c" className="form-control" placeholder='Your Name' />
                        </label>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="zmdi zmdi-email me-3 zmdi-hc-lg"></i>
                        <label className="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" className="form-control" placeholder="Email" />
                        </label>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="zmdi zmdi-comment-text me-3 zmdi-hc-lg"></i>
                        <label className="form-outline flex-fill mb-0">
                          <textarea rows="4" type="password" id="form3Example4c" className="form-control" placeholder="Message" />
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-3 mb-2 mb-lg-3">
                        <button type="button" className="btn btn-primary">Send message</button>
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

export default contact
