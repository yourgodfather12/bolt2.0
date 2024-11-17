import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Activity, 
  Users,
  MessageSquare 
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Welcome to your secure dashboard.
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-border/50 bg-background/20 backdrop-blur-xl">
          <div className="flex items-center gap-2 p-4">
            <Shield className="h-8 w-8 text-indigo-500" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Security Status</p>
              <p className="text-2xl font-bold">Protected</p>
            </div>
          </div>
        </Card>
        <Card className="border-border/50 bg-background/20 backdrop-blur-xl">
          <div className="flex items-center gap-2 p-4">
            <Activity className="h-8 w-8 text-emerald-500" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">System Status</p>
              <p className="text-2xl font-bold">Online</p>
            </div>
          </div>
        </Card>
        <Card className="border-border/50 bg-background/20 backdrop-blur-xl">
          <div className="flex items-center gap-2 p-4">
            <Users className="h-8 w-8 text-violet-500" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Users</p>
              <p className="text-2xl font-bold">24</p>
            </div>
          </div>
        </Card>
        <Card className="border-border/50 bg-background/20 backdrop-blur-xl">
          <div className="flex items-center gap-2 p-4">
            <MessageSquare className="h-8 w-8 text-neutral-500" />
            <div>
              <p className="text-sm font-medium text-muted-foreground">New Messages</p>
              <p className="text-2xl font-bold">3</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}