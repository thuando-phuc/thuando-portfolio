import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Container, Grid, Typography, Box } from '@mui/material';
import ProjectCard from '../components/ProjectCard';


function ViewAlbum() {
  const { title } = useParams();
  const location = useLocation();
  const photos = location.state?.photos || [];

  console.log('Photos received:', photos); // Add this to debug

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading mb-8">{title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={photo.url || photo}
                alt={photo.title || `Photo ${index + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
              {photo.title && (
                <div className="p-4">
                  <h3 className="text-lg font-medium">{photo.title}</h3>
                  <p className="text-tertiary">{photo.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewAlbum;
