import { cover6, cover11 } from "../../../assets/art";

const Downloads = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <img src={cover6} className="rounded" alt="" />
      <img src={cover11} className="rounded" alt="" />
    </div>
  );
};

export default Downloads;
