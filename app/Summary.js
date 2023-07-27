"use client";
import { useState } from "react";
function Summary({ formData }) {
    return (
        <div id="summary">
            <h2>Summary</h2>
            <p>Form Type: Form {formData.formType}</p>
            <p>Age: {formData.age}</p>
            {formData.formType === "A" ? <p>DC Shows: {formData.Shows}</p> : <p>Marvel Shows: {formData.Shows}</p>}
        </div>
    );
}
export default Summary;
