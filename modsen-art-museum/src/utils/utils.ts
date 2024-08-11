import * as Yup from 'yup';

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

const validationSchema = Yup.object().shape({
  searchQuery: Yup.string()
    .matches(/^[A-Za-z\s-]*$/, 'Only latin letters, spaces, and dashes are allowed')
    .nullable(),
});

export { trimArtistName, trimArtName, validationSchema };
