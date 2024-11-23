import React, { useRef } from 'react'
import "./VideoPlayer.css"
import video from "../../../../assets/college_video.mp4"
import { User } from 'lucide-react'

const VideoPlayer = ({playState,setPlayState}) => {

  const player = useRef(null);

  const closePlayer = (e) => {
    if(e.target === player.current){
      setPlayState(false)
    }
  }

  return (
    <div onClick={closePlayer} ref={player} className={`video-player ${playState ? "" : "hide"} `}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer