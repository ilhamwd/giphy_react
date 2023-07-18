import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleNavigateIronManGifs = () => navigate("/gifs/iron-man");

  const handleSearchGifs = () => navigate("/gifs/search");

  return (
    <div className="home home flex-column d-flex align-items-center justify-content-center p-5">
      <h2 className="title">Welcome to your giphy</h2>
      <img
        className="my-5"
        width={300}
        src="https://uc1f0f594db4bce91291120325a0.previews.dropboxusercontent.com/p/thumb/AB-IRa5SugvwI9IXX-jKSFIcKYmeaPQUys7RJMyfUoikEhOcTxhBsAjRdx03f3vCeI_aoGK8vdOQHgI_MFbUsggA5YRQkCcm8jCkEmNVlda6pZbZRzBnKPM3oI78Yew-BEDBIWweY4qWjRZh-ndBe_pPEtK10O-UHX4z-s1q5dAkC4UsmLilZnX5rKJK_xBZU1_hYYPuv_JaRYMJmGaZzuXLYtK1-nm13xbELlp2OVqHucZDWGiLX1YoZKDPgs6CSpqX3idS-nn7bl8VXJ3GckFe_lGbvcB9zfa_PrnC0NvxB3VY3qDUtGFkg_nWRxKTXC2JNkPPl_tThg_QF26HpZKn/p.png"
      />
      <Button onClick={handleNavigateIronManGifs}>IRON MAN GIPHY</Button>
      <Button
        onClick={handleSearchGifs}
        variant="transparent"
        className="text-white small mt-3"
      >
        <small>SEARCH YOUR GIPHY</small>
      </Button>
    </div>
  );
};

export default HomeScreen;
