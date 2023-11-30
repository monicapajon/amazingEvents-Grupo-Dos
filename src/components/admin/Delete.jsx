import React, { useState } from 'react';
import './admin.css';

const Delete = () => {
    const [eventNameToDelete, setEventNameToDelete] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleChange = (e) => {
        setEventNameToDelete(e.target.value);
    };

    const handleDeleteEvent = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:3000/eventos/${eventNameToDelete}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setSuccessMessage('Evento eliminado exitosamente');
                setFormSubmitted(true);
                setIsFormVisible(false);
            } else {
                console.error('Error al eliminar el evento');
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
                    <button className="dropButton" onClick={() => setIsFormVisible(!isFormVisible)}>
                        Delete Events
                    </button>
                    {isFormVisible && (
                        <form className="form" onSubmit={handleDeleteEvent}>
                            <label htmlFor="name">Event Name</label>
                            <input
                                name="name"
                                className="input"
                                type="text"
                                value={eventNameToDelete}
                                onChange={handleChange}
                                required
                            />

                            <div className="div-button">
                                <button className="button-form-contact" type="submit" value="submit">
                                    Delete Event
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            )}
        </div>
    );
};

export default Delete;
