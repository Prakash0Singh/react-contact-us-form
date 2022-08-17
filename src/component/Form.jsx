import React from 'react'
import "./style.css";
const Form = () => {
  return (
    <><div className="contaier-fluid">
        <h1 className='text-center display-3 text-secondary'>Contact Us</h1>
        <div className="mainbox-container mx-auto mt-5">
        <div className="side-container">

        </div>
        <div className="form-container ">
          <form className='mx-auto my-auto'>
          <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="name"/>
              <label hmtlfor="floatingInput">Name</label>
              </div>
            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
              <label hmtlfor="floatingInput">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <textarea className="form-control" placeholder="Leave a query here" id="floatingTextarea" rows="4" cols="20"></textarea>
                <label hmtlfor="floatingTextarea">Queries</label>
              </div>
            <input type="submit" className='btn btn-success float-end mt-5' value="Submit" />
          </form>
          </div>
        </div>
        </div>
    </>
  )
}

export default Form