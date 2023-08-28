// import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { classNames } from '@react-pdf-viewer/core'
import './PDFviewer.css'
import { Viewer, Worker } from '@react-pdf-viewer/core'
export default function PDFviewer() {

    const [pdfFile, setPDFFile] = useState(null);
    const [viewPdf, setViewPdf] = useState(null);

    const fileType = ['application/pdf']
    const handleChange = (e) =>{
        let selectedFile = e.target.files[0]
        if(selectedFile){
            if(selectedFile && fileType.includes(selectedFile.type)){
                let reader = new FileReader()
                reader.readAsDataURL(selectedFile)
                reader.onload = (e) => {
                    setPDFFile(e.target.result)
                }
            }
            else{
                setPDFFile(null)
            }
        }
        else{
            console.log("Please Select")
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(pdfFile!== null){
            setViewPdf(pdfFile)
        }
        else{
            setViewPdf(null)
        }
    }
    return(
        <div className = 'Container'>
            <form>
                <input type = 'file' className='form-control' onChange={handleChange}/>
                <button type='submit' className='btn btn-success'>View pdf</button>
            </form>

            <h2>View pdf</h2>

            <div className='pdf-container'>
                 <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                    {viewPdf && <>
                        <Viewer fileUrl={viewPdf}/>
                    </>}
                    {!viewPdf&&<>No PDF</>}
                 </Worker>
            </div>
        </div>
    )
}

// export default PDFviewer