import React, { useState, useEffect } from 'react';

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1984-10-07T17:30:00');
    setAge(((Date.now() - birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Helsinki',
    link: 'https://en.wikipedia.org/wiki/Helsinki',
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 15,
    link: 'https://www.google.com/maps/d/embed?mid=1m-hZ6No4a0YrpgR2UcQBpMgwx-pCJeUW&ll=41.40306471864895%2C38.86398067499999&z=3',
  },
  {
    key: 'languages',
    label: 'Languages',
    value: 'Finnish, English, Swedish',
  },
];

export default data;
