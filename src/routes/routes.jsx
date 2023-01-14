import React, { lazy } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import * as paths from "constants/paths";
import Layout from "layout/Layout";
import ScrollToTop from './ScrollTop'
// Pages
const Home = lazy(() => import("pages/home/Home"));
const Product = lazy(() => import("pages/product/Product"));
const Shop = lazy(() => import("pages/shop/Shop"));
const Order = lazy(() => import("pages/order/Order"));
const SpecialDiscount = lazy(() => import("pages/specialDiscount/SpecialDiscount"));
const Auth = lazy(() => import("pages/auth/Auth"));
const Blog = lazy(() => import("pages/blog/Blog"));
const Wishes = lazy(() => import("pages/wishes/Wishes"));
const Basket = lazy(() => import("pages/basket/Basket"));
const Checkout = lazy(() => import("pages/checkout/Checkout"));
const NotFound = lazy(() => import("pages/404/NotFound"));

export default function Routes() {
  return (
    <BrowserRouter>
      <Layout>
      <ScrollToTop>
          <Switch>
            <Route exact path={paths.baseUrl} render={(props)=> <Home {...props} />} />
            <Route exact path={paths.Product} render={(props)=> <Product {...props} />} />
            <Route exact path={paths.Shop} render={(props)=> <Shop {...props} />} />
            <Route exact path={paths.Order} render={(props)=> <Order {...props} />} />
            <Route exact path={paths.SpecialDiscount} render={(props)=> <SpecialDiscount {...props} />} />
            <Route exact path={paths.Auth} render={(props)=> <Auth {...props} />} />
            <Route exact path={paths.Wishes} render={(props)=> <Wishes {...props} />} />
            <Route exact path={paths.Basket} render={(props)=> <Basket {...props} />} />
            <Route exact path={paths.Blog} render={(props)=> <Blog {...props} />} />
            <Route exact path={paths.Checkout} render={(props)=> <Checkout {...props} />} />
            <Route path={""} render={(props)=> <NotFound {...props} />} />
          </Switch>
        </ScrollToTop>
      </Layout>
    </BrowserRouter>
  );
}
