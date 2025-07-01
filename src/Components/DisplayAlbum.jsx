import React from 'react'
import NavBar from './NavBar'
import Sidebar from './Sidebar'

import { useParams } from 'react-router-dom'
import { albumsData, assets } from '../assets/assets';

const DisplayAlbum = () => {

    const { id } = useParams();
    const albumData = albumsData[id];

    return (
        <>
            {/* <Sidebar /> */}
        
            <NavBar />
            <div className='mt-10 flex gap-8 flex-row md:flex md:items-start'>

                <img className='w-48 rounded' src={albumData.image} alt="" />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4 className='text-md'>{albumData.desc}</h4>
                    <p className='mt-1'>
                        <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
                        <b>Spotify</b>
                         
                    </p>
                </div>
            </div>
        </>)
}

export default DisplayAlbum