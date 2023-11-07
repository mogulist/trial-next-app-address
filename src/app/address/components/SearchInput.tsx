"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const SearchInput = () => {
  const [keyword, setKeyword] = useState("");
  const router = useRouter();

  useEffect(() => {
    console.log("keyword: ", keyword);
  }, [keyword]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit: ", keyword);
    router.push(`/address?keyword=${keyword}&page=${1}`);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        className="w-full py-2 px-4"
        placeholder="주소를 입력해주세요"
      />
    </form>
  );
};

export default SearchInput;
