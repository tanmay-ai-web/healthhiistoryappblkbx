"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Heart, 
  FileText, 
  Calendar, 
  Users, 
  Search, 
  Plus,
  Bell,
  Settings,
  LogOut,

  Shield,
  Clock,
  CheckCircle,
  AlertTriangle,
  Stethoscope
} from "lucide-react";

export default function DoctorDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchPatient, setSearchPatient] = useState("");

  // Mock doctor data
  const doctorData = {
    id: "DR789012",
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@hospital.com",
    specialty: "Cardiology",
    hospital: "City General Hospital",
    licenseNumber: "MD123456",
    verified: true
  };

  const recentPatients = [
    {
      id: "PT123456",
      name: "John Doe",
      age: 38,
      lastVisit: "2024-01-15",
      condition: "Hypertension",
      status: "Stable"
    },
    {
      id: "PT789012",
      name: "Mary Smith",
      age: 45,
      lastVisit: "2024-01-14",
      condition: "Diabetes Type 2",
      status: "Monitoring"
    },
    {
      id: "PT345678",
      name: "Robert Wilson",
      age: 62,
      lastVisit: "2024-01-12",
      condition: "Heart Disease",
      status: "Critical"
    }
  ];

  const todayAppointments = [
    {
      id: 1,
      patientId: "PT123456",
      patientName: "John Doe",
      time: "09:00 AM",
      type: "Follow-up",
      duration: "30 min"
    },
    {
      id: 2,
      patientId: "PT789012",
      patientName: "Mary Smith",
      time: "10:30 AM",
      type: "Consultation",
      duration: "45 min"
    },
    {
      id: 3,
      patientId: "PT345678",
      patientName: "Robert Wilson",
      time: "02:00 PM",
      type: "Emergency",
      duration: "60 min"
    }
  ];

  const pendingReports = [
    {
      id: 1,
      patientName: "John Doe",
      type: "Lab Results",
      date: "2024-01-15",
      priority: "Normal"
    },
    {
      id: 2,
      patientName: "Mary Smith",
      type: "X-Ray",
      date: "2024-01-14",
      priority: "Urgent"
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
                <p className="text-sm text-slate-600">Doctor Portal</p>
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
          {/* Sidebar - Doctor Info */}
          <div className="lg:col-span-1">
            <Card className="border-slate-200">
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarImage src="https://placehold.co/200x200?text=Doctor+Professional+Portrait" />
                  <AvatarFallback className="text-lg">SJ</AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl">{doctorData.name}</CardTitle>
                <CardDescription>ID: {doctorData.id}</CardDescription>
                {doctorData.verified && (
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Specialty:</span>
                    <span className="font-medium">{doctorData.specialty}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Hospital:</span>
                    <span className="font-medium text-xs">{doctorData.hospital}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">License:</span>
                    <span className="font-medium">{doctorData.licenseNumber}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-slate-900">Quick Stats</h4>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-blue-50 p-2 rounded">
                      <div className="text-lg font-bold text-blue-600">24</div>
                      <div className="text-xs text-blue-600">Patients</div>
                    </div>
                    <div className="bg-green-50 p-2 rounded">
                      <div className="text-lg font-bold text-green-600">3</div>
                      <div className="text-xs text-green-600">Today</div>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Stethoscope className="w-4 h-4 mr-2" />
                  Update Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Good morning, Dr. {doctorData.name.split(' ')[1]}!</h2>
              <p className="text-slate-600">You have {todayAppointments.length} appointments scheduled for today.</p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="patients">Patients</TabsTrigger>
                <TabsTrigger value="appointments">Appointments</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                {/* Quick Stats */}
                <div className="grid md:grid-cols-4 gap-6">
                  <Card className="border-slate-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
                      <Users className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">24</div>
                      <p className="text-xs text-slate-600">+2 this week</p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
                      <Calendar className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{todayAppointments.length}</div>
                      <p className="text-xs text-slate-600">Next at 9:00 AM</p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Pending Reports</CardTitle>
                      <FileText className="h-4 w-4 text-orange-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{pendingReports.length}</div>
                      <p className="text-xs text-slate-600">1 urgent</p>
                    </CardContent>
                  </Card>

                  <Card className="border-slate-200">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Verification Status</CardTitle>
                      <Shield className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">✓</div>
                      <p className="text-xs text-slate-600">Verified</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Today's Schedule */}
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Today's Schedule</CardTitle>
                    <CardDescription>Your appointments for today</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {todayAppointments.map((appointment) => (
                        <div key={appointment.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                              <Clock className="w-5 h-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-slate-900">{appointment.patientName}</h4>
                              <p className="text-sm text-slate-600">{appointment.type} • {appointment.duration}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-slate-900">{appointment.time}</p>
                            <Badge variant="outline">ID: {appointment.patientId}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Patients */}
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Recent Patients</CardTitle>
                    <CardDescription>Patients you've seen recently</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentPatients.map((patient) => (
                        <div key={patient.id} className="flex items-center justify-between p-4 border border-slate-200 rounded-lg">
                          <div className="flex items-center space-x-4">
                            <Avatar>
                              <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-medium text-slate-900">{patient.name}</h4>
                              <p className="text-sm text-slate-600">Age {patient.age} • {patient.condition}</p>
                              <p className="text-xs text-slate-500">Last visit: {patient.lastVisit}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <Badge variant={
                              patient.status === "Stable" ? "default" : 
                              patient.status === "Critical" ? "destructive" : "secondary"
                            }>
                              {patient.status}
                            </Badge>
                            <Button variant="outline" size="sm">View Records</Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Patients Tab */}
              <TabsContent value="patients" className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Patient Search</CardTitle>
                    <CardDescription>Search for patients by ID or name to access their medical records</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex space-x-4">
                        <div className="flex-1">
                          <Label htmlFor="patientSearch">Patient ID or Name</Label>
                          <Input
                            id="patientSearch"
                            placeholder="Enter patient ID (e.g., PT123456) or name"
                            value={searchPatient}
                            onChange={(e) => setSearchPatient(e.target.value)}
                            className="border-slate-300"
                          />
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700 mt-6">
                          <Search className="w-4 h-4 mr-2" />
                          Search
                        </Button>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <div className="flex items-center space-x-2 text-blue-800">
                          <Shield className="w-5 h-5" />
                          <span className="font-medium">Secure Access</span>
                        </div>
                        <p className="text-sm text-blue-700 mt-1">
                          All patient record access is logged and monitored for HIPAA compliance.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Your Patients</CardTitle>
                    <CardDescription>Patients under your care</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentPatients.map((patient) => (
                        <div key={patient.id} className="p-4 border border-slate-200 rounded-lg hover:bg-slate-50">
                          <div className="flex justify-between items-start">
                            <div className="flex items-center space-x-4">
                              <Avatar>
                                <AvatarFallback>{patient.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h4 className="font-medium text-slate-900">{patient.name}</h4>
                                <p className="text-sm text-slate-600">Patient ID: {patient.id}</p>
                                <p className="text-sm text-slate-600">Age {patient.age} • {patient.condition}</p>
                                <p className="text-xs text-slate-500">Last visit: {patient.lastVisit}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Badge variant={
                                patient.status === "Stable" ? "default" : 
                                patient.status === "Critical" ? "destructive" : "secondary"
                              }>
                                {patient.status}
                              </Badge>
                              <Button variant="outline" size="sm">
                                <FileText className="w-4 h-4 mr-2" />
                                View History
                              </Button>
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                <Plus className="w-4 h-4 mr-2" />
                                Add Record
                              </Button>
                            </div>
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
                    <CardDescription>Manage your patient appointments and schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Today's Appointments</h3>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Plus className="w-4 h-4 mr-2" />
                          Add Appointment
                        </Button>
                      </div>
                      
                      <div className="space-y-4">
                        {todayAppointments.map((appointment) => (
                          <div key={appointment.id} className="p-6 border border-slate-200 rounded-lg">
                            <div className="flex justify-between items-start">
                              <div className="space-y-2">
                                <h4 className="font-medium text-slate-900">{appointment.patientName}</h4>
                                <p className="text-slate-600">Patient ID: {appointment.patientId}</p>
                                <div className="flex items-center space-x-4 text-sm text-slate-500">
                                  <span className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {appointment.time}
                                  </span>
                                  <span>{appointment.type}</span>
                                  <span>{appointment.duration}</span>
                                </div>
                              </div>
                              <div className="flex space-x-2">
                                <Button variant="outline" size="sm">Reschedule</Button>
                                <Button variant="outline" size="sm">Complete</Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Reports Tab */}
              <TabsContent value="reports" className="space-y-6">
                <Card className="border-slate-200">
                  <CardHeader>
                    <CardTitle>Medical Reports</CardTitle>
                    <CardDescription>Review and manage patient medical reports</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium">Pending Reports</h3>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Plus className="w-4 h-4 mr-2" />
                          Create Report
                        </Button>
                      </div>
                      
                      <div className="space-y-4">
                        {pendingReports.map((report) => (
                          <div key={report.id} className="p-4 border border-slate-200 rounded-lg">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                                  <FileText className="w-5 h-5 text-orange-600" />
                                </div>
                                <div>
                                  <h4 className="font-medium text-slate-900">{report.type}</h4>
                                  <p className="text-sm text-slate-600">{report.patientName}</p>
                                  <p className="text-xs text-slate-500">Date: {report.date}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <Badge variant={report.priority === "Urgent" ? "destructive" : "default"}>
                                  {report.priority === "Urgent" && <AlertTriangle className="w-3 h-3 mr-1" />}
                                  {report.priority}
                                </Badge>
                                <Button variant="outline" size="sm">Review</Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <Card className="border-slate-200 bg-slate-50">
                        <CardHeader>
                          <CardTitle className="text-lg">Add New Medical Record</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="patientId">Patient ID</Label>
                              <Input id="patientId" placeholder="PT123456" />
                            </div>
                            <div>
                              <Label htmlFor="recordType">Record Type</Label>
                              <Input id="recordType" placeholder="Diagnosis, Lab Result, etc." />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="diagnosis">Diagnosis/Notes</Label>
                            <Textarea 
                              id="diagnosis" 
                              placeholder="Enter diagnosis, treatment plan, or medical notes..."
                              rows={4}
                            />
                          </div>
                          <Button className="bg-blue-600 hover:bg-blue-700">
                            <Plus className="w-4 h-4 mr-2" />
                            Add Medical Record
                          </Button>
                        </CardContent>
                      </Card>
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