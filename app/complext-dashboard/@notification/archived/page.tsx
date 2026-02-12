import { Card } from "@/app/components/cards";
import Link from "next/link";

export default function Notification(){
    return <Card>
        <div>
       Archived Notifications
        </div>
        <div>
            <Link href="/complext-dashboard">Default</Link>
        </div>
        </Card>
}