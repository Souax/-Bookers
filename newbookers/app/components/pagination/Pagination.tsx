"use client";
import { useRouter } from "next/navigation";

function PaginationComponent({
  currentPage,
  totalDataCount,
  itemsPerPage,
}: any) {
  const router = useRouter();
  const lastPageNumber = Math.ceil(totalDataCount / itemsPerPage);
  const isPreviousDisabled = currentPage <= 1;
  const currentPageNumber = parseInt(currentPage, 10);
  const isNextDisabled = currentPageNumber >= lastPageNumber;

  // 前のページへ遷移
  function handlePrevious() {
    if (currentPageNumber > 1) {
      router.push(`/AllBooks?page=${currentPageNumber - 1}`);
    }
  }

  // 次のページへ遷移
  function handleNext() {
    const isNextDisabled = currentPageNumber >= lastPageNumber;
    if (!isNextDisabled) {
      router.push(`/AllBooks?page=${currentPageNumber + 1}`);
    }
  }

  return (
    <div className="flex justify-center mt-[5rem] text-white">
      <button
        className="mx-5"
        onClick={handlePrevious}
        disabled={isPreviousDisabled}
      >
        前へ
      </button>
      <button onClick={handleNext} disabled={isNextDisabled}>
        次へ
      </button>
    </div>
  );
}
export default PaginationComponent;
