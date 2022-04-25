import React, { useState, useEffect } from "react";

function UploadForm() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("hello");

  const handleSubmit = (e) => {
    e.preventDefault();
    // const form = new FormData();
    // form.append("image", image);
    let data = {};
    data.image = image;
    data.caption = caption;
    data.category_id = 1;
    const form = new FormData();
    form.append("image", image);
    form.append("caption", caption);
    form.append("category_id", 1);
    fetch("http://localhost:3000/api/v1/photos", {
      method: "POST",
      body: form,
    })
      .then((resp) => resp.json())
      .then((data) => setImage(data));
  };

  return (
    <div>
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
