import axios from 'axios';
import React, { useState } from 'react'

function Create2() {

    const [companyName, setcompanyName] = useState("")
    const [contactName, setcontactName] = useState("")

    const save = () => {

        let newSupplier = {
            companyName: companyName,
            contactName: contactName
        }

        // API CALL
        axios.post("https://northwind.vercel.app/api/suppliers", newSupplier)
            .then((res) => {
                console.log("res", res);
            })
            .catch((err) => {
                console.log("err", err);
            })

    }

    return (<>
        <div>
            <label htmlFor="">Company Name</label>
            <input type="text" value={companyName} onChange={(e) => setcompanyName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="">Contact Name</label>
            <input type="text" value={contactName} onChange={(e) => setcontactName(e.target.value)} />
        </div>
        <button onClick={save}>Save</button>

    </>)
}

export default Create2