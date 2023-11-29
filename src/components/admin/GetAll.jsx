import React, { useState, useEffect } from 'react';
import './admin.css';

const GetAll = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isTableVisible, setIsTableVisible] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/eventos');
                if (response.ok) {
                    const data = await response.json();
                    setEvents(data);
                } else {
                    console.error('Error al obtener los eventos:', response.status, response.statusText);
                }
            } catch (error) {
                console.error('Error al obtener los eventos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="form">
            <button className="dropButton" onClick={() => setIsTableVisible(!isTableVisible)}>
                {isTableVisible ? 'Hide Event Table' : 'Show Event Table'}
            </button>

            {isTableVisible && (
                <div>
                    {loading ? (
                        <p>Loading events...</p>
                    ) : events.length > 0 ? (
                        <div>
                            <table>
                                <thead>
                                    <tr className='borde'>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Date</th>
                                        <th>Place</th>
                                        <th>Price</th>
                                        <th>Capacity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {events.map((event) => (
                                        <tr key={event.name}>
                                            <td>{event.name}</td>
                                            <td>{event.category}</td>
                                            <td>{event.date}</td>
                                            <td>{event.place}</td>
                                            <td>{event.price}</td>
                                            <td>{event.capacity}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <p>No events available.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default GetAll;
