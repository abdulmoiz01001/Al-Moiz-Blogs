import React, { useEffect, useState } from 'react';
import { useAppStore } from '../../store';
import { useFormik } from 'formik';
import { toast } from 'sonner'
import * as Yup from 'yup';
import { apiClient } from '../../lib/api-client';
import useCloudinaryUpload from '../../hooks/useCloudinaryUpload';

const BlogModal = ({ isOpen, onClose , getBlogs }) => {
//   const { addBlog } = useAppStore(); // Destructure the addBlog function from the store

  // Define validation schema
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    subtitle: Yup.string().required('Subtitle is required'),
    image: Yup.string().url('Invalid URL'),
    description: Yup.string().required('Description is required'),
  });

  const [file, setFile] = useState(null);
  const [uploadUrl, setUploadUrl] = useState(null);
  const { uploadFile, uploading, url, error } = useCloudinaryUpload('my_videos-preset');
  const createBlog = async (newBlog) =>{
    console.log('newBlog', newBlog);
    try {
       const response = await apiClient.post('/api/blog/create', newBlog);
      console.log('response', response);
      if (response.status === 201) {
        console.log('Blog created:', response.data);
        toast.success('Blog created successfully');
        getBlogs();
      } else {
        toast.error('Failed to create blog');
        console.log('Failed to create blog:', response.data);
      }
    } catch (error) {
      console.log('error', error);
    }
  }

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      title: '',
      subtitle: '',
      image: '',
      description: '',
    },
    validationSchema,
    onSubmit: (values) => {
      const newBlog = { ...values }; // Create new blog object
      console.log('New blog:', newBlog);
      newBlog.image = uploadUrl; // Add the image URL to the new blog object
      createBlog(newBlog); // Call the addBlog function from the store
      onClose(); // Close the modal
      formik.resetForm(); // Reset form fields
    },
  });

  useEffect(() => {
    if (url) {
      console.log('url', url);
      setUploadUrl(url);
    }   
  }, [url]);

  useEffect(() => {
    if (file) {
      uploadFile(file);
    }
  }, [file]);

  const uploadFunc = (file) =>{
    console.log('file', file);
    setFile(file);
  //  const { url } =  useCloudinaryUpload(file);
  //   console.log('url', url);
  //   setUploadUrl(url);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[50%] p-6 rounded shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Add Blog</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Title:</label>
            <input
              type="text"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              className="border rounded w-full p-2"
              required
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="text-red-600">{formik.errors.title}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Subtitle:</label>
            <input
              type="text"
              name="subtitle"
              value={formik.values.subtitle}
              onChange={formik.handleChange}
              className="border rounded w-full p-2"
              required
            />
            {formik.touched.subtitle && formik.errors.subtitle ? (
              <div className="text-red-600">{formik.errors.subtitle}</div>
            ) : null}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Image URL:</label>
            <input
              type="file"
              name="image"
             
              onChange={(event) => uploadFunc(event.target.files[0]) }
              className="border rounded w-full p-2"
              required
            />
            {/* {formik.touched.image && formik.errors.image ? (
              <div className="text-red-600">{formik.errors.image}</div>
            ) : null} */}
          </div>
          <div className="mb-4">
            <label className="block mb-1">Description:</label>
            <textarea
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              className="border rounded w-full p-2"
              required
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="text-red-600">{formik.errors.description}</div>
            ) : null}
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="mr-2 bg-gray-300 p-2 rounded">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogModal;
