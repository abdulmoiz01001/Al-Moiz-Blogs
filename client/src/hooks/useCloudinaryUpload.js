import { useState } from 'react';

const useCloudinaryUpload = (uploadPreset) => {
  const [uploading, setUploading] = useState(false);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);

  const uploadFile = async (file) => {
    setUploading(true);
    setError(null);
    setUrl(null);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset); // Your Cloudinary unsigned preset

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/dobcljwkq/image/upload`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      const data = await response.json();
      setUrl(data.secure_url); // Cloudinary URL of uploaded file
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return { uploadFile, uploading, url, error };
};

export default useCloudinaryUpload;
