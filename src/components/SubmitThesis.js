import React from 'react';
import '../css/submitThesis.css'
import SearchNavBar from "./SearchNavBar";
import'../css/logo.css'

import Footer from'./Footer'

const handleFormSubmit = (e) => {
    e.preventDefault();
};

const SubmitThesis = () =>{
    return(
        <div>
            <SearchNavBar/>

            <div className="containerA">
                    <form className="form" onSubmit={handleFormSubmit}>
                        <fieldset className='fieldset'>
                            <div className="containerB">
                                <div className="form-column left">
                                    <label for="title">Title</label>
                                    <input type="text" className="text-input" id="title" placeholder="Enter title here" />
                                    <label for="abstract">Abstract</label>
                                    <textarea id="abstract" placeholder="Enter abstract here"></textarea>
                                    <label for="advisors">Referenced Advisors</label>
                                    <input type="text" id="advisors" className="text-input" placeholder="Enter name of advisors" />
                                    
                                    <label for="file-upload" className="upload-template">
                                        <i className="fa fa-cloud-upload"></i>Upload File (.docx/.pdf)
                                        <input type="file" id="file-upload" />
                                    </label>
                                   
                                    
                                </div>
                                <div className="form-column right">
                                    <label for="referenced-thesis">Referenced Thesis</label>
                                    <textarea id="referenced-thesis" placeholder="Enter referenced thesis details"></textarea>
                                    <button className="download-template">
                                        <i className="fas fa-download"></i> Download Submitted Thesis
                                    </button>
                                    <label for="thesisID">Thesis ID</label>
                                    <input type="text" id="thesisID" className="text-input" placeholder="Enter Thesis ID" />
                                    <label for="review-from">Review Requested From</label>
                                    <input type="text" id="review-from" className="text-input" placeholder="Enter reviewer names" /> 

                                    <button className="submit-button">
                                        <div className="icons">
                                            Submit Thesis<i className='fas fa-angle-double-right'></i>
                                        </div>
                                    
                                    </button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
            </div>
            <Footer/>
           
        </div>
    );
}
export default SubmitThesis;