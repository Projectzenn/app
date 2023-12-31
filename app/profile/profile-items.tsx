
import NftListItem, { NFTItem } from "@/components/card/nft-list-item";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import useFetchData from "@/lib/useFetchData";
import Image from "next/image";
import Link from "next/link";


export default function ProfileItems({
  address
}: {
  address: string
}) {
  
  const {data:items, loading, error} = useFetchData<NFTItem[]>(`/achievement/userAchievements/${address}`);

  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <h2>Profile Items</h2>
        <Badge className="text-primary">
        </Badge>
       
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {items && items.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {items.map((item: any, index: number) => (
              <NftListItem key={index} item={item} />
            ))}
          </div>
        ) : (
          <div className="mx-auto w-full gap-2 items-center flex flex-col">
            <Image
              src="/images/no-item.png"
              alt="no-item"
              width={64}
              height={64}
            />
            <p className="text-center text-primary font-medium">No items for this profile </p>
            <Link href="/groups" className="font-semibold bg-accent-secondary text-accent-primary leading-[18px] p-3 rounded-full px-12">Get a Career NFT</Link>

          </div>
        )}
      </CardContent>
    </Card>
  );
}
