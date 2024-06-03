import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="w-full h-full bg-zinc-950">
        <div className={"flex w-full items-end h-fit pt-8 px-8 bg-zinc-950"}>
          <div
            className={
              "w-full flex items-center justify-between h-fit px-[4] px-4 py-2.5 border-2 border-white border-solid"
            }
          >
            <div className="h-12 w-56">
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
                src={"/images/tempo-image-20240530T141351877Z.png"}
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
              <div
                className={
                  "h-14 w-40 bg-emerald-400 flex items-center justify-center"
                }
              >
                <div className={"text-lg font-semibold h-fit text-black"}>
                  LAUNCH APP
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          alt={"Pasted Image"}
          fetchpriority={undefined}
          data-nimg={"1"}
          loading={"lazy"}
          width={1508}
          height={688}
          decoding={"async"}
          className="w-full h-[688px]"
          style={{
            color: "transparent",
          }}
          sizes={undefined}
          srcSet={undefined}
          src={"/images/tempo-image-20240529T221408749Z.png"}
          onLoad={() => console.log("onLoad")}
          onError={() => console.log("onError")}
        />
        <div className="flex flex-col gap-y-8 h-fit absolute left-[146px] top-[240px] w-[920px]">
          <h1 className="font-extrabold tracking-tight lg:text-5xl text-white text-8xl">
            Become Unbounded
          </h1>
          <p className="leading-7 text-xl text-white w-[593px]">
            Indulge in a culinary journey that nourishes both body and planet.
            Our commitment to sustainable sourcing, fresh ingredients, and
            authentic flavors embodies a harmony of taste and responsibility.
          </p>
          <div className={"flex w-fit px-11 py-2.5 bg-emerald-400"}>
            <div className={""}>LAUNCH APP</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
