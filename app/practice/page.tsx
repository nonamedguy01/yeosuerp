const Practice = () => {
  const fetchJSON = async (table:any) => {
    try {
      const response = await fetch(
        `https://raw.githubusercontent.com/websqldb/SQooL/main/data/${table}.json`
      );
  
      const result = await response.json();
  
      return result;
    } catch (err) {
      alert(`네트워크 에러가 발생했습니다.`);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center p-16">
      <h1 className="text-red-500  text-4xl mb-16">건축기사 실기 문제 풀이</h1>
      <div className="check_wrap mb-8">
        <input type="checkbox" id="check_btn"/>
        <label htmlFor="check_btn"><span>가설공사</span></label>
      </div>
      <button className="p-2 border">출제</button>
    </main>
  );
};

export default Practice;