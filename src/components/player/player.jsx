import React, { useEffect, useState } from "react";
import music from "../../audio/SoundDesign1.2.mp3";
import { Main, Play, Pause, Previous } from "./style.jsx";

function Player() {
  const [audioPlayer, setAudioPlayer] = useState("");
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const [songRestart, setSongRestart] = useState(false);
  const [playhead, setPlayhead] = useState(0);

  useEffect(() => {
    const player = document.getElementById("audio");
    setAudioPlayer(player);
    setDuration(player.duration);

    player.addEventListener("canplaythrough", (event) => {
      setCanPlay(true);
    });

    player.addEventListener("timeupdate", (event) => {
      setPlayhead(
        ((player.currentTime.toFixed(2) / player.duration) * 100).toFixed(2)
      );
    });

    if (isPlaying && canPlay) {
      player.play();
    } else {
      player.pause();
    }

    if (songRestart) {
      playerRestart();
      setSongRestart(false);
    }

    function playerRestart() {
      player.currentTime = 0;
      setPlayhead(0);
    }
  }, [isPlaying, canPlay, songRestart]);

  return (
    <div>
      <Main>
        <div className="wrapper">
          <div className="controls">
            <div className="play-pause">
              {isPlaying ? (
                <Pause onClick={() => setIsPlaying(false)}>||</Pause>
              ) : (
                <Play ready={canPlay} onClick={() => setIsPlaying(true)}>
                  {">"}
                </Play>
              )}
            </div>
            <div className="time">
              {audioPlayer && (
                <span className="small-text">
                  {audioPlayer.currentTime.toFixed()} / {duration.toFixed()}
                </span>
              )}
            </div>
          </div>
          <div className="info">
            <h3>All The Small Things</h3>
            <h5>Blink-183</h5>
          </div>
          <Previous onClick={() => setSongRestart(true)}>{"<="}</Previous>
          <div className="player">
            <input
              type="range"
              id="seek-slider"
              max={duration ? duration : 100}
              value={playhead}
              onChange={(e) => setPlayhead(e.target.value)}
              onMouseUp={() =>
                (audioPlayer.currentTime = (playhead * 1).toFixed())
              }
            />

            <audio id="audio" src={music} type="audio/mp3" />
          </div>
        </div>
      </Main>
    </div>
  );
}

export default Player;
