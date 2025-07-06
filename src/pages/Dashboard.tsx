import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Palette, TrendingUp, Star, Users, Plus, Settings, LogOut, Bell, Globe, Briefcase } from "lucide-react";
import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentReviews from "@/components/dashboard/RecentReviews";
import EarningsChart from "@/components/dashboard/EarningsChart";
import QuickActions from "@/components/dashboard/QuickActions";
import DashboardHeader from "@/components/dashboard/DashboardHeader";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to CAPYBARA WEB DESIGN!</h1>
          <p className="text-gray-600">Track your website projects, monitor progress, and manage your web design services with CAPYBARA</p>
        </div>

        <DashboardStats />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <EarningsChart />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>

        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 max-w-md">
            <TabsTrigger value="projects">Active Projects</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5" />
                  <span>Active CAPYBARA Web Design Projects</span>
                </CardTitle>
                <CardDescription>Your current website development projects with CAPYBARA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">E-commerce Website</h3>
                        <p className="text-sm text-gray-600">Modern online store with payment integration</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-xs text-orange-600 font-medium">In Progress - 75%</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600">
                      View Details
                    </Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                        <Palette className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Portfolio Website</h3>
                        <p className="text-sm text-gray-600">Creative showcase for digital artist</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-xs text-blue-600 font-medium">Design Phase - 45%</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="completed">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span>Completed CAPYBARA Projects</span>
                </CardTitle>
                <CardDescription>Successfully delivered websites by CAPYBARA and client testimonials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Restaurant Website</h3>
                        <p className="text-sm text-gray-600">Complete redesign with online ordering</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="flex text-yellow-400">
                            <Star className="w-3 h-3 fill-current" />
                            <Star className="w-3 h-3 fill-current" />
                            <Star className="w-3 h-3 fill-current" />
                            <Star className="w-3 h-3 fill-current" />
                            <Star className="w-3 h-3 fill-current" />
                          </div>
                          <span className="text-xs text-gray-600">5.0 rating</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      View Project
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>CAPYBARA Web Design Analytics</CardTitle>
                <CardDescription>Performance insights for your CAPYBARA web design projects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Client Satisfaction</h3>
                    <p className="text-2xl font-bold text-orange-600">4.9/5</p>
                    <p className="text-sm text-gray-600">Average project rating</p>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
                    <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900">Repeat Clients</h3>
                    <p className="text-2xl font-bold text-green-600">73%</p>
                    <p className="text-sm text-gray-600">Return for additional projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
