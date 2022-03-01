import React, { useState, useEffect, useRef } from "react";
//import imgProduct from "../../assets/imgs/product.png";
import Button from "../components/Utils/button";
import Button2 from "../components/Utils/button2";
import Input from "../components/Utils/input";
import Select from "../components/Utils/select";
import useFetch from "../components/Utils/useFetch";
import TextArea from "../components/Utils/textarea";
import ApiMessages from "../components/Utils/apiMessages";


export default function AdminPage(props) {
    const UserForm = props => {
        //const [user, setUser] = useState(props.user)
        const form = useRef(null)

        const submit = e => {
            e.preventDefault()
            const data = new FormData(form.current)
            fetch('http://localhost:3001/gis/create', { method: 'POST', body: data })
            .then(res => res.json())
            //.then(json => setUser(json.user))
        };

        return (
            <div>
            <form ref={form} onSubmit={submit}>
            <input type="text" name="title" defaultValue="Title" />
            {/* {user.errors.name && <p>{user.errors.name}</p>} */}

            <input type="text" name="category" defaultValue="Category" />
            {/* {user.errors.email && <p>{user.errors.email}</p>} */}

            <input type="text" name="description" defaultValue="Description" />
            {/* {user.errors.name && <p>{user.errors.name}</p>} */}

            <input type="file" name="thumbnail" defaultValue={"Picture"} />
            {/* {user.errors.email && <p>{user.errors.email}</p>} */}

            <input type="text" name="url" defaultValue={"Url"} />
            {/* {user.errors.email && <p>{user.errors.email}</p>} */}

            <input type="submit" name="Sign Up" />
            </form>
            </div>
        );
    }
}
