import Image from "next/image";
import React from "react";

const NavigationBarForConsultation = () => {
  return (
    <div
      className={
        "w-full flex items-center justify-between h-fit px-[4] px-4 py-2.5 border-2 border-white border-solid"
      }
    >
      <div className="h-16 w-60">
        <Image
          alt={"Pasted Image"}
          fetchpriority={undefined}
          loading={"lazy"}
          width={310}
          height={74}
          decoding={"async"}
          data-nimg={"1"}
          className={"w-full h-full"}
          style={{
            color: "transparent",
          }}
          sizes={undefined}
          srcSet={undefined}
          src={"/images/tempo-image-20240530T140018388Z.png"}
          onLoad={() => console.log("onLoad")}
          onError={() => console.log("onError")}
        />
      </div>
      <div className={"flex items-center w-fit h-fit gap-x-14"}>
        <div className={"flex w-fit gap-x-8 h-fit"}>
          <div className={"text-lg font-semibold text-white h-fit"}>
            Feature 1
          </div>
          <div className={"text-lg font-semibold text-white h-fit"}>
            Feature 2
          </div>
          <div className={"text-lg font-semibold text-white h-fit"}>
            Feature 3
          </div>
        </div>
        <div className="h-14 w-40 bg-emerald-400 flex items-center justify-center">
          <div className="text-lg font-semibold h-fit text-black">
            LAUNCH APP
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBarForConsultation;
