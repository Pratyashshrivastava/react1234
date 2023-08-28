import DocViewer, {DocViewerRenderers} from "@cyntler/react-doc-viewer";
import React, { Component, useEffect, useState} from "react";
import './empty.css';

export default function View(){
    const logOut = () => {
        window.localStorage.clear();
        window.location.href = "./sign-in";
    }
    const docs = [
        {
            uri: require("../files/Resume-Pratyash-1.pdf"),
            fileType: "pdf",
            fileName: "Resume-Pratyash-1.pdf"
        }
    ]
    return (
        <div className="auth-wrapper" style={{width:"auto"}}>
            <div className= "auth-inner" style={{width:"auto"}}>
                <h1>Resume View</h1>

                <DocViewer documents={docs} pluginRenderers={DocViewerRenderers}/>
            </div>
        </div>
    );
}


// export default View;