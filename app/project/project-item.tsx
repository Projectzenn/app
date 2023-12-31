import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { LocateFixedIcon, UserCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAccount } from "wagmi";
interface ProjectItemProps {
    id: string;
    name: string;
    image: string;
    description: string;
    status: string;
    location: string;
    creator: string;
    members: any[];
}
export default function ProjectItem(
    {details }: { details: ProjectItemProps}
) {
    const {address} = useAccount();
    console.log(details);
  return (
    <Link href={`/project/${details.id}`}>
    <Card className="flex flex-row gap-4">
        <Image
            src={`https://ipfs.io/ipfs/${details.image}`}
            alt={details.name}
            width={100}
            height={100}
            className="rounded-full bg-accent-secondary"
        />
        <section className="flex flex-col gap-2 w-full prose">
            <header className="flex justify-between items-center prose">
                <h5>{details.name}</h5>
    
                {details.creator == address?.toLowerCase() &&  <Badge variant={"info"} className="ml-2">Owner</Badge>}
            </header>
            <div className="flex gap-8">
                <address className="flex gap-2 text-text-secondary text-sm items-center">
                    <LocateFixedIcon />
                </address>
                <div className="flex gap-2 text-text-secondary text-sm items-center">
                    <UserCheck />
                    {details.members?.length} Members
                </div>
            </div>
            <p >
                {details.description ? details.description : "Random descripotion"}
            </p>
        </section>
    </Card>
    </Link>
  )
}
