var playlist = {'bonobo' : "migration"};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.songTitle = artistName
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist.artistName
  return playlist
}
