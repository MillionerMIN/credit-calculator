import { useState } from 'react';
import { DetailsCalculation } from '../detailsCalculation/DetailsCalculation';
import { FormParameters } from '../formParameters/FormParameters';
import { FormResults } from '../formResults/FormResults';

export const Calculate = () => {
  const [detail, setDetail] = useState<boolean>(false);
  const onOpenDetails = () => {
    setDetail(!detail);
  };
  return (
    <>
      <FormParameters />
      <FormResults onOpenDetails={onOpenDetails} />
      <DetailsCalculation active={detail} />
    </>
  );
};
