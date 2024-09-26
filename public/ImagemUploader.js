import React, { useState } from 'react';
 
const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
 
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };
 
  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      {selectedImage && (
        <div>
          <h2>Pré-visualização:</h2>
          <img src={URL.createObjectURL(selectedImage)} alt="Imagem Carregada" style={{ width: '300px' }} />
        </div>
      )}
    </div>
  );
};
 
export default ImageUploader;