import React, { useEffect } from "react";
import { Table, Image, InputNumber } from "antd";
import { FaTimesCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteBasket, addBasket,basketIncrement } from '../../features/basketSlice.jsx';

const TableBasket = () => {
  const basket = useSelector((state) => state.basketS.value);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket])
  

  const handleQuantityChange = (id, value) => {
    dispatch(addBasket({ id, count: value.target.value }));
  };

  const handleClick = (record) => {
    dispatch(deleteBasket(record.id));
  };
  const artir = (item)=>{
    dispatch(basketIncrement(item))
  }

  const columnsData = columns({ handleQuantityChange, handleClick,artir });

  return (
    <section>
      <div className="wrapper">
        <Table
          columns={columnsData}
          dataSource={basket.map((item) => ({ ...item, key: item.id }))}
          pagination={{
            pageSize: 50,
          }}
          scroll={{
            y: 240,
          }}
        />
      </div>
    </section>
  );
};
export default TableBasket

export const columns = ({ handleQuantityChange, handleClick,artir }) => [
  {
    title: "Product",
    dataIndex: "product",
    render: (text, record) => (
      <div className="flex items-center relative">
        <span
          onClick={() => handleClick(record)}
          className="text-secondary text-lg absolute top-0 left-0 z-50 bg-white rounded-full"
        >
          <FaTimesCircle />
        </span>
        <Image src={record.img} alt={text} width={50} />
        <span style={{ marginLeft: 8 }}>{text}</span>
      </div>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
  },
  {
    title: "Quantity",
    dataIndex: "count",
    render: (text, item) => (
      <div className="flex items-center">
        <p>{text}</p> 
        <div className="flex flex-col items-center justify-center">
        <button onClick={()=>artir(item)}>+</button>
        <button>-</button>
        </div>
      </div>
    ),
  },
  {
    title: "Subtotal",
    dataIndex: "subtotal",
    render: (text, record) => record.count * record.price, 
  },
];