import { cover3, cover18 } from "../../../assets/art";

const Downloads = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <img src={cover3} className="rounded" alt="" />
      <img src={cover18} className="rounded" alt="" />
    </div>
  );
};

export default Downloads;
