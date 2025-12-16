import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

import * as goodsAPI from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const handleGetAllGoodsClick = () => {
    goodsAPI.getAll().then(data => {
      setGoods(data);
    });
  };

  const handleGet5GoodsClick = () => {
    goodsAPI.get5First().then(data => {
      setGoods(data);
    });
  };

  const handleGetRedGoodsClick = () => {
    goodsAPI.getRedGoods().then(data => {
      setGoods(data);
    });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleGetAllGoodsClick}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleGet5GoodsClick}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleGetRedGoodsClick}
      >
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
