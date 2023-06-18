import React, { useState } from 'react';

interface IProps {
  fetchMore: (page: number) => void;
}

const ShowMoreBtn: React.FC<IProps> = ({ fetchMore }) => {
  const [page, setPage] = useState<number>(2);

  const handleShowMoreClick = () => {
    setPage(page + 1);
    fetchMore(page);
  };

  return (
    <div className='flex'>
      <button onClick={handleShowMoreClick}>더보기</button>
    </div>
  );
};

export default ShowMoreBtn;
