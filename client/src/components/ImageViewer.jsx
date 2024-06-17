import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageViewer = (props) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleRetrieve = async () => {
        setLoading(true);
        try {
            const requestBody = {
                store_id: '6670211ba4568b4a0e16f15e',
                index: props.index,
            };

            const response = await axios.post('http://localhost:8010/item/retrieve', requestBody, {
                responseType: 'arraybuffer'
            });

            const blob = new Blob([response.data], { type: response.headers['content-type'] });
            const reader = new FileReader();

            reader.onload = () => {
                setImageUrl(reader.result);
                setLoading(false);
                setError(null);
            };

            reader.onerror = () => {
                setLoading(false);
                setError('Failed to retrieve image.');
            };

            reader.readAsDataURL(blob);
        } catch (error) {
            console.error('Error retrieving image:', error);
            setLoading(false);
            setError('Failed to retrieve image.');
        }
    };
    useEffect(() => {
        handleRetrieve();
    }, []);
    return (
        <div>
            {/* <h2>View Image</h2> */}
            {/* <button onClick={handleRetrieve} disabled={loading}>
                {loading ? 'Loading...' : 'Retrieve Image'}
            </button>
            {error && <div style={{ color: 'red' }}>{error}</div>} */}
            {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%' }} />}
        </div>
    );
};

export default ImageViewer;