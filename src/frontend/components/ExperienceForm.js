import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaStar, FaRegStar } from 'react-icons/fa';
import {useFormik} from 'formik';
import './ExperienceForm.css';
import { image, title } from 'framer-motion/client';
import { validSchema } from '../../backend/ExperienceFormValidator';

const ExperienceForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // title: '',
    // description: '',
    // blog: '',
    // images: [],
    // rating: 0
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 20) {
      alert("Please upload no more than 20 images.");
      return;
    }
    setFormData(prev => ({
      ...prev,
      images: files
    }));
    
  };

  const handleRating = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
   
    
  };

  const handleSubmits = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Experience submitted successfully!');
      navigate('/services');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit experience. Please try again.');
    } finally {
      setIsSubmitting(false);
    }

        console.log(`Title is ${formData.title} Description ${formData.description} Blog ${formData.blog}`)
            console.log(`Image ${formData.images}`);
            console.log(`Reating ${formData.rating}`);
  };

  const {values, handleChange, handleSubmit, setFieldValue} = useFormik({
    initialValues:{
       title: "",
       description: "",
       blog: "",
       image: null,
       rating: 0
    },
    validationSchema: validSchema,
    handleSubmits,
  })

  return (
    <div
      className="experience-bg-wrapper"
      style={{
        backgroundImage: 'url("/budget2-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="experience-form-container">
        <form className="experience-form" onSubmit={handleSubmit}>
          <h2>Share Your Trip Experience</h2>

          <div className="form-group">
            <label htmlFor="title">Trip Title</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Enter trip title"
              value={values.title}
              onChange={handleChange}
              
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              rows="3"
              placeholder="Short description of the trip"
              value={values.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="blog">Trip Blog (10–20 lines)</label>
            <textarea
              id="blog"
              name="blog"
              rows="15"
              placeholder="Share your full trip story..."
              value={values.blog}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="images">Upload Photos (10–20)</label>
            <input
              id="images"
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              required
            />
            <small>{formData.images.length} images selected</small>
          </div>

          <div className="form-group">
            <label>Rate Your Experience</label>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= formData.rating ? 'filled' : ''}
                  onClick={() => setFieldValue("rating",star)}
                >
                  {star <= values.rating ? <FaStar /> : <FaRegStar />}
                </span>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Experience'}
            </button>
          </div>
        </form>

        <div className="back-container">
          <button 
            type="button"
            className="back-button"
            onClick={() => navigate('/services')}
            disabled={isSubmitting}
          >
            <FaArrowLeft /> Back to Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceForm;
