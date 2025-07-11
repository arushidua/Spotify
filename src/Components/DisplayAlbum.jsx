import React, { useContext } from 'react'
import NavBar from './NavBar'
import Sidebar from './Sidebar'

import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {

    const { id } = useParams();
    const albumData = albumsData[id];
    const {playWithId} = useContext(PlayerContext);

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
                        <b> Spotify </b>
                        • 1,232,154 saves
                        • 
                        
                        about 2 hr 30 mins 
                    </p>
                </div>
            </div>
            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7] text-sm parPanel '>
                <p className='panel'><b className='mr-4'>#</b>Title</p>
                <p className='text-center panel'>Plays</p>
                <p className='panel ml-4'>Album</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt="" />
            </div>
            <hr />
            {
                songsData.map((item,index)=>(
                    <div key={index} onClick={() => playWithId(item.id)} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-sm cursor-pointer'>
                        <p className='text-white '>
                            <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                            <img className='inline w-10 mr-5' src={item.image} alt="" />
                            {item.name}
                        </p>
                        <p className='text-center'>{item.plays}</p>
                        <p className='ml-4'>{albumData.name}</p>
                        <p className='text-center'>{item.duration}</p>
                    </div>                    
                ))
            }
        </>)
}

export default DisplayAlbum