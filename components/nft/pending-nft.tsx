"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { getAddress } from 'viem';

import { ABI, API_URL } from "@/lib/constants";
import { truncateMiddle } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Address, useContractWrite } from "wagmi";
import TransactionData from "../screens/transaction-data";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";

export default function PendingNFT({ details }: any) {
  const {
    data,
    isLoading,
    isSuccess,
    write: distributeAchievement,
  } = useContractWrite({
    address: details.contract as Address,
    abi: ABI.group,
    functionName: "distributeAchievement",
  });

  const [minting, setMinting] = useState(false);

  const { data: batch, write: batchDistributeAchievement } = useContractWrite({
    address: details.contract as Address,
    abi: ABI.group,
    functionName: "batchDistibuteAchievements",
  });

  const mintNFT = async () => {
    //in here we want to have the profile.id
    setMinting(true);
    if (!details.requester) {
      toast({
        title: "Error minting ",
        description:
          "You have provided an invalid address, please check if the user still exists",
        variant: "destructive",
      });
    }

    await fetch(`${API_URL}/achievement/update`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: details.id,
        status: 'accepted',
      }),
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err: Error) => console.log(err));

    //check what the type is
    
    //batch mint will be... 
    

    if (details.type == "project") {
      //for eacht 
      const workersAddresses = details.issuer.workers.map((worker:string) => getAddress(worker));
      console.log(workersAddresses.length)
      const tokenIds = Array(details.issuer.workers.length).fill(details.tokenId.toBigInt());
      const amounts = Array(details.issuer.workers.length).fill(1);
      
      console.log(tokenIds, workersAddresses, amounts);
      await batchDistributeAchievement({
        args: [tokenIds, [workersAddresses], amounts],
      });
    }else {
      await distributeAchievement({
        args: [details.tokenId, details.requester, 1],
      });
      
    }

   

    setMinting(false);

    //await write();
  };
  return (
    <Dialog>
      <DialogTrigger>
        <section className="flex gap-4 rounded-sm hover:bg-background-layer-2 cursor-pointer">
          <div className="aspect-square w-24 h-24 relative object-scale rounded-sm bg-gradient-to-b from-state-info to-accent-secondary">
            <Image
              src={`https://ipfs.io/ipfs/${details.nft?.metadata?.image}`}
              alt={details.nft.metadata?.name}
              fill={true}
              className="rounded-sm shadow-md"
            />
          </div>
          <div className="flex flex-col justify-evenly text-left">
            <h5 className="font-medium">{details.nft.metadata?.name}</h5>
            <span className="text-text-primary text-sm capitalize font-light">
              {details.type} - {truncateMiddle(details.requester, 12)}{" "}
            </span>
            <span className="text-text-secondary text-sm font-light">
              {" "}
              4 days ago
            </span>
          </div>
        </section>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col items-center justify-center space-x-2 space-y-4 my-4 overflow-scroll max-h-[100vh]">
          <div className="relative aspect-square  rounded-sm object-scale-down bg-gradient-to-b from-state-info to-accent-secondary w-[200px] my-4">
            <Image
              src={`https://ipfs.io/ipfs/${details.nft?.metadata?.image}`}
              alt={details.nft.metadata?.name}
              fill={true}
              className="rounded-sm shadow-md"
            />
          </div>
          <div className="bg-black-100 rounded-sm p-2 shadow-sm max-w-md  max-h-[20vh] overflow-auto">
            <dl className="grid grid-cols-4 justify-between p-1 px-2 gap-2 my-2">
              <dd className="text-text-secondary font-light text-sm capitalize">
                Requester
              </dd>
              <dd className="col-span-3 text-primary text-sm overflow-auto text-right text-clip">
                {details.requester}
              </dd>
            </dl>
            <dl className="grid grid-cols-4 justify-between p-1 px-2 gap-2 my-2">
              <dd className="text-text-secondary font-light text-sm capitalize">
                Recipients
              </dd>
              <dd className="col-span-3 text-primary text-sm overflow-auto text-right text-clip">
                <Link href={`/${details.type}/${details.requester}`}>
                  {details.type}
                </Link>
              </dd>
            </dl>
            {details.nft.metadata &&
              Object.entries(details.nft.metadata).map(
                ([key, value], index) => (
                  <dl
                    className="grid grid-cols-4 justify-between p-1 px-2 gap-2 my-2"
                    key={index}
                  >
                    <dd className="text-text-secondary font-light text-sm capitalize">
                      {key}
                    </dd>
                    <dd className="col-span-3 text-primary text-sm overflow-auto text-right text-clip">
                      {value?.toString()}
                    </dd>
                  </dl>
                )
              )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Button variant={"secondary"}>Reject</Button>
          <Button onClick={() => mintNFT()}>Confirm</Button>
        </div>
      </DialogContent>
      <TransactionData hash={data?.hash} />
    </Dialog>
  );
}
