"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, FileText, Clock, CheckCircle, Heart } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">HealthVault</h1>
                <p className="text-sm text-slate-600">Medical History Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm" onClick={() => window.location.href = '/auth/login'}>
                Sign In
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700" onClick={() => window.location.href = '/auth/register'}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                  Secure • HIPAA Compliant • Professional
                </Badge>
                <h1 className="text-5xl font-bold text-slate-900 leading-tight">
                  Complete Medical History
                  <span className="text-blue-600"> Management</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Secure digital platform connecting patients and healthcare providers. 
                  Manage comprehensive medical records, track treatment history, and 
                  enable seamless healthcare collaboration.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" onClick={() => window.location.href = '/auth/login'}>
                  Patient Portal
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-slate-300" onClick={() => window.location.href = '/auth/login'}>
                  Doctor Access
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-slate-700">Verified Doctors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span className="text-slate-700">Secure Records</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <span className="text-slate-700">24/7 Access</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
                <img 
                  src="https://placehold.co/600x400?text=Modern+Healthcare+Dashboard+Interface+with+Medical+Records+and+Patient+Data+Visualization" 
                  alt="Modern healthcare dashboard interface showing medical records and patient data visualization"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">10K+</div>
                <div className="text-sm opacity-90">Patients Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Comprehensive Healthcare Management
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to manage patient care, medical records, and healthcare collaboration in one secure platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-slate-900">Patient Management</CardTitle>
                <CardDescription className="text-slate-600">
                  Unique patient IDs, comprehensive profiles, and complete medical history tracking.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Unique patient identification system</li>
                  <li>• Complete medical history access</li>
                  <li>• Personal health record management</li>
                  <li>• Emergency contact information</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-slate-900">Medical Records</CardTitle>
                <CardDescription className="text-slate-600">
                  Upload, organize, and access medical reports, lab results, and treatment plans.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Secure document upload system</li>
                  <li>• Categorized medical records</li>
                  <li>• Treatment history timeline</li>
                  <li>• Lab results and imaging</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-slate-900">Doctor Verification</CardTitle>
                <CardDescription className="text-slate-600">
                  Verified healthcare providers with secure access to patient records.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Professional credential verification</li>
                  <li>• Role-based access control</li>
                  <li>• Audit trail for record access</li>
                  <li>• Secure patient data sharing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold">
              Ready to Transform Healthcare Management?
            </h2>
            <p className="text-xl text-slate-300">
              Join thousands of patients and healthcare providers using HealthVault 
              for secure, efficient medical record management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Start as Patient
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-slate-600 text-white hover:bg-slate-800">
                Join as Doctor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">HealthVault</span>
              </div>
              <p className="text-slate-600">
                Secure medical history management platform for patients and healthcare providers.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">For Patients</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Medical Records</li>
                <li>Health History</li>
                <li>Doctor Access</li>
                <li>Privacy Controls</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">For Doctors</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Patient Management</li>
                <li>Verification System</li>
                <li>Medical Reports</li>
                <li>Secure Access</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Support</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 mt-8 pt-8 text-center text-slate-600">
            <p>&copy; 2024 HealthVault. All rights reserved. Built for healthcare professionals and patients.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}