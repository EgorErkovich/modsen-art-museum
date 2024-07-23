const trimArtistName = (artist: string): string => {
  const cleanedArtist = artist.replace(/\n/g, ';');
  const regex = /[^\p{L}\s]/gu;

  return cleanedArtist.split(regex)[0].trim();
};

const trimArtName = (artName: string, maxLength: number): string => {
  if (artName.length <= maxLength) {
    return artName;
  }

  const trimmedName = artName.slice(0, maxLength);

  const lastSpaceIndex = Math.max(trimmedName.lastIndexOf(' '), trimmedName.lastIndexOf('-'));

  return lastSpaceIndex > -1 ? `${trimmedName.slice(0, lastSpaceIndex)}...` : `${trimmedName}...`;
};

export { trimArtistName, trimArtName };
