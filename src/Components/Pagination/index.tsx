import React from "react";
import { NextButton, PaginationContainer, PrevButton } from "./Styles";

type PropT = {
  totalPages: number;
  currentPage: number;
  callBack: Function;
};

export default function Pagination({
  totalPages,
  currentPage,
  callBack,
}: PropT) {
  return (
    <PaginationContainer>
      <>
        {currentPage > 1 && (
          <PrevButton onClick={() => callBack(currentPage - 1)}>
            Prev
          </PrevButton>
        )}
        {totalPages && (
          <span>
            {currentPage} of {totalPages}
          </span>
        )}

        {totalPages > 1 && currentPage < totalPages && (
          <NextButton onClick={() => callBack(currentPage + 1)}>
            Next
          </NextButton>
        )}
      </>
    </PaginationContainer>
  );
}
