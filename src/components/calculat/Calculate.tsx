import { DetailsCalculation } from '../detailsCalculation/DetailsCalculation';
import { FormParameters } from '../formParameters/FormParameters';
import { FormResults } from '../formResults/FormResults';

export const Calculate = () => {
  return (
    <>
      <FormParameters />
      <FormResults />
      <DetailsCalculation />
    </>
  );
};
