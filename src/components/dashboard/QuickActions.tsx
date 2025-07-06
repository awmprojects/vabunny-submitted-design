
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Globe, Palette, Settings, MessageSquare, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const QuickActions = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks and project management</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button className="w-full justify-start bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
          <Plus className="w-4 h-4 mr-2" />
          Start New Project
        </Button>
        
        <Button variant="outline" className="w-full justify-start">
          <Globe className="w-4 h-4 mr-2" />
          View Live Websites
        </Button>
        
        <Button variant="outline" className="w-full justify-start">
          <Palette className="w-4 h-4 mr-2" />
          Design Gallery
        </Button>
        
        <Button variant="outline" className="w-full justify-start">
          <MessageSquare className="w-4 h-4 mr-2" />
          Client Messages
        </Button>
        
        <Button variant="outline" className="w-full justify-start">
          <FileText className="w-4 h-4 mr-2" />
          Project Proposals
        </Button>
        
        <Button variant="outline" className="w-full justify-start">
          <Settings className="w-4 h-4 mr-2" />
          Account Settings
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickActions;
