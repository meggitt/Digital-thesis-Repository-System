/* File written by: Chauhan, Dharti Ranchhodbhai, Student ID: 1002172493 */
import React, { useState } from 'react'; // Importing React and useState hook
import '../css/submitThesis.css'; // Importing CSS for styling the Submit Thesis Page
import SearchNavBar from "./SearchNavBar"; // Importing the SearchNavBar component
import '../css/logo.css'; // Importing logo CSS
import { IoCloudUpload } from "react-icons/io5"; // Importing upload icon
import { FaDownload } from "react-icons/fa6"; // Importing download icon
import Footer from './Footer'; // Importing the Footer component
import Select from 'react-select'; // Importing Select component from react-select

const SubmitThesis = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
    };

    // Custom styles for the Select component
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
            backgroundColor: state.isSelected ? '#2b2b2b' : state.isFocused ? '#3f3f3f' : '#131313',
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

    // State variables for storing references and uploaded file
    const [refadvisor, setRefAdvisor] = useState([]);
    const [refthesis, setRefThesis] = useState([]);
    const [advisor, setAdvisor] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null); // State for the uploaded file

    // Handlers for selecting options in the dropdowns
    const handleRefSelectChange = (selectedOptions) => {
        setRefAdvisor(selectedOptions ? selectedOptions.map(option => option.value) : []);
    };

    const handleThesisSelectChange = (selectedOptions) => {
        setRefThesis(selectedOptions ? selectedOptions.map(option => option.value) : []);
    };

    const handleAdvisorSelectChange = (selectedOptions) => {
        setAdvisor(selectedOptions ? selectedOptions.map(option => option.value) : []);
    };

    // Handler for downloading the thesis template
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/template.docx'; // Path to the template
        link.setAttribute('download', 'ThesisTemplate.docx'); // File name for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    // Handler for file input change
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadedFile(file.name); // Store the name of the uploaded file
        }
    };

    return (
        <div>
            <SearchNavBar /> {/* Render the search navigation bar */}

            <div className="fcenter">
                <fieldset className='fieldset'> {/* Fieldset for styling */}
                    <legend className='legendA'>
                        <h2>Submit Thesis</h2>
                    </legend>
                    <form action="#" className="submitform" id="forms" onSubmit={handleFormSubmit}>
                        <div className="containerB">
                            <input type="text" className="text-input" id="title" placeholder="Enter Thesis Title here" required />
                            <br />
                            <textarea id="abstract" placeholder="Enter Abstract here"></textarea>
                            <br />

                            {/* Multi-select for referenced advisors */}
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

                            {/* Multi-select for referenced theses */}
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

                            {/* Button to download the thesis template */}
                            <button className="button-template" onClick={handleDownload}>
                                <FaDownload />  &nbsp; Download Template
                            </button>

                            <br />

                            {/* Multi-select for advisors to review the thesis */}
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

                            {/* File upload input */}
                            <label htmlFor="file-upload" className="button-template">
                                <IoCloudUpload /> &nbsp; Upload File (.docx/.pdf)
                                <input type="file" id="file-upload" onChange={handleFileChange} accept=".pdf,.docx" required />
                            </label>
                            {uploadedFile && (
                                <div className="uploaded-file">
                                    <span>{uploadedFile}</span> {/* Display name of uploaded file */}
                                </div>
                            )}
                            <br />

                            <div className='input3'>
                                <button className="button-85">
                                    Submit Thesis {/* Submit button */}
                                </button>
                            </div>
                        </div>
                    </form>
                </fieldset>
            </div>
            <Footer /> {/* Render the footer */}
        </div>
    );
}

export default SubmitThesis; // Export the SubmitThesis component for use in other files
