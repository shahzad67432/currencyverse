import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";
import Loader from "./Loader";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoslist, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(cryptoslist?.data?.coins);
  if (isFetching)
    return (
      <div>
        <Loader />
      </div>
    );
  console.log(cryptos);
  return (
    <>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            className="crypto-card"
            key={currency.id}
            xs={"24"}
            s={12}
            lg={6}
          >
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currency.iconUrl}
                    alt={currency.name}
                  />
                }
                hoverable
              >
                <p> Price: {millify(currency.price)} </p>
                <p> Market Cap: {millify(currency.marketCap)} </p>
                <p> Daily change: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
