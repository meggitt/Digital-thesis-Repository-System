import React, { useState } from 'react';

import '../css/submitThesis.css'
import SearchNavBar from "./SearchNavBar";
import'../css/logo.css'
import {IoCloudUpload} from "react-icons/io5";
import { FaDownload } from "react-icons/fa6";
import Footer from'./Footer'
import Select from 'react-select';


const SubmitThesis = () =>{

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    const customStyles = {
        control: (provided) => ({
            ...provided,
            borderRadius: '30px', 
            padding: '1%', 
            border: 'none', 
            backgroundColor: '#2b2b2b', 
            boxShadow: 'inset 4px 4px 5px rgb(65, 65, 65)', 
            color: 'white', 
            lineHeight: '150%',
        }),
        menu: (provided) => ({
            ...provided,
            backgroundColor: '#131313', 
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#2b2b2b' : state.isFocused ? '#3f3f3f' : '#131313', // Change option background color
            color: state.isSelected ? 'white' : 'white',
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'white', 
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: '#2b2b2b', 
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: 'white', 
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: 'white', 
            ':hover': {
                backgroundColor: '#ff6347', 
                color: 'white',
            },
        }),
        placeholder: (provided) => ({
            ...provided,
            color: '#c9d1d9',
            textAlign: 'left', 
            paddingLeft: '10px', 
        }),
    };
    
    
    const [refadvisor, setRefAdvisor] = useState([]);
    const [refthesis, setRefThesis] = useState([]);
    const [advisor, setAdvisor] = useState('');

    const handleRefSelectChange = (selectedOptions) => {
        setRefAdvisor(selectedOptions ? selectedOptions.map(option => option.value) : []);
      };

    const handleThesisSelectChange = (selectedOptions) => {
        setRefThesis(selectedOptions ? selectedOptions.map(option => option.value) : []);
    };

    const handleAdvisorSelectChange = (selectedOptions) => {
        setAdvisor(selectedOptions ? selectedOptions.map(option => option.value) : []);
    };

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
                                    
                                    <Select
                                            styles={customStyles}
                                            options={[
                                            { value: 'Advisor1', label: 'Advisor 1' },
                                            { value: 'Advisor2', label: 'Advisor 2' },
                                            { value: 'Advisor3', label: 'Advisor 3' }
                                            ]}
                                            isMulti
                                            onChange={handleRefSelectChange}
                                            placeholder="Select Referenced Advisor"
                                            value={[
                                            { value: 'Advisor1', label: 'Advisor 1' },
                                            { value: 'Advisor2', label: 'Advisor 2' },
                                            { value: 'Advisor3', label: 'Advisor 3' }
                                            ].filter(option => refadvisor.includes(option.value))}
                                              
                                        />
                                        <br />

                                    
                                        <Select
                                            styles={customStyles}
                                            options={[
                                            { value: 'Thesis1', label: 'Thesis 1' },
                                            { value: 'Thesis2', label: 'Thesis 2' },
                                            { value: 'Thesis3', label: 'Thesis 3' }
                                            ]}
                                            isMulti
                                            onChange={handleThesisSelectChange}
                                            placeholder="Select Referenced Thesis"
                                            value={[
                                            { value: 'Thesis1', label: 'Thesis 1' },
                                            { value: 'Thesis2', label: 'Thesis 2' },
                                            { value: 'Thesis3', label: 'Thesis 3' }
                                            ].filter(option => refthesis.includes(option.value))}
                                           
                                            
                                        />
                                        <br />

                                    
                                    
                    
                                    <button className="button-template" onClick={handleDownload}>
                                        <FaDownload/>  &nbsp; Download Template
                                    </button>

                                    <br/>

                                    <Select
                                            styles={customStyles}
                                            options={[
                                            { value: 'Advisor1', label: 'Advisor 1' },
                                            { value: 'Advisor2', label: 'Advisor 2' },
                                            { value: 'Advisor3', label: 'Advisor 3' }
                                            ]}
                                            isMulti
                                            onChange={handleAdvisorSelectChange}
                                            placeholder="Review Requested From"
                                            value={[
                                            { value: 'Advisor1', label: 'Advisor 1' },
                                            { value: 'Advisor2', label: 'Advisor 2' },
                                            { value: 'Advisor3', label: 'Advisor 3' }
                                            ].filter(option => advisor.includes(option.value))}
                                              
                                        />
                                        <br />

                                   

 
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