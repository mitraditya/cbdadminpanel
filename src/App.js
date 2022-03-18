import React from "react";
import { Admin, Resource, Layout } from "react-admin";
import TreeMenu from "@bb-tech/ra-treemenu";
import Dashboard from "./components/Dashboard";
import authProvider from "./components/Auth/authProvider";
import LoginPage from "./components/Auth/LoginPage";
import StoreList from "./components/Store/StoreList";
import StoreCreate from "./components/Store/StoreCreate";
import StoreEdit from "./components/Store/StoreEdit";
import NetworkList from "./components/Network/NetworkList";
import NetworkCreate from "./components/Network/NetworkCreate";
import NetworkEdit from "./components/Network/NetworkEdit";
import PostbackLogList from "./components/PostbackLog/PostbackLogList";
import PostbackLogEdit from "./components/PostbackLog/PostbackLogEdit";
import MockTransactionsList from "./components/Transactions/Mock/MockTransactionsList";
import MockTransactionsCreate from "./components/Transactions/Mock/MockTransactionsCreate";
import MockTransactionsEdit from "./components/Transactions/Mock/MockTransactionsEdit";
import SalesTransactionsList from "./components/Transactions/Sales/SalesTransactionsList";
import SalesTransactionsCreate from "./components/Transactions/Sales/SalesTransactionsCreate";
import SalesTransactionsEdit from "./components/Transactions/Sales/SalesTransactionsEdit";
import CashbackTransactionsList from "./components/Transactions/Cashback/CashbackTransactionsList";
import CashbackTransactionsCreate from "./components/Transactions/Cashback/CashbackTransactionsCreate";
import CashbackTransactionsEdit from "./components/Transactions/Cashback/CashbackTransactionsEdit";
import BonusTransactionsList from "./components/Transactions/Bonus/BonusTransactionsList";
import BonusTransactionsCreate from "./components/Transactions/Bonus/BonusTransactionsCreate";
import BonusTransactionsEdit from "./components/Transactions/Bonus/BonusTransactionsEdit";
import ReferrerTransactionsList from "./components/Transactions/Referrer/ReferrerTransactionsList";
import ReferrerTransactionsEdit from "./components/Transactions/Referrer/ReferrerTransactionsEdit";
import ClicksHistoryList from "./components/Clicks/ClicksHistoryList";
import ClicksHistoryEdit from "./components/Clicks/ClicksHistoryEdit";
import PayoutRequestsList from "./components/PayoutRequests/PayoutRequestsList";
import PayoutRequestsCreate from "./components/PayoutRequests/PayoutRequestsCreate";
import PayoutRequestsEdit from "./components/PayoutRequests/PayoutRequestsEdit";
import BankTransferList from "./components/BankTransfer/BankTransferList";
import BankTransferEdit from "./components/BankTransfer/BankTransferEdit";
import PaytmWalletTransferList from "./components/PaytmWalletTransfer/PaytmWalletTransferList";
import PaytmWalletTransferCreate from "./components/PaytmWalletTransfer/PaytmWalletTransferCreate";
import PaytmWalletTransferEdit from "./components/PaytmWalletTransfer/PaytmWalletTransferEdit";
import PaytmApiLogList from "./components/PaytmApiLog/PaytmApiLogList";
import PaytmApiLogCreate from "./components/PaytmApiLog/PaytmApiLogCreate";
import PaytmApiLogEdit from "./components/PaytmApiLog/PaytmApiLogEdit";
import MissingClaimsList from "./components/MissingClaims/MissingClaimsList";
import MissingClaimsEdit from "./components/MissingClaims/MissingClaimsEdit";
import SnELinksList from "./components/SnELinks/SnELinksList";
import SnELinksEdit from "./components/SnELinks/SnELinksEdit";
import PayoutModeList from "./components/PayoutMode/PayoutModeList";
import PayoutModeEdit from "./components/PayoutMode/PayoutModeEdit";
import UserEarningList from "./components/BusinessReports/UserEarningList";
import NetworkEarningList from "./components/BusinessReports/NetworkEarningList ";
import StoreEarningList from "./components/BusinessReports/StoreEarningList";
import ProfitReportList from "./components/BusinessReports/ProfitReportList";

import StoreCategoryList from "./components/StoreCategory/StoreCategoryList";
import StoreCategoryCreate from "./components/StoreCategory/StoreCategoryCreate";
import StoreCategoryEdit from "./components/StoreCategory/StoreCategoryEdit";
import dataProvider from "./dataProvider";
import CouponCategoryList from "./components/Coupon/CouponCategory/CouponCategoryList";
import CouponCategoryCreate from "./components/Coupon/CouponCategory/CouponCategoryCreate";
import CouponCategoryEdit from "./components/Coupon/CouponCategory/CouponCategoryEdit";
import CouponList from "./components/Coupon/Coupon/CouponList";
import CouponCreate from "./components/Coupon/Coupon/CouponCreate";
import CouponEdit from "./components/Coupon/Coupon/CouponEdit";
import CashbackRatesList from "./components/CashbackRates/CashbackRatesList";
import CashbackRatesCreate from "./components/CashbackRates/CashbackRatesCreate";
import CashbackRatesEdit from "./components/CashbackRates/CashbackRatesEdit";

function App() {
  return (
    <Admin
      layout={(props) => <Layout {...props} menu={TreeMenu} />}
      loginPage={LoginPage}
      dashboard={Dashboard}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      {/* Stores */}
      <Resource name="store" options={{ label: "Store", isMenuParent: true }} />
      {/* Store Categories */}
      <Resource
        name="stores/category"
        options={{ label: "Store Categories", menuParent: "store" }}
        list={StoreCategoryList}
        create={StoreCategoryCreate}
        edit={StoreCategoryEdit}
      />
      <Resource
        name="stores"
        list={StoreList}
        create={StoreCreate}
        edit={StoreEdit}
        options={{ label: "Stores", menuParent: "store" }}
      />
      <Resource
        name="cashbackRates"
        list={CashbackRatesList}
        create={CashbackRatesCreate}
        edit={CashbackRatesEdit}
        options={{ label: "Cashback Rates", menuParent: "store" }}
      />
      {/* Coupon Categories */}
      <Resource
        name="coupons"
        options={{ label: "Coupons", isMenuParent: true }}
      />
      <Resource
        name="coupon/couponcategory"
        options={{ label: "Coupon Categories", menuParent: "coupons" }}
        list={CouponCategoryList}
        create={CouponCategoryCreate}
        edit={CouponCategoryEdit}
      />
      <Resource
        name="coupon"
        options={{ label: "Coupon", menuParent: "coupons" }}
        list={CouponList}
        create={CouponCreate}
        edit={CouponEdit}
      />
      {/* Affiliate Networks */}
      <Resource
        name="affiliate_networks"
        options={{ label: "Affiliate Networks", isMenuParent: true }}
      />
      <Resource
        name="networks"
        options={{
          label: "Affiliate Networks",
          menuParent: "affiliate_networks",
        }}
        list={NetworkList}
        create={NetworkCreate}
        edit={NetworkEdit}
      />
      <Resource
        name="logs"
        options={{ label: "Postback Logs", menuParent: "affiliate_networks" }}
        list={PostbackLogList}
        edit={PostbackLogEdit}
      />
      {/* Transactions */}
      <Resource
        name="transactions"
        options={{ label: "Cashback Transactions", isMenuParent: true }}
      />
      <Resource
        name="txn/mock"
        options={{ label: "Mock Transactions", menuParent: "transactions" }}
        list={MockTransactionsList}
        create={MockTransactionsCreate}
        edit={MockTransactionsEdit}
      />
      <Resource
        name="txn/sales"
        options={{ label: "Sales Transactions", menuParent: "transactions" }}
        list={SalesTransactionsList}
        create={SalesTransactionsCreate}
        edit={SalesTransactionsEdit}
      />
      <Resource
        name="txn/cashback"
        options={{ label: "Cashback Transactions", menuParent: "transactions" }}
        list={CashbackTransactionsList}
        create={CashbackTransactionsCreate}
        edit={CashbackTransactionsEdit}
      />
      <Resource
        name="txn/bonus"
        options={{ label: "Bonus Transactions", menuParent: "transactions" }}
        list={BonusTransactionsList}
        create={BonusTransactionsCreate}
        edit={BonusTransactionsEdit}
      />
      <Resource
        name="txn/referrer"
        options={{ label: "Referrer Transactions", menuParent: "transactions" }}
        list={ReferrerTransactionsList}
        edit={ReferrerTransactionsEdit}
      />
      {/* User Requests */}
      <Resource
        name="user_requests"
        options={{ label: "User Requests", isMenuParent: true }}
      />
      <Resource
        name="clicks"
        options={{ label: "Clicks History", menuParent: "user_requests" }}
        list={ClicksHistoryList}
        edit={ClicksHistoryEdit}
      />
      <Resource
        name="payoutrequests"
        options={{ label: "Payout Requests", menuParent: "user_requests" }}
        list={PayoutRequestsList}
        create={PayoutRequestsCreate}
        edit={PayoutRequestsEdit}
      />
      <Resource
        name="payoutrequests/bankpayouts"
        options={{
          label: "Bank Transfer-Paytm API",
          menuParent: "user_requests",
        }}
        list={BankTransferList}
        edit={BankTransferEdit}
      />
      <Resource
        name="payoutrequests/paytmwalletpayouts"
        options={{
          label: "Paytm Wallet Transfer",
          menuParent: "user_requests",
        }}
        list={PaytmWalletTransferList}
        create={PaytmWalletTransferCreate}
        edit={PaytmWalletTransferEdit}
      />
      <Resource
        name="payoutrequests/apiLog"
        options={{ label: "Paytm API Log", menuParent: "user_requests" }}
        list={PaytmApiLogList}
        create={PaytmApiLogCreate}
        edit={PaytmApiLogEdit}
      />
      <Resource
        name="missingclaims"
        options={{ label: "Missing Claims", menuParent: "user_requests" }}
        list={MissingClaimsList}
        edit={MissingClaimsEdit}
      />
      {/* Users Information */}
      <Resource
        name="users_information"
        options={{ label: "Users Information", isMenuParent: true }}
      />
      <Resource
        name="links"
        options={{ label: "Links for S&E", menuParent: "users_information" }}
        list={SnELinksList}
        edit={SnELinksEdit}
      />
      <Resource
        name="mode"
        options={{ label: "Payout Mode Info", menuParent: "users_information" }}
        list={PayoutModeList}
        edit={PayoutModeEdit}
      />
      <Resource
        name="business_report"
        options={{ label: "Business Reports", isMenuParent: true }}
      />
      <Resource
        name="earning/profitreport"
        options={{ label: "Profit Report", menuParent: "business_report" }}
        list={ProfitReportList}
      />
      <Resource
        name="earning/store"
        options={{ label: "Earning By Stores", menuParent: "business_report" }}
        list={StoreEarningList}
      />
      <Resource
        name="earning/network"
        options={{
          label: "Earning By Networks",
          menuParent: "business_report",
        }}
        list={NetworkEarningList}
      />
      <Resource
        name="earning/user"
        options={{ label: "Earning By Users", menuParent: "business_report" }}
        list={UserEarningList}
      />
      {/* <Resource
        name="settings"
        list={StoreList}
        create={StoreCreate}
        edit={StoreEdit}
      /> */}
    </Admin>
  );
}

export default App;
