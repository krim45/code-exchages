import React, { useState } from 'react';

interface IShowMoreBtnProps {
  fetchHooks: (page: number) => void;
}

const ShowMoreBtn: React.FC<IShowMoreBtnProps> = ({ fetchHooks }) => {
  const [page, setPage] = useState<number>(2);

  const handleShowMoreClick = () => {
    setPage(page + 1);
    fetchHooks(page);
  };

  return (
    <div className='flex'>
      <button onClick={handleShowMoreClick}>더보기</button>
    </div>
  );
};

export default ShowMoreBtn;
