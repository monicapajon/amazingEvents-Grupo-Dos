import React, { useState } from 'react';
import Post from './Post'
import Delete from './Delete'
import GetAll from './GetAll';
import './admin.css';

const Admin = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    date: '',
    description: '',
    image: '',
    place: '',
    price: 0,
    capacity: 0,
    assistance: 0,
    estimate: 0,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/eventos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Evento creado exitosamente');
        setFormSubmitted(true);
        setIsFormVisible(false);
      } else {
        console.error('Error al crear el evento');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="admin-container">
    <div className="admin-content">
    <h1 className=''>ADMIN</h1>
    <div className='crud'>
          <Post/>
          <Delete/>
          <GetAll/>

    </div>
    </div>
    </div>
  );
};

export default Admin;