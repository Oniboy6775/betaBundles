import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import airtime from "../images/airtime.svg";
import data from "../images/data.png";
import cable from "../images/cable.png";
import utility from "../images/utility.png";
import historyImage from "../images/history.png";
import contacts from "../images/contacts.png";
import { useGlobalContext } from "../context/UserContext";
import WarningAlert from "../components/WarningAlert";
import FundWalletDrawer from "../components/FundWalletDrawer";

const DashBoard = () => {
  const { user, isLoading } = useGlobalContext();
  const navigate = useNavigate();

  const copyReferralLink = async () => {
    const userName = encodeURIComponent(user.userName);
    const websiteUrl = window.location.origin;
    await window.navigator.clipboard.writeText(
      `${websiteUrl}/register/${userName}`
    );
    toast.success("Referral link copied");
  };
  const copyAccNo = async (number) => {
    window.navigator.clipboard.writeText(number);
    toast.success("Account number copied");
  };

  const [showAlert, setShowAlert] = useState(false);

  const navigation = [
    { name: "Airtime", image: airtime, link: "/profile/buyAirtime" },
    { name: "data", image: data, link: "/profile/buyData" },
    { name: "Tv ", image: cable, link: "/profile" },
    { name: "Utility", image: utility, link: "/profile/electricity" },
    { name: "History", image: historyImage, link: "/profile/transactions" },
    { name: "Contacts", image: contacts, link: "/profile/contacts" },
  ];
  useEffect(() => {
    if (!isLoading && !user.nin && !user.bvn) {
      setKycModal(true);
    } else {
      setKycModal(false);
    }
  }, [isLoading, user.nin, user.bvn]);
  const [kycModal, setKycModal] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <div className=" md:ml-[6rem] bg-white p-4 border-2 relative">
      {showAlert && <WarningAlert close={() => setShowAlert(false)} />}
      <FundWalletDrawer
        isOpen={isDrawerOpen}
        close={() => setIsDrawerOpen(!isDrawerOpen)}
      />
      <div className="bg-[var(--primary-100)]  absolute top-0 left-0 right-0 px-2 ">
        <div className="flex justify-between items-center my-4 space-x-4">
          <div className="">
            <p className=" text-lg font-bold text-center capitalize">
              {user.userName && user.userName.substring(0, 15)}
            </p>
            <small className="font-bold">
              {" "}
              {user.userName && `₦${user.balance.toFixed(2)}`}
            </small>
          </div>
          <div className="grid gap-1">
            <button
              // onClick={() => (window.location.href = "#fundWallet")}
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
              className="btn text-xs"
            >
              fund your wallet
            </button>
          </div>
        </div>
      </div>
      {/* navigation__section */}
      <section className=" grid grid-cols-2 lg:grid-cols-3 m-auto mt-24  items-stretch gap-2 cursor-pointer ">
        <>
          {navigation.map((e, index) => (
            <div
              className=" border-2 border-[var(--primary-500)]  self-start p-4 bg-[var(--grey-400)] rounded-xl"
              key={index}
              onClick={() => navigate(`${e.link}`)}
            >
              <div className="max-w-[5rem] m-auto  ">
                <img
                  className="img"
                  src={e.image}
                  alt="airtime"
                  // width={"200px"}
                />
              </div>
              <p className="font-bold text-center capitalize">{e.name}</p>
              <p className="font-bold text-center capitalize text-red-500">
                {e.msg}
              </p>
            </div>
          ))}
        </>
      </section>
      {/* <h3 className="text-center font-bold mt-4 underline">Payment accounts</h3> */}
      <section className="md:flex  mt-4 justify-center gap-4 " id="fundWallet">
        {/* <div className="card m-auto md:m-0 bg-[var(--primary-600)]  text-white ">
          <div className="w-100 bg-white rounded-lg">
            <p className="text-sm font-bold uppercase text-[#25d366]">
              1.08% charges is applied
            </p>
          </div>
          <p className="text-sm ">
            Account name <br /> betaBundles-
            {user.userName && user.userName.substring(0, 10)}
          </p>
          <div className="text-sm">
            {user.accountNumbers.map((e, index) => {
              return (
                <p>
                  {e.bankName} <b>{e.accountNumber}</b>{" "}
                  <FaCopy
                    onClick={() => copyAccNo(e.accountNumber)}
                    className="copy__icon"
                  />
                </p>
              );
            })}
            <p className="text-xs capitalize opacity-60">
              All payments made to the above account number will automatically
              fund your wallet
            </p>
          
          </div>
        </div> */}

        <div className="card m-auto md:m-0 bg-[var(--primary-600)] text-white ">
          <h1 className="sub__title">refer a friend</h1>
          <div className="note">
            Refer people to betaBundles and earn ₦500 immediately the person
            upgrade his/her account to Reseller.
          </div>
          <button className="btn btn-hipster" onClick={copyReferralLink}>
            Copy referral link
          </button>
          <div className=" ">
            {user.userType === "smart earner" && (
              <>
                <p className="text-lg">Upgrade your account</p>
                <button
                  className="btn text-white btn-hipster"
                  onClick={() => setShowAlert(true)}
                >
                  Upgrade to reseller @ ₦1000
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashBoard;
