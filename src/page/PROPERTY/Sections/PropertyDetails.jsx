import PropertyInfoTable from './PropertyInfoTable';
import KeySellingPoints from './Points';

const PropertyDetails = () => {
  const type = 'Other';
  const price = 135000;
  const size = '9,327 SQFT (866 SQ M)';

  const sellingPoints = [
    'Grade II* Listed Building',
    'Size: 9,327 sq ft (866.50 sq m)',
    'Asking Price: £135,000',
    'Long Leasehold',
    'Subject to Contract',
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <PropertyInfoTable type={type} price={price} size={size} />
      <KeySellingPoints points={sellingPoints} />
    </div>
  );
};

export default PropertyDetails;
