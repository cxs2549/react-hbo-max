import { cover1, cover9 } from "../../../assets/art";

const MyList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <img src={cover1} className="rounded" alt="" />
      <img src={cover9} className="rounded" alt="" />
    </div>
  );
};

export default MyList;
