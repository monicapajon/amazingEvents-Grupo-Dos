import React, { useState } from 'react';
import './admin.css';

const Delete = () => {
    const [eventNameToDelete, setEventNameToDelete] = useState('');
    const [isDivVisible, setIsDivVisible] = useState(false);

    const handleDeleteEvent = async () => {
        try {
            const response = await fetch(`http://localhost:3000/eventos/${eventNameToDelete}`, {
                method: 'DELETE',
            });

            const data = await response.json();

            if (response.ok) {
                console.log(data.message);
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const toggleDivVisibility = () => {
        setIsDivVisible(!isDivVisible);
    };

    return (
        <div>
            <button className='dropButton' onClick={toggleDivVisibility}>Delete Event</button>

            {isDivVisible && (
                <form className="form">
                    <label htmlFor="name">Event Name</label>
                    <input
                        name="name"
                        className="input"
                        type="text"
                        value={eventNameToDelete}
                        onChange={(e) => setEventNameToDelete(e.target.value)}
                    />
                    <button className="button-form-contact" onClick={handleDeleteEvent}>Delete Event</button>
                </form>
            )}
        </div>
    );
};

export default Delete;
