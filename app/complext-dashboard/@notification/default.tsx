import { Card } from "@/app/components/cards";
import Link from "next/link";

export default function NotificationDefaultPage(){
    return <Card>
        <div>
        Notifications
        </div>
        <div>
            <Link href="/complext-dashboard/archived">Archived</Link>
        </div>
        </Card>
}