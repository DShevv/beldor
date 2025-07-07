"use client";
import Pagination from "@/components/Pagination/Pagination";

const MainPage = () => {
  return (
    <main>
      <Pagination max={10} current={1} maxPerView={6} />
    </main>
  );
};

export default MainPage;
