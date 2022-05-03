import React, { useState, useEffect } from "react";

function UploadForm(props) {
  const { updatePosts } = props;
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {};
    data.image = image;
    data.caption = caption;
    data.category_id = 1; //! we're going to need to pass down the category id as a prop
    const form = new FormData();
    form.append("image", image);
    form.append("caption", caption);
    form.append("category_id", 1);
    fetch("https://don-photo-app-backend.herokuapp.com/api/v1/photos", {
      method: "POST",
      body: form,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // updatePosts(data);
      });
  };

  return (
    <div>
      <h3>Upload Photo</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="file"
          accept="image/jpeg"
          name="image"
          multiple={false}
          onChange={(event) => setImage(event.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UploadForm;

// function Password(password) {
// const
// if password ==
//}
