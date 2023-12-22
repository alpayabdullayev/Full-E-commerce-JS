import React from "react";
import { Table, Image, InputNumber } from "antd";
import { FaTimesCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteBasket } from '../../features/basketSlice.jsx';

const TableBasket = () => {
  const basket = useSelector((state) => state.basketS.value);
  const dispatch = useDispatch();

  function handleQuantityChange(id, value) {
    console.log("Quantity changed for item with id", id, "to", value);
  }

  function handleCountChange(id, value) {
    dispatch(handleQuantityChange(id, value));
  }

  function handleClick(record) {
    dispatch(deleteBasket(record.id));
  }

  const columnsData = columns({ handleCountChange, handleClick }); // Pass handleCountChange as a prop

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

export const columns = ({ handleCountChange, handleClick }) => [
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
    render: (text, record) => (
      <div className="flex items-center">
        <button onClick={() => handleCountChange(record.id, text - 1)} disabled={text <= 1}>
          -
        </button>
        <InputNumber
          min={1}
          max={100}
          value={text}
          onChange={(value) => handleCountChange(record.id, value)}
          size="large"
          style={{ textAlign: "center", margin: "0 8px" }}
        />
        <button onClick={() => handleCountChange(record.id, text + 1)}>
          +
        </button>
      </div>
    ),
  },
  {
    title: "Subtotal",
    dataIndex: "subtotal",
    render: (text, record) => record.count * record.price, 
  },
];

export default TableBasket;
