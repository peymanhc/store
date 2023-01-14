import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { WHITE, GRAY_4 } from "constants/colors";
// components
import SimpleTabs from "components/simpleTabs/SimpleTabs";
import ProductDescription from "components/productDescription/ProductDescription";
import FurtherDetails from "components/furtherDetails/FurtherDetails";
import Comments from "components/comments/Comments";
import SellerInfo from "components/sellerInfo/SellerInfo";
import Sellerquestion from "components/sellerquestion/Sellerquestion";
// icons
import MenuIcon from "@material-ui/icons/Menu";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { BLUE_SHADOW } from "constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: WHITE,
    borderRadius: 5,
    boxShadow: BLUE_SHADOW,
    margin: "30px 0",
    padding: "25px 15px",
  },
  homeicon: {
    color: GRAY_4,
    fontSize: 24,
    margin: "0 20px",
  },
  title: {
    color: GRAY_4,
    marginLeft: 20,
  },
}));

const ProductTabs = ({ productDescription, furtherDetails,comments,sellerinfo }) => {
  const classes = useStyles();

  const tabs = [
    {
      id: 0,
      title: "توضیحات",
      icon: <MenuIcon />,
    },
    {
      id: 1,
      title: "توضیحات تکمیلی",
      icon: <ViewModuleIcon />,
    },
    {
      id: 2,
      title: "نظرات",
      icon: <QuestionAnswerIcon />,
    },
    {
      id: 3,
      title: "اطلاعات فروشنده",
      icon: <PersonOutlineIcon />,
    },
    {
      id: 4,
      title: "پرسش از فروشنده",
      icon: <MailOutlineIcon />,
    },
  ];
  const panel = [
    {
      id: 0,
      child: <ProductDescription text={productDescription} />,
    },
    {
      id: 1,
      child: <FurtherDetails data={furtherDetails} />,
    },
    {
      id: 2,
      child: <Comments comments={comments} />,
    },
    {
      id: 3,
      child: <SellerInfo sellerinfo={sellerinfo} />,
    },
    {
      id: 4,
      child: <Sellerquestion />,
    },
  ];
  return (
    <Box className={classes.root}>
      <SimpleTabs tabs={tabs} panel={panel} />
    </Box>
  );
};
export default ProductTabs;
