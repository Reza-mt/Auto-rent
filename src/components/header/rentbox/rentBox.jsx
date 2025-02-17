import { RentForm } from "./rentForm";
import { RentTabs } from "./rentTabs";

export const RentBox = () => {
  return <div className=" bg-white rounded-xl border-2 border-gray-300 p-4 mx-40  w-4/5">
    <RentTabs/>
    <RentForm/>
  </div>;
};
