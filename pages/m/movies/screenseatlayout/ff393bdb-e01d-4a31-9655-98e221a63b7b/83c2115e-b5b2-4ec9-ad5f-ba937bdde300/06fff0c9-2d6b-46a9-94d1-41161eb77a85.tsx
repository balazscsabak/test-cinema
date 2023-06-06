import Link from "next/link";
import React from "react";

const MyPage = () => {
  return (
    <div>
      <div className="p-8">
        <div className="mb-4 p-4 mr-4 bg-slate-400 inline-block">
          <Link href={"/m/close"}>CLOSE</Link>
        </div>
        <div className="mb-4 p-4 bg-slate-400 inline-block">
          <Link href={"/m/success/123123123123123"}>SUCCESS</Link>
        </div>
      </div>

      <div className="p-8">
        <div>MovieID: ff393bdb-e01d-4a31-9655-98e221a63b7b</div>
        <div>ScreeningID: 83c2115e-b5b2-4ec9-ad5f-ba937bdde300</div>
      </div>
    </div>
  );
};

export default MyPage;
