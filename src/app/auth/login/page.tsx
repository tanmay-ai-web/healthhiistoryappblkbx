"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Heart, User, Stethoscope, ArrowLeft, Shield, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "patient"
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // For demo purposes, redirect based on role
      if (loginData.role === "patient") {
        window.location.href = "/dashboard/patient";
      } else {
        window.location.href = "/dashboard/doctor";
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">HealthVault</h1>
                <p className="text-sm text-slate-600">Medical History Management</p>
              </div>
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
            <p className="text-slate-600">Sign in to access your health records</p>
          </div>

          <Card className="border-slate-200 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Sign In</CardTitle>
              <CardDescription className="text-center">
                Choose your account type and enter your credentials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-6">
                {/* Role Selection */}
                <div className="space-y-2">
                  <Label htmlFor="role">Account Type</Label>
                  <Tabs 
                    value={loginData.role} 
                    onValueChange={(value) => setLoginData({...loginData, role: value})}
                    className="w-full"
                  >
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="patient" className="flex items-center space-x-2">
                        <User className="w-4 h-4" />
                        <span>Patient</span>
                      </TabsTrigger>
                      <TabsTrigger value="doctor" className="flex items-center space-x-2">
                        <Stethoscope className="w-4 h-4" />
                        <span>Doctor</span>
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    required
                    className="border-slate-300"
                  />
                </div>

                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    required
                    className="border-slate-300"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {/* Role-specific Information */}
                {loginData.role === "doctor" && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 text-blue-800">
                      <Shield className="w-5 h-5" />
                      <span className="font-medium">Doctor Verification Required</span>
                    </div>
                    <p className="text-sm text-blue-700 mt-1">
                      Your medical license will be verified before accessing patient records.
                    </p>
                  </div>
                )}

                {loginData.role === "patient" && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 text-green-800">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-medium">Secure Patient Portal</span>
                    </div>
                    <p className="text-sm text-green-700 mt-1">
                      Access your complete medical history and manage your health records.
                    </p>
                  </div>
                )}

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700" 
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>

                {/* Demo Credentials */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <h4 className="font-medium text-slate-900 mb-2">Demo Credentials</h4>
                  <div className="space-y-2 text-sm text-slate-600">
                    <div>
                      <strong>Patient:</strong> patient@demo.com / password123
                    </div>
                    <div>
                      <strong>Doctor:</strong> doctor@demo.com / password123
                    </div>
                  </div>
                </div>

                {/* Register Link */}
                <div className="text-center">
                  <p className="text-sm text-slate-600">
                    Don't have an account?{" "}
                    <Link href="/auth/register" className="text-blue-600 hover:text-blue-700 font-medium">
                      Create Account
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500">
              Your data is protected with enterprise-grade security and HIPAA compliance standards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}