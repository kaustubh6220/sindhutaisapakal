const ShippingDeliveryPolicy = () => {
  return (
    <section className="bg-[#fff7e6] ">
      {/* LEFT EMPTY */}
      <div className="col-span-1" />

      {/* CONTENT */}
      <div className="col-span-6 text-sm text-gray-800 leading-relaxed space-y-6">
        {/* HEADER */}
        <div>
          <h2 className="font-bold text-black">
            Saptasindhu Mahila Adhar Balsangopan aani Shikshan Sanstha
          </h2>
          <p className="font-semibold mt-1">Effective Date:</p>
        </div>

        {/* 1 */}
        <div>
          <h3 className="font-semibold text-black mb-1">
            1. No Shipping or Delivery of Physical Goods
          </h3>
          <p className="ml-4">
            Saptasindhu Mahila Adhar Balsangopan aani Shikshan Sanstha does not sell
            or ship any physical goods or products. All donations made to our
            organization are for charitable purposes, and no tangible items will
            be shipped to donors.
          </p>
        </div>

        {/* 2 */}
        <div>
          <h3 className="font-semibold text-black mb-1">
            2. Digital Receipts
          </h3>
          <p className="ml-4">
            For each donation made through our Website or other platforms, a
            receipt will be sent to the donor’s registered email address as
            confirmation of the donation. This receipt is for your records and
            can be used for tax or other documentation purposes.
          </p>
        </div>

        {/* 3 */}
        <div>
          <h3 className="font-semibold text-black mb-1">
            3. Contact Us
          </h3>
          <p className="ml-4">
            If you have any questions regarding this policy, please contact us
            at
          </p>

          <div className="mt-3 space-y-1 ml-4">
            <p className="font-semibold">
              Saptasindhu Mahila Adhar Balsangopan aani Shikshan Sanstha
            </p>
            <p>Email: saptasindhu99@gmail.com</p>
            <p>Phone: +91 93265 35224</p>
            <p>
              Address: Belhekar Vasti, Near Vasantdada Sugar Institute, Manjari
              (Bk), Tal. Haveli, Dist. Pune – 412 307
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT EMPTY */}
      <div className="col-span-1" />
    </section>
  );
};

export default ShippingDeliveryPolicy;
