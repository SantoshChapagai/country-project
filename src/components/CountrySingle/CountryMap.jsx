import React, { useMemo} from 'react'
import { useLocation } from 'react-router-dom';
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
} from '@react-google-maps/api';

export default function CountryMap() {
  const location = useLocation();
  const country = location.state.country;
  
  
  const libraries = useMemo(() => ['places'], []);
  const mapCenter = useMemo(() => ({ lat: country.latlng[0], lng: country.latlng[1] }), [country.latlng]);

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: true,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  return (
    <div>
       <GoogleMap
        options={mapOptions}
        zoom={4}
        center={mapCenter}
        mapContainerStyle={{ width: '100%', height: '400px' }}
        onLoad={() => ('Map Loaded')}
      >
        {country.capitalInfo && (
        <MarkerF
          position={{lat: country.capitalInfo.latlng[0], lng:country.capitalInfo.latlng[1]}}
          onLoad={() => ('Marker Loaded')}
        />
        
        )}
        {country.capital}
         </GoogleMap>
    </div>
  )
}
