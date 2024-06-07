import { Col, Row, Statistic, Typography } from "antd";
import React from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import { Cryptocurrencies, News } from "../components";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const HomePage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalstats = data?.data?.stats;
  if (isFetching)
    return (
      <div>
        <Loader />
      </div>
    );
  return (
    <>
      <Typography.Title level={2} className="heading">
        Global Crypto Data
      </Typography.Title>
      <Row>
        <Col span={12}>
          <Statistic
            title={"total Cryptocurrencies"}
            value={globalstats.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title={"total Exchanges"}
            value={millify(globalstats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title={"total Market cap"}
            value={millify(globalstats.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title={"total 24h Volume"}
            value={millify(globalstats.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title={"total Markets"}
            value={millify(globalstats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Typography.Title className="home-title" level={2}>
          Top 10 cryptocurrencies in the world
        </Typography.Title>
        <Typography.Title className="show-more" level={3}>
          <Link to={"/cryptocurrencies"}>Show more</Link>
        </Typography.Title>
      </div>
      <Cryptocurrencies simplified />
      {/* <div className='home-heading-container'>
          <Typography.Title className='home-title' level={2}>Crypto latest news</Typography.Title>
          <Typography.Title className='show-more' level={3}><Link to={'/news'}>Show more</Link></Typography.Title>
      </div> */}
      {/* <News simplified/> */}
    </>
  );
};

export default HomePage;
