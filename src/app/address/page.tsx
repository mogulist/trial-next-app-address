const Address = () => {
  return (
    <main className="max-w-[500px]">
      Address
      <div className="bg-slate-200 text-black flex flex-col items-center px-8 py-4">
        <input className="w-full py-2 px-4" placeholder="주소를 입력해주세요" />
        <div className="w-full flex flex-row justify-start pt-2">
          <input type="checkbox" className="mr-2" />
          <div className="text-xs">변동된 주소정보 포함</div>
        </div>
      </div>
      <div className="h-36 bg-white text-black">
        search results will come here
      </div>
    </main>
  );
};

export default Address;
