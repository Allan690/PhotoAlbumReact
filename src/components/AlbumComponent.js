import React from 'react';
import '../assets/css/AlbumComponent.css';
import Photo from './PhotosComponent';
import { usePhotoState } from '../context';

const AlbumComponent = () => {
  const { photos } = usePhotoState();
  return (
     <div className="album">
        { photos.map((photo, ind) => <Photo {...photo } key={ind}/>) }
     </div>
 )
}

export default AlbumComponent;
