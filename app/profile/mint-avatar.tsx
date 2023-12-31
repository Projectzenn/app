"use client";


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import IPFSImageLayer from "@/components/ui/layer";
import { toast } from "@/components/ui/use-toast";
import { ABI, MUMBAI, defaultAvatar } from "@/lib/constants";

import { RefreshCw } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  useAccount,
  useContractRead,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";


//TODO: Not working!!!
export default function MintAvatar() {
  //creation of the contract
  const [minting, setMinting] = useState(false);
  const [savedTBA, setSavedTBA] = useState(false);
  const {
    write,
    isLoading,
    data: mintingStatus,
  } = useContractWrite({
    address: MUMBAI.groupRegistry,
    abi: ABI.groupRegistry,
    functionName: "mint",
  });
  const { address } = useAccount();

  const waitForTransaction = useWaitForTransaction({
    hash: mintingStatus?.hash,
    onSuccess(data) {
      if (data.status == "success") {
        toast({ title: "Successfully minted all the items" });
        setMinting(false);
      }
    },
  });

  const { data }: { data: any; isLoading: boolean } = useContractRead({
    address: MUMBAI.groupRegistry,
    abi: ABI.groupRegistry,
    functionName: "balanceOf",
    args: [address],
  });

  const { data: tba }: { data: any; isLoading: boolean } = useContractRead({
    address: MUMBAI.groupRegistry,
    abi: ABI.groupRegistry,
    functionName: "getTBA",
    args: [address],
  });



  const url = process.env.NEXT_PUBLIC_API || `http://localhost:4000`;
  useEffect(() => {
    const updateTBA = async () => {
      setMinting(true);
      await fetch(
        `${url}/polybase/update/tba/${address}/${tba}`
      ).then((res) => res.json());
  
      toast({
        title: "succesfully added the TBA",
      });
  
      setMinting(false);
      setSavedTBA(true);
    };

    const checkTBA = async () => {
      const result = await fetch(`${url}/polybase/${address}`).then((res) =>
        res.json()
      );

      console.log(result);
      if (result.status) {
        if (!result.message.TBA) {
          updateTBA();
          setSavedTBA(false);
        }
        //here we just check if indeed this is the case. and
        return;
      }
    };

    if ((parseInt(data?.toString()) > 0 && address) || tba) {
      //need to check if it already has a profile
      checkTBA();
    }
  }, [data, address, tba, url, waitForTransaction.status]);
  



  if (parseInt(data?.toString()) > 0 || savedTBA) {
    return (
      <Card>
        <CardContent>
          <section className="flex flex-col gap-4">
            <div className="w-full aspect-square relative m-0 z-0">
              <IPFSImageLayer hashes={defaultAvatar} />
            </div>
            <h1 className="text-3xl font-bold">NFT Career Profile is ready</h1>
            <p className="text-sm tracking-wide  leading-5 text-text-secondary">
              Congratulation!! Your NFT Account has been created successfully
              and you received some nft. you can collect career NFT in mypage.
            </p>
            <div className="flex gap-4">
              <Link
                href="/profiles"
                className="w-full py-3 rounded-md bg-button-secondary text-primary text-center"
              >
                Browse Builders
              </Link>
              <Link
                href="/profile"
                className="w-full py-3 rounded-md bg-accent-secondary text-accent-on-secondary text-center"
              >
                View my Profile
              </Link>
            </div>
            <section className="">
              <h1 className="font-semibold mb-2 ml-2">NFT received</h1>
              <div className="text-center text-light text-secondary justify-evenly flex flex-wrap gap-4 border border-border-div rounded-sm p-3">
                {defaultAvatar.map((nft: string, index: any) => (
                  <div key={index}>
                    <Image
                      src={`https://ipfs.io/ipfs/${nft}`}
                      className="rounded-sm bg-button-secondary w-16 h-16"
                      width={80}
                      height={80}
                      alt="avatar nft"
                    />
                  </div>
                ))}
              </div>
            </section>
          </section>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-col gap-4">
        <h1 >Get NFT Career Profile</h1>
        <span className="text-sm text-text-secondary ">
          Let’s mint NFT wallet that can authenticate your career and own all
          kinds of NFT and crypto. And you will receive some NFTs for free.
        </span>
      </CardHeader>
      <CardContent>
        <section className="flex flex-col gap-4">
          <div className="w-full aspect-square relative m-0 z-0">
            <IPFSImageLayer hashes={defaultAvatar} />
          </div>

          <Button
            disabled={isLoading || parseInt(data?.toString()) > 0}
            onClick={() => {
              write();
              setMinting(true);
            }}
          >
            {isLoading || minting ? (
              <span className="flex gap-2">
                <RefreshCw className="animate-spin" /> Minting..{" "}
              </span>
            ) : parseInt(data?.toString()) > 0 ? (
              "You already have a profile"
            ) : (
              "Mint"
            )}
          </Button>
        </section>
      </CardContent>
    </Card>
  );
}
