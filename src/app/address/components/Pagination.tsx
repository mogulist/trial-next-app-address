import Link from "next/link";

type Props = {
  keyword: string;
  page: string;
};

const Pagination = ({ keyword, page }: Props) => {
  const finalPage = page ? Number(page) : 1;
  console.log(`keyword:${keyword}, page:${page}, finalPage:${finalPage}`);

  return (
    <div className="flex flex-row justify-center bg-white text-black gap-4 pt-2 pb-6">
      {finalPage > 1 ? (
        <Link href={`address?keyword=${keyword}&page=${finalPage - 1}`}>
          {"<"}
        </Link>
      ) : (
        <span className="text-gray-300">{"<"}</span>
      )}
      <div>{page}</div>
      <Link href={`address?keyword=${keyword}&page=${finalPage + 1}`}>
        {">"}
      </Link>
    </div>
  );
};

export default Pagination;
