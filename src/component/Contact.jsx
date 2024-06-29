import React, { useState } from 'react'

const Contact = () => {
    const [inputValue, setInputValue] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the submitted data
    console.log('Submitted:', inputValue);

    // Reset the input field
    setInputValue('');
    setInputValue1('');
    setInputValue2('');
    setInputValue3('');

  };
  const handleSubmit1 = (e) => {
    e.preventDefault();
    // Do something with the submitted data
    console.log('Submitted:', inputValue);

    // Reset the input field
    setInputValue4('');

  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputChange1 = (e) => {
    setInputValue1(e.target.value);
  };
  const handleInputChange2 = (e) => {
    setInputValue2(e.target.value);
  };
  const handleInputChange3 = (e) => {
    setInputValue3(e.target.value);
  };
  const handleInputChange4 = (e) => {
    setInputValue4(e.target.value);
  };
  return (
    <>
    <div className="r3">
            <div className="formC formC0" id='Contact'>
              <h2>Get in Touch</h2>
              <p className="paragraph">I'm a paragraph. Click here to add your own text and edit me.</p>
              <form onSubmit={handleSubmit} >
                <div className='namediv widthHeight'>
                  <div>
                    <label className='paragraph' htmlFor="fname">First Name *</label> <br />
                    <input type="text" name="Fname" onChange={handleInputChange} value={inputValue} id="fname" className='Input In1' />
                  </div>
                  <div>
                    <label className='paragraph' htmlFor="lname">Last Name *</label> <br />
                    <input type="text" name="Lname" onChange={handleInputChange1} value={inputValue1} id="lname" className='Input In1' />
                  </div>

                </div>
                <div className='mailDiv widthHeight'>
                  <label className='paragraph' htmlFor="email">Email *</label> <br />
                  <input type="email" name="Email" onChange={handleInputChange2} value={inputValue2} id="email" className='Input In2' />
                </div>

                <div className='mailDiv widthHeight message'>
                  <label className='paragraph' htmlFor="comment">Leave us a message...</label> <br />
                  <textarea name="myText" onChange={handleInputChange3} value={inputValue3} id="comment" cols="30" rows="7"></textarea>
                </div>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
          <div className="r3">
            <div className="formC formC1 width">
              <h3 className='redP Mar r3h3'>Subscribe to Our Newsletter</h3>
              <form onSubmit={handleSubmit1}>
                <div >
                  <div className='mailDiv widthHeight subsDiv'>
                    <label className='paragraph' htmlFor="email">Email *</label>
                    <input type="email" name="Email" onChange={handleInputChange4} value={inputValue4} id="email" className='Input subscribeInput In1' />
                  </div>
                  <button className='BBton' type="submit">Join</button>
                </div>
              </form>
            </div>
          </div>
    </>
  )
}

export default Contact