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
    <ul className="h-72 sm:h-96 md:h-5/6 px-4 text-sm bg-white text-black overflow-auto divide-y divide-slate-300">
      {data.map((addr) => (
        <li key={addr.amdCd} className="flex flex-col justify-start py-1.5 ">
          <div>{addr.zipNo}</div>
          <div className="font-semibold">{addr.roadAddr}</div>
          <div className="font-thin">{addr.jibunAddr}</div>
        </li>
      ))}
    </ul>
  );
};

export default AddressList;
