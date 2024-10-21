import React, { useState } from 'react';

import '../css/submitThesis.css'
import SearchNavBar from "./SearchNavBar";
import'../css/logo.css'
import {IoCloudUpload} from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import Footer from'./Footer'



const SubmitThesis = () =>{

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };
    
    const [refadvisor, setRefAdvisor] = useState('');
    const [refthesis, setRefThesis] = useState('');
    const [revadvisor, setRevAdvisor] = useState('');
    const [advisor, setAdvisor] = useState('');

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/template.docx'; 
        link.setAttribute('download', 'ThesisTemplate.docx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const [uploadedFile, setUploadedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFile(file.name); 
        }
    };



    return(
        <div>
            <SearchNavBar/>

            <div className="fcenter">
                    
                    <fieldset className='fieldset'>
                        <legend className='legendA'>
                        <h2>Submit Thesis</h2>
                        </legend>
                        <form action="#" className="submitform" id="forms" onSubmit={handleFormSubmit}>
                            <div className="containerB">
                                
                                    
                                    <input type="text" className="text-input" id="title" placeholder="Enter Thesis Title here" required/>
                                    <br/>
                                    <textarea id="abstract" placeholder="Enter Abstract here"></textarea>
                                    <br/>
                                    <select className="inputR" value={refadvisor} onChange={(e) => setRefAdvisor(e.target.value)} required>
                                        <option value="" disabled>Select Referenced Advisor</option>
                                        <option value="Advisor1">Advisor 1</option>
                                        <option value="Advisor2">Advisor 2</option>
                                        <option value="Advisor3">Advisor 3</option>
                                    </select>
                                    <br/>

                                    <select className="inputR" value={advisor} onChange={(e) => setAdvisor(e.target.value)} required>
                                        <option value="" disabled>Select Advisor</option>
                                        <option value="Advisor1">Advisor 1</option>
                                        <option value="Advisor2">Advisor 2</option>
                                        <option value="Advisor3">Advisor 3</option>
                                    </select>
                                    <br/>

                                    
                                    <select className="inputR" value={refthesis} onChange={(e) => setRefThesis(e.target.value)} required>
                                        <option value="" disabled>Select Referenced Thesis</option>
                                        <option value="Thesis1">Thesis 1</option>
                                        <option value="Thesis2">Thesis 2</option>
                                        <option value="Thesis3">Thesis 3</option>
                                    </select>
                                    <br/>
                    
                                    <button className="button-template" onClick={handleDownload}>
                                         Download Template &nbsp;<FaDownload/>
                                    </button>

                                    <br/>

                                    <select className="inputR" value={revadvisor} onChange={(e) => setRevAdvisor(e.target.value)} required>
                                        <option value="" disabled>Review Requested From</option>
                                        <option value="Advisor1">Advisor 1</option>
                                        <option value="Advisor2">Advisor 2</option>
                                        <option value="Advisor3">Advisor 3</option>
                                    </select>
                                    <br/>

 
                                    <label for="file-upload" className="button-template">
                                        <IoCloudUpload/> &nbsp; Upload File (.docx/.pdf)
                                        <input type="file" id="file-upload" onChange={handleFileChange} accept=".pdf,.docx" required/>
                                    </label>
                                    {uploadedFile && (
                                        <div className="uploaded-file">
                                            <span>{uploadedFile}</span>
                                        </div>
                                    )}
                                    <br/>


                                    <button className="button-85">
                                            Submit Thesis
                                    </button>
                                
                            </div>
                        </form>
                    </fieldset>
            </div>
            <Footer/>
           
        </div>
    );
}
export default SubmitThesis;