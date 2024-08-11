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

const formatDimensions = (dimensions: string) => {
  let formattedDimensions = 'Unknown dimensions';
  const sheetIndex = dimensions.indexOf('Sheet:');
  const framedIndex = dimensions.indexOf('; Framed:');
  let slicedDimensions = '';

  if (sheetIndex === -1) {
    slicedDimensions = `Sheet: ${dimensions
      .split('\n')[0]
      .slice(dimensions.split('\n')[0].indexOf(':') + 2, framedIndex)
      .trim()}`;
  } else {
    slicedDimensions = dimensions.split('\n')[0].slice(sheetIndex, framedIndex).trim();
  }

  const cmPart = slicedDimensions.split('(')[0].replace('Sheet:', '').replace('a)', '').trim();
  const inPart = slicedDimensions.split('(')[1].replace(')', '').trim();

  formattedDimensions = `Sheet: ${inPart} (${cmPart})`;

  return formattedDimensions;
};

const handleSortByAlphabet = (
  sortOrder: 'asc' | 'desc',
  setSortOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>,
  setSortByDate: React.Dispatch<React.SetStateAction<'asc' | 'desc' | null>>
) => {
  const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
  setSortOrder(newOrder);
  setSortByDate(null);
};

const handleSortByDate = (
  sortByDate: 'asc' | 'desc' | null,
  setSortOrder: React.Dispatch<React.SetStateAction<'asc' | 'desc'>>,
  setSortByDate: React.Dispatch<React.SetStateAction<'asc' | 'desc' | null>>,
  fetchSortedData: (order: 'asc' | 'desc', sortBy: string) => Promise<void>
) => {
  const newDateOrder = sortByDate === 'asc' ? 'desc' : 'asc';
  setSortByDate(newDateOrder);

  setSortOrder(newDateOrder === 'asc' ? 'asc' : 'desc');
  fetchSortedData(newDateOrder, 'date_start');
};

export {
  formatDimensions,
  handleSortByAlphabet,
  handleSortByDate,
  trimArtistName,
  trimArtName,
  validationSchema,
};
