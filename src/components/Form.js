import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='col-md-7 col-12 d-flex justify-content-center justify-content-md-end'>
      <div className="col-11 shadow" id="thirdBoxMain1">
                <p id="formMainHead1">
                    Please Fill Your Birth Details Here:</p>
                <form id="calculatorId" action="/" onsubmit="return submitBloomxApiCall()" className="row" style={{color:'#664421'}}>
                    <div className="mb-2 col-md-6">
                        <label for="urname" className="formlabelunwanted form-label">Enter your name</label>
                        <input required="" type="text" className="form-control" id="urname" placeholder="Enter Your Name" name="urname"/>
                    </div>
                    <div className="mb-2 col-md-6">
                        <label className="formlabelunwanted form-label">Enter your email</label>
                        <input required="" type="email" className="form-control" id="email" placeholder="Enter Your email address" name="email"/>
                    </div>
                    <div className="mb-2 col-md-6">
                        <label className="formlabelunwanted form-label">Enter your phone number</label>
                        <input required="" type="number" className="form-control" id="mobile" placeholder="Enter Your mobile" name="mobile"/>
                    </div>
                    <div className="mb-2 col-md-6">
                        <label for="gender" className="formlabelunwanted form-label">Enter your gender</label><br/>
                        <select className="form-select" id="gender">
                            <option style={{color:'black'}}>male</option>
                            <option style={{color:'black'}}>female</option>
                        </select>
                    </div>
                    <div className="mb-2 col-md-6">
                        <label for="purpose" className="formlabelunwanted form-label">Purpose to wear gemstone</label>
                        <select className="form-select" id="purpose">
                            <option style={{color:'black'}}>General</option>
                            <option style={{color:'black'}}>Relationship</option>
                            <option style={{color:'black'}}>Education</option>
                            <option style={{color:'black'}}>Job and career</option>
                            <option style={{color:'black'}}>Health</option>
                            <option style={{color:'black'}}>Business</option>
                            <option style={{color:'black'}}>All relationship, Education, Job, career, Health, Business
                            </option>
                        </select>
                    </div>
                    <div className="mb-2 col-md-6">
                        <label className="formlabelunwanted form-label">Body weight (in kg)</label>
                        <input required="" type="number" className="form-control" id="weight" placeholder="Enter Your weight" name="weight"/>
                    </div>
                    <div className="mb-2 col-md-6">
                        <label for="dob" className="formlabelunwanted form-label">Enter your birth date</label>
                        <input required="" type="date" className="form-control" id="dob" placeholder="Enter Date of birth" name="d"/>
                    </div>
                    <div className="mb-2 col-md-6">
                        <label for="tob" className="formlabelunwanted form-label">Enter your birth time</label>
                        <input required="" type="time" className="form-control" id="tob" placeholder="Enter Time of birth" name="t"/>
                    </div>
                    <div className="mb-2 mt-1 col-md-6">
                        <label id="cityName" for="tz" className="formlabelunwanted form-label">Enter your birth
                            place:</label>
                        <input required="" autocomplete="off" type="text" className="form-control" list="timeZonesValue" id="tz" placeholder="Enter birth place here" name="tz" onkeyup="suggestCity(this)"/>
                        <datalist onchange="cityNameReset()" id="timeZonesValue">
                        </datalist>
                        <div id="cityNameProcess">
                        </div>
                        <div id="timeZonesValueError" style={{color:'red',display:'none'}}>
                            Enter Village, Block or City Name here then select the value from suggested options.
                        </div>
                        <button type="submit" className="mt-4 btn col-12 btn-dark submitBtn" style={{fontSize:'20px',padding:'8px',backgroundColor:'#664421'}}>Submit</button>
                    </div>
                </form>
            </div>
    </div>
  )
}

export default Form