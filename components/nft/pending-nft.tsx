import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { ABI, API_URL } from "@/lib/constants";
import { truncateMiddle } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Address, useContractWrite } from "wagmi";
import TransactionData from "../screens/transaction-data";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
export default function PendingNFT({ details }: any) {
  
  
  const { write, isLoading, error, data } = useContractWrite({
    address: details.contract as Address,
    abi: ABI.group,
    functionName: "distributeAchievement",
  });

  const mintNFT = async () => {
    //in here we want to have the profile.id

    if (!details.requester) {
      toast({
        title: "Error minting ",
        description:
          "You have provided an invalid address, please check if the user still exists",
        variant: "destructive",
      });
    }

    await fetch(
      `${API_URL}/polybase/nft/accepted/${details.id}`,
      {}
    ).then((res) => {
      console.log(res)
    })
    .catch((err: Error) => console.log(err));


    await write({ args: [details.tokenId, details.requester, 1] });
    
   

    //await write();
  };
  return (
    <Dialog>
      <DialogTrigger>
        <section className="flex gap-4 rounded-sm hover:bg-background-layer-2 cursor-pointer">
          <div className="aspect-square w-24 h-24 relative object-scale">
            <Image
              src={`https://ipfs.io/ipfs/${details.nft.metadata.image}`}
              alt={details.nft.metadata.name}
              fill={true}
              className="rounded-sm shadow-md"
            />
          </div>
          <div className="flex flex-col justify-evenly text-left">
            <h5 className="font-medium">{details.nft.metadata.name}</h5>
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
          <div className="relative aspect-square  rounded-sm object-scale-down w-[200px] my-4">
            <Image
              src={`https://ipfs.io/ipfs/${details.nft.metadata.image}`}
              alt={details.nft.metadata.name}
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
              Object.entries(details.nft.metadata).map(([key, value], index) => (
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
              ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <Button variant={"secondary"}>Cancel</Button>
          <Button
            onClick={() => mintNFT()}
          >Reward {details.type}</Button>
        </div>
      </DialogContent>
      <TransactionData hash={data?.hash} />
    </Dialog>
  );
}
