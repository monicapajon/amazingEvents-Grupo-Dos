import React, { useState } from 'react';
import './admin.css';

const Post = () => {
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
                <div className="form">
                    {formSubmitted ? (
                        <p>{successMessage}</p>
                    ) : (
                        <div>
                            <button className='dropButton' onClick={() => setIsFormVisible(!isFormVisible)}>
                                Add Event
                            </button>
                            {isFormVisible && (
                                <form className="form" onSubmit={handleSubmit}>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        name="name"
                                        className="input"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label htmlFor="category">Category</label>
                                    <input
                                        name="category"
                                        className="input"
                                        type="text"
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label htmlFor="date">Date</label>
                                    <input
                                        name="date"
                                        className="input"
                                        type="text"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label htmlFor="description">Description</label>
                                    <textarea
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                    ></textarea>

                                    <label htmlFor="image">Image url</label>
                                    <input
                                        name="image"
                                        className="input"
                                        type="text"
                                        value={formData.image}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label htmlFor="place">Place</label>
                                    <input
                                        name="place"
                                        className="input"
                                        type="text"
                                        value={formData.place}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label htmlFor="price">Price</label>
                                    <input
                                        name="price"
                                        className="input"
                                        type="number"
                                        value={formData.price}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label htmlFor="capacity">Capacity</label>
                                    <input
                                        name="capacity"
                                        className="input"
                                        type="number"
                                        value={formData.capacity}
                                        onChange={handleChange}
                                        required
                                    />

                                    <label htmlFor="assistance">Assistance</label>
                                    <input
                                        name="assistance"
                                        className="input"
                                        type="number"
                                        value={formData.assistance}
                                        onChange={handleChange}
                                    />

                                    <label htmlFor="estimate">Estimate</label>
                                    <input
                                        name="estimate"
                                        className="input"
                                        type="number"
                                        value={formData.estimate}
                                        onChange={handleChange}
                                    />

                                    <div className="div-button">
                                        <button
                                            className="button-form-contact"
                                            type="submit"
                                            value="submit"
                                        >
                                            Enviar
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    )}
                </div>
    );
};

export default Post;