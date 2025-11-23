"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  FileText, 
  Calendar, 
  User, 
  Upload, 
  Download, 
  Bell,
  Settings,
  LogOut,
  Activity,

  Clock,
  AlertCircle
} from "lucide-react";

export default function PatientDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock patient data
  const patientData = {
    id: "PT123456",
    name: "John Doe",
    email: "john.doe@email.com",
    dateOfBirth: "1985-06-15",
    bloodType: "A+",
    allergies: ["Penicillin", "Shellfish"],
    emergencyContact: {
      name: "Jane Doe",
      phone: "+1 (555) 987-6543",
      relationship: "Spouse"
    }
  };

  const recentRecords = [
    {
      id: 1,
      type: "Lab Results",
      date: "2024-01-15",
      doctor: "Dr. Smith",
      status: "Normal",
      category: "Blood Work"
    },
    {
      id: 2,
      type: "Prescription",
      date: "2024-01-10",
      doctor: "Dr. Johnson",
      status: "Active",
      category: "Medication"
    },
    {
      id: 3,
      type: "X-Ray",
      date: "2024-01-05",
      doctor: "Dr. Brown",
      status: "Reviewed",
      category: "Imaging"
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Smith",
      specialty: "Cardiology",
      date: "2024-01-25",
      time: "10:00 AM",
      type: "Follow-up"
    },
    {
      id: 2,
      doctor: "Dr. Wilson",
      specialty: "General Practice",
      date: "2024-02-01",
      time: "2:30 PM",
      type: "Annual Checkup"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">HealthVault</h1>
                <p className="text-sm text-slate-600">Patient Portal</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Patient Info */}
          <div className="lg:col-span-1">
            <Card className="border-slate-200">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="https://placehold.co/200x200?text=Patient+Profile+Photo" />
                  <AvatarFallback className="text-lg">JD</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{patientData.name}</CardTitle>
                <CardDescription>Patient ID: {patientData.id}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Blood Type:</span>
                    <Badge variant="outline">{patientData.bloodType}</Badge>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Date of Birth:</span>
                    <span>{patientData.dateOfBirth}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-slate-900">Allergies</h4>
                  <div className="flex flex-wrap gap-1">
                    {patientData.allergies.map((allergy, index) => (
                      <Badge key={index} variant="destructive" className="text-xs">
                        {allergy}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-slate-900">Emergency Contact</h4>
                  <div className="text-sm text-slate-600">
                    <p>{patientData.emergencyContact.name}</p>
                    <p>{patientData.emergencyContact.phone}</p>
                    <p className="text-xs">{patientData.emergencyContact.relationship}</p>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <User className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Welcome back, {patientData.name.split(' ')[0]}!</h2>
              <p className="text-slate-600">Manage your health records and track your medical history.</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="records">Medical Records</TabsTrigger>
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="upload">Upload Documents</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="border-slate-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Records</CardTitle>
                      <FileText className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24</div>
                      <p className="text-xs text-slate-600">+3 this month</p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
                      <Calendar className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{upcomingAppointments.length}</div>
                      <p className="text-xs text-slate-600">Next: Jan 25</p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Health Score</CardTitle>
                      <Activity className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">85%</div>
                      <Progress value={85} className="mt-2" />
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Recent Medical Records</CardTitle>
                    <CardDescription>Your latest medical documents and reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentRecords.map((record) => (
                        <div key={record.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <FileText className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-slate-900">{record.type}</h4>
                              <p className="text-sm text-slate-600">Dr. {record.doctor} • {record.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Badge variant={record.status === "Normal" ? "default" : "secondary"}>
                              {record.status}
                            </Badge>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              View
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Appointments */}
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Upcoming Appointments</CardTitle>
                    <CardDescription>Your scheduled medical appointments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingAppointments.map((appointment) => (
                        <div key={appointment.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                              <Calendar className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-slate-900">{appointment.doctor}</h4>
                              <p className="text-sm text-slate-600">{appointment.specialty} • {appointment.type}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-slate-900">{appointment.date}</p>
                            <p className="text-sm text-slate-600">{appointment.time}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Medical Records Tab */}
              <TabsContent value="records" className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Medical Records</CardTitle>
                    <CardDescription>Complete history of your medical documents</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentRecords.map((record) => (
                        <div key={record.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                              <FileText className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-slate-900">{record.type}</h4>
                              <p className="text-sm text-slate-600">{record.category}</p>
                              <p className="text-xs text-slate-500">Added on {record.date} by {record.doctor}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Badge variant={record.status === "Normal" ? "default" : "secondary"}>
                              {record.status}
                            </Badge>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Appointments Tab */}
              <TabsContent value="appointments" className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Appointment Management</CardTitle>
                    <CardDescription>View and manage your medical appointments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Upcoming Appointments</h3>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule New
                        </Button>
                      </div>
                      
                      <div className="space-y-4">
                        {upcomingAppointments.map((appointment) => (
                          <div key={appointment.id} className="p-6 border border-slate-200 rounded-lg">
                            <div className="flex justify-between items-start">
                              <div className="space-y-2">
                                <h4 className="font-medium text-slate-900">{appointment.doctor}</h4>
                                <p className="text-slate-600">{appointment.specialty}</p>
                                <div className="flex items-center space-x-4 text-sm text-slate-500">
                                  <span className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {appointment.date}
                                  </span>
                                  <span className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {appointment.time}
                                  </span>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">Reschedule</Button>
                                <Button variant="outline" size="sm">Cancel</Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Upload Tab */}
              <TabsContent value="upload" className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Upload Medical Documents</CardTitle>
                    <CardDescription>Add new medical records, lab results, or prescriptions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
                        <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-slate-900 mb-2">Upload Documents</h3>
                        <p className="text-slate-600 mb-4">Drag and drop files here, or click to browse</p>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Choose Files
                        </Button>
                        <p className="text-xs text-slate-500 mt-2">
                          Supported formats: PDF, JPG, PNG, DOC (Max 10MB)
                        </p>
                      </div>

                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2 text-amber-800">
                          <AlertCircle className="w-5 h-5" />
                          <span className="font-medium">Privacy Notice</span>
                        </div>
                        <p className="text-sm text-amber-700 mt-1">
                          All uploaded documents are encrypted and stored securely in compliance with HIPAA regulations.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}