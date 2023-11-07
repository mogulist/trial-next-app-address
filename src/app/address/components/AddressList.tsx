type Address = {
  roadAddr: string;
  jibunAddr: string;
  zipNo: string;
  amdCd: string;
} & Record<string, string>;

type Props = {
  data: Address[];
};

const AddressList = ({ data }: Props) => {
  return (
    <ul className="h-60 px-4 text-sm bg-white text-black overflow-auto divide-y divide-slate-300">
      {data.map((addr) => (
        <li key={addr.amdCd} className="flex flex-row justify-between py-1 ">
          <div className="flex flex-col">
            <div className="font-semibold">{addr.roadAddr}</div>
            <div className="font-thin">{addr.jibunAddr}</div>
          </div>
          <div>{addr.zipNo}</div>
        </li>
      ))}
    </ul>
  );
};

export default AddressList;
