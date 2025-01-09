import { Accordion } from "flowbite-react";
import React, { useState } from "react";

const faqData = [
  {
    title: "Benefits of using our website?",
    desc: "Convenient, easy-to-use, competitive prices, wide product range, secure transactions, fast & efficient service.",
    isActive: false,
  },

  {
    title: "Is registration free?",
    desc: "Yes, registration is completely free.",
    isActive: false,
  },
  {
    title: "What payment methods do you accept?",
    desc: "We accept debit/credit cards, bank transfers, and mobile money for your convenience.",
    isActive: false,
  },
  {
    title: "How do I create an account?",
    desc: "Click the 'Register' button and follow the simple steps to create your account.",
    isActive: false,
  },
  {
    title: "How to top up my account balance?",
    desc: "Top up your account balance using any of our supported payment methods.",
    isActive: false,
  },
  {
    title: "How to purchase data, airtime, or other VTU services?",
    desc: "Browse and select the desired product/service, enter recipient details, choose payment method, and click 'Purchase'.",
    isActive: false,
  },
  {
    title: "Transaction processing time?",
    desc: "Most transactions are processed within seconds, slight delays depending on payment method and network.",
    isActive: false,
  },
  {
    title: "What happens if my transaction fails?",
    desc: "Contact our customer support for assistance. We will investigate and resolve the issue promptly. **We will also refund any failed transactions automatically.**",
    isActive: false,
  },
  {
    title: "Do you offer discounts or promotions?",
    desc: "Yes, we regularly offer discounts and promotions. Check our website or social media pages for current offers.",
    isActive: false,
  },
  {
    title: "Can I become a reseller?",
    desc: "Yes, we offer a reseller program where you can earn commissions by selling our products and services.",
    isActive: false,
  },
  {
    title: "Do you have an API?",
    desc: "Yes, we offer an API to integrate our VTU services into your website or application.",
    isActive: false,
  },
  {
    title: "What data plans do you offer?",
    desc: "We offer a wide range of data plans for various networks and devices.",
    isActive: false,
  },
  {
    title: "How to activate my data plan?",
    desc: "Once purchased, your data plan will be automatically activated on the recipient's phone number.",
    isActive: false,
  },
  {
    title: "What airtime denominations are available?",
    desc: "We offer airtime denominations for all major networks.",
    isActive: false,
  },
  {
    title: "How to top up someone's airtime?",
    desc: "Enter recipient's phone number, choose desired airtime denomination, and select your preferred payment method.",
    isActive: false,
  },
  {
    title: "What VTU services do you offer?",
    desc: "We offer a wide range of VTU services, including bill payments for electricity, cable TV, internet, and more.",
    isActive: false,
  },
  {
    title: "How to pay my bills using your website?",
    desc: "Select desired bill payment service, enter your account details, choose payment amount, and select your preferred payment method.",
    isActive: false,
  },
];
const FAQ = () => {
  const [faqs, setFaqs] = useState(faqData);

  return (
    <section className="mt-10 max-w-[var(--max-width)] w-11/12 m-auto">
      <h2 className="title text-center underline">FAQ</h2>
      <Accordion>
        {faqData.map((e, index) => {
          return (
            <Accordion.Panel key={index}>
              <Accordion.Title className="text-[var(--primary-500)]">
                <p className="text-lg">{e.title}</p>
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {e.desc}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          );
        })}
      </Accordion>
    </section>
  );
};

export default FAQ;
