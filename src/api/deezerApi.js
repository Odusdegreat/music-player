export const fetchUserInfo = async () => {
  const res = await fetch("https://api.deezer.com/user/2529");
  const data = await res.json();
  return data;
};

export const fetchUserPlaylists = async () => {
  const res = await fetch("https://api.deezer.com/user/2529/playlists");
  const data = await res.json();
  return data.data; // data is nested
};

export const fetchAlbumInfo = async (albumId) => {
  const res = await fetch(`https://api.deezer.com/album/${albumId}`);
  const data = await res.json();
  return data;
};
