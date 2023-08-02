import React from 'react'

export default function F() {
  return (
    <div>
      <section className='bg-light'>
        <div className='container '>
            <div className='row d-flex justify-content-center align-item-center'>
                <div className='col-12 p-2'>
                    
                    <div className='card ' style={{border:"none"}}>

                      <div className='row g-0 '>
                        
                      <div className='col-lg-6 col-md-6 '>
                      <h4 className='text-dark px-2  ' style={{fontWeight:"600"}}>Untitled UI</h4>
               <div className='form-group py-lg-4  mt-lg-4 px-md-2 px-lg-5 px-md-2 py-md-4'>
                 <h3 style={{ fontWeight:"600"}}className='px-5  '>Welcome back,Olivia</h3>
                 <p className='px-5' style={{fontWeight:"400"}}>Welcome back! Please enter your details</p>
                 <div className='form-group py-2 px-5'>
                 <button
                          className=" btn btn-white col-lg-11 col-md-11 square border"
                          type="button"
                        >
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFzD69JyIH7WCLKKdrYqCtkMPsko0-PBSnjolfusXQrN1qQrPWaaRLvSxiy9G3F_etqo&usqp=CAU"
                            className="img-fluid"
                            style={{ width: "2rem" }}
                          ></img>
                          Login with Goggle
                        </button>
                 </div>
                 <div className='form-group py-2 px-5 col-lg-11 col-md-11'>
                    <input type='Name' className='form-control ' placeholder='Name' style={{borderBottom:'2px solid silver',borderLeft:"none" ,borderRight:"none",borderTop:"none",fontWeight:"500"}}></input>
                 </div>
                 <div className='form-group py-2 px-5 col-lg-11 col-md-11'>
                    <input type='Email' className='form-control ' placeholder='Email' style={{borderBottom:'2px solid silver',borderLeft:"none" ,borderRight:"none",borderTop:"none",fontWeight:"500"}}></input>
                 </div>
                 <div className='form-group py-2 px-5 col-lg-11 col-md-11'>
                    <input type='Password' className='form-control ' placeholder='Password' style={{borderBottom:'2px solid silver',borderLeft:"none" ,borderRight:"none",borderTop:"none",fontWeight:"500"}}></input>
                 </div>
                 <div className='form-group py-2 px-5 '>
                    <button className='btn btn-dark text-white col-lg-11 col-md-11' type='button' style={{borderRadius:"8px"}}>Create account</button> 
                 </div>
                 <div className="form-group px-5 py-2">
                        <button
                          className=" btn btn-white col-lg-11 col-md-11 square border"
                          type="button"
                        >
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFzD69JyIH7WCLKKdrYqCtkMPsko0-PBSnjolfusXQrN1qQrPWaaRLvSxiy9G3F_etqo&usqp=CAU"
                            className="img-fluid"
                            style={{ width: "2rem", borderRadius: "8px" }}
                          ></img>Sign with Google
                        </button>
                      </div>
                 <div className='form-group '>
                  
                    <p className='small text-center'>Already have an account?<a href='#' className='text-link text-dark' style={{fontWeight:"700"}}>Log in</a> </p>
                 </div>
                        </div>

                        </div>
                <div className='col-lg-6 col-md-6'>
                <img src="https://images.unsplash.com/photo-1543652437-15ae836b33e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fHBuZyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" className='img-fluid ' style={{width:"570px",height:"600px"}}></img>
              </div>
              </div>
             
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
