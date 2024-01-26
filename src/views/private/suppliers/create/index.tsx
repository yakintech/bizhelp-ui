import axios from 'axios'
import { useForm } from 'react-hook-form'

//interface
type SupplierFormInputs = {
    companyName: string,
    contactName: string,
}


function Create() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SupplierFormInputs>()

    const save = (data: SupplierFormInputs) => {

        axios.post("https://northwind.vercel.app/api/suppliers", data)
            .then((res) => {
                console.log("res", res);
            })
            .catch((err) => {
                console.log("err", err);
            })
    }

    return (<>
        <form onSubmit={handleSubmit(save)}>
            <div>
                <label htmlFor="">Company Name</label>
                <input type="text" {...register("companyName", { required: true })} />
                {errors.companyName && <span style={{color:'red'}}>This field is required</span>}
            </div>
            <div>
                <label htmlFor="">Contact Name</label>
                <input type="text" {...register("contactName")} />
            </div>
            <div>
                <button type="submit">Save</button>
                {/* <input type="submit" value="Save" /> */}
            </div>
        </form>
    </>
    )
}

export default Create