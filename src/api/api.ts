const base = {
  _baseUrl: 'https://www.nbrb.by/api/refinancingrate',
  _baseOnDate: '2021-11-25',
};

export const getResource = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    return new Error(`Could not fetch ${url}, status: ${response.status}`);
  }
  return await response.json();
};

export const getRefinancingRate = async (ondate = base._baseOnDate) => {
  const res: RefinancingRateType[] = await getResource(
    `${base._baseUrl}?ondate=${ondate}`
  );
  return res;
};

type RefinancingRateType = {
  Date: string;
  Value: string;
};
