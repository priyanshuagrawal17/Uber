import React, { useEffect, useRef } from 'react';

const LiveTracking = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        const updateMapCenter = (latitude, longitude) => {
            // Replace this URL with the actual Ola Maps embed URL and parameters if available
            if (mapRef.current) {
                mapRef.current.src = `https://olamaps.com/embed?lat=${latitude}&lng=${longitude}&zoom=15`;
            }
        };

        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            updateMapCenter(latitude, longitude);
        });

        const watchId = navigator.geolocation.watchPosition((position) => {
            const { latitude, longitude } = position.coords;
            updateMapCenter(latitude, longitude);
        });

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    return (
        <div style={{ width: '100%', height: '100%' }}>
            {/* Replace the src URL with the actual Ola Maps embed URL and parameters */}
            <iframe
                ref={mapRef}
                title="Ola Live Tracking"
                width="100%"
                height="100%"
                frameBorder="0"
                src="https://olamaps.com/embed?lat=-3.745&lng=-38.523&zoom=15"
                allowFullScreen
            />
        </div>
    );
};

export default LiveTracking;