import { useState, useRef } from "react";
import ApiMessages from "./apiMessages";

const Form = props => {
    //const [user, setUser] = useState(props.user)
    const form = useRef(null)

    const [image, setImage] = useState("");
    const [apiMessage, setApiMessage] = useState(null);

    const getMessage = useRef();
    const preview = useRef();

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
        //console.log(event.target.files[0]);
        let reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target.result);//This represents the image URL
            console.log(e.target.result);
        };
        reader.readAsDataURL(event.target.files[0]);
        
        }
    };

    const closeApiMessage = () => {
        setApiMessage(null);
        if (getMessage.current.getMessage() === "Uploaded Successfully");
        window.location.href = "/account/offers";
    };

    const submit = e => {
        e.preventDefault()
        const data = new FormData(form.current)

        //setApiLoading(true);
        console.log(data);
        console.log(JSON.stringify(data));
        console.log(props.target)

        if (props.target==="gis"){  
            fetch('http://192.168.1.231:3001/gis/create', { 
                method: 'POST', 
                body: data }).then(res => res.json()).then((data) => {
                    setApiMessage("Uploaded Successfully");
                }
            )
        };
        if (props.target==="events"){  
            fetch('http://192.168.1.231:3001/events/add', { 
                method: 'POST', 
                body: data }).then(res => res.json()).then((data) => {
                    setApiMessage("Uploaded Successfully");
                }
            )
        };
    };

    return (
        <div>
        {props.target === "gis" && (
            <form ref={form} onSubmit={submit}>
                <input type="text" name="Title" defaultValue="Title" />
                {/* {user.errors.name && <p>{user.errors.name}</p>} */}

                <input type="text" name="Category" defaultValue="Category" />
                {/* {user.errors.email && <p>{user.errors.email}</p>} */}

                <input type="textarea" name="Description" defaultValue="Description" />
                {/* {user.errors.name && <p>{user.errors.name}</p>} */}

                <img ref={preview} src={image} alt="" />
                <input type="file" 
                    name="Thumbnail" 
                    accept="image/png, image/gif, image/jpeg"
                    onChange={(e) => onImageChange(e)}
                />
                {/* {user.errors.email && <p>{user.errors.email}</p>} */}

                <input type="text" name="URL" defaultValue="Url" />
                {/* {user.errors.email && <p>{user.errors.email}</p>} */}

                <input type="text" name="Summary_Description" defaultValue="Summary_Description" />
                {/* {user.errors.email && <p>{user.errors.email}</p>} */}

                <input type="submit" name="submit" />
            </form>
        
        )}
        {props.target === "events" && (
            <form ref={form} onSubmit={submit}>
                <input type="text" name="Category" defaultValue="Category" />
                {/* {user.errors.name && <p>{user.errors.name}</p>} */}

                <input type="text" name="Title" defaultValue="Title" />
                {/* {user.errors.email && <p>{user.errors.email}</p>} */}

                <input type="textarea" name="Description" defaultValue="Description" />
                {/* {user.errors.name && <p>{user.errors.name}</p>} */}

                <input type="text" name="X" defaultValue="X" />
                {/* {user.errors.email && <p>{user.errors.email}</p>} */}

                <input type="textarea" name="Y" defaultValue="Y" />
                {/* {user.errors.name && <p>{user.errors.name}</p>} */}

                <img ref={preview} src={image} alt="" />
                <input type="file" 
                    name="Thumbnail" 
                    accept="image/png, image/gif, image/jpeg"
                    onChange={(e) => onImageChange(e)}
                />
                {/* {user.errors.email && <p>{user.errors.email}</p>} */}

                <input type="text" name="Pictures" defaultValue="Pictures" />
                {/* {user.errors.email && <p>{user.errors.email}</p>} */}

                <input type="date" name="Date" defaultValue="Date" />
                {/* {user.errors.email && <p>{user.errors.email}</p>} */}

                <input type="submit" name="submit" />
            </form>
        
        )}
        {apiMessage && (
            <ApiMessages ref={getMessage} message={apiMessage} handleClick={closeApiMessage} />
        )}
        
        </div>
    );
}

export default Form;
