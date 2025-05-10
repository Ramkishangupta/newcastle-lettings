const Points = ({ points }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-[#0C1635] mb-4">Key Selling Points</h2>
      <ul className="list-disc list-inside text-[#2D3748] space-y-2">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default Points;
