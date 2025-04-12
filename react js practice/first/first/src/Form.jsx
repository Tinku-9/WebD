import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({ name: "", email: "" });

    function h1(e){
        setFormData(f=>({...f,name:e.target.value}));
    }
    function h2(e){
        setFormData(f=>({...f,email:e.target.value}));
    }

    function handleSubmit(event) {
        event.preventDefault(); //  Prevents page reload
        alert(`Submitted:\nName: ${formData.name}\nEmail: ${formData.email}`);
        setFormData(f=>({...f,name:""}));
        setFormData(f=>({...f,email:""}));
    }

    return (
        <div>
            <h2>Dynamic Form</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={h1} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={h2} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            <h3>Live Preview:</h3>
            <p><b>Name:</b> {formData.name}</p>
            <p><b>Email:</b> {formData.email}</p>
        </div>
    );
}

export default Form;
