var playlist = { 'bonobo':"migration" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle;
  return playlist.ar
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist
}
