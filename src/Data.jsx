import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userThunk, useSelectors } from './Redux/reducer';
import './App.css';

const Data = () => {
  const dispatch = useDispatch();
  const userData = useSelector(useSelectors);

  useEffect(() => {
    dispatch(userThunk());
  }, [dispatch]);

  console.log(userData);

  return (
    <div>
      {userData.map((item, index) => (
        <div key={index}>
          <div>{item.name}</div>
          <div>{item.email}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Data;
