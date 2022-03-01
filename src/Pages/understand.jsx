//read image as data url
  const [image, setImage] = useState("");


//input references
  const file = useRef();
  const preview = useRef();

    const getFile = () => {
    file.current.click();
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);
      let reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  let body = {
      title: title.current.getValue(),
      description: description.current.getValue(),
      
      images: [
        {
          name: title.current.getValue(),
          content: image,
        },
      ],
    };

    return (
    <div className="acnewoffer">
      {error && <div>{error}</div>}
      {apiLoading && <ApiLoading />}
      {data && (
        <>
          {initSubCategory(data)}
          <h1>New Offer</h1>
          <div className="div1">
            <div className="details">
              <Input
                ref={title}
                label="Title (1-10 Words)*"
                type="text"
                placeholder=""
                onChangeInput={onChangeInput}
              />
              <TextArea
                ref={description}
                label="Description (20-100 Words)*"
                type="text"
                placeholder=""
                onChangeInput={onChangeInput}
              />
            </div>  
            <div className="photo">
              <h2>Add a photo</h2>
              <div className="img">
                <img ref={preview} src={image} alt="" />
                <input
                  ref={file}
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={(e) => onImageChange(e)}
                />
                <i
                  className="fa fa-plus"
                  onClick={() => {
                    getFile();
                  }}
                ></i>
              </div>
              <br></br>
              <br></br>
              <br></br>

              <MyLocation ref={position} update={false} />
              <Button
                className="mobile"
                value="Submit"
                handleClick={onSubmit}
              />
            </div>
          </div>

          <div className="div3"></div>
          {apiMessage && (
            <ApiMessages ref={getMessage} message={apiMessage} handleClick={closeApiMessage} />
          )}
        </>
      )}
    </div>
  );

