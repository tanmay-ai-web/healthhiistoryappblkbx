"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, User, Stethoscope, ArrowLeft, Shield, Info } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    role: "patient",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    phone: "",
    // Doctor specific fields
    licenseNumber: "",
    specialty: "",
    hospital: "",
    // Patient specific fields
    emergencyContact: "",
    emergencyPhone: "",
    // Terms
    agreeToTerms: false,
    agreeToPrivacy: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess("");

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    if (!formData.agreeToTerms || !formData.agreeToPrivacy) {
      setError("Please agree to the terms and privacy policy");
      setIsLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Generate unique patient ID for patients
      const uniqueId = formData.role === "patient" 
        ? `PT${Date.now().toString().slice(-6)}` 
        : `DR${Date.now().toString().slice(-6)}`;

      setSuccess(`Account created successfully! ${formData.role === "patient" ? `Your unique Patient ID is: ${uniqueId}` : "Your account is pending verification."}`);
      
      // Redirect after success
      setTimeout(() => {
        window.location.href = "/auth/login";
      }, 3000);
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h1>
            <p className="text-slate-600">Join HealthVault to manage your medical records securely</p>
          </div>

          <Card className="border-slate-200 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl text-center">Register</CardTitle>
              <CardDescription className="text-center">
                Choose your account type and provide your information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Role Selection */}
                <div className="space-y-2">
                  <Label htmlFor="role">Account Type</Label>
                  <Tabs 
                    value={formData.role} 
                    onValueChange={(value) => updateFormData("role", value)}
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

                {/* Basic Information */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      required
                      className="border-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => updateFormData("lastName", e.target.value)}
                      required
                      className="border-slate-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    required
                    className="border-slate-300"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create password"
                      value={formData.password}
                      onChange={(e) => updateFormData("password", e.target.value)}
                      required
                      className="border-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm password"
                      value={formData.confirmPassword}
                      onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                      required
                      className="border-slate-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                      required
                      className="border-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      required
                      className="border-slate-300"
                    />
                  </div>
                </div>

                {/* Role-specific fields */}
                {formData.role === "doctor" && (
                  <div className="space-y-4 border-t border-slate-200 pt-6">
                    <div className="flex items-center space-x-2 text-blue-800">
                      <Shield className="w-5 h-5" />
                      <span className="font-medium">Professional Information</span>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="licenseNumber">Medical License Number</Label>
                      <Input
                        id="licenseNumber"
                        placeholder="Enter your medical license number"
                        value={formData.licenseNumber}
                        onChange={(e) => updateFormData("licenseNumber", e.target.value)}
                        required
                        className="border-slate-300"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="specialty">Specialty</Label>
                        <Input
                          id="specialty"
                          placeholder="e.g., Cardiology"
                          value={formData.specialty}
                          onChange={(e) => updateFormData("specialty", e.target.value)}
                          required
                          className="border-slate-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hospital">Hospital/Clinic</Label>
                        <Input
                          id="hospital"
                          placeholder="Primary workplace"
                          value={formData.hospital}
                          onChange={(e) => updateFormData("hospital", e.target.value)}
                          required
                          className="border-slate-300"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {formData.role === "patient" && (
                  <div className="space-y-4 border-t border-slate-200 pt-6">
                    <div className="flex items-center space-x-2 text-green-800">
                      <User className="w-5 h-5" />
                      <span className="font-medium">Emergency Contact</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                        <Input
                          id="emergencyContact"
                          placeholder="Contact person name"
                          value={formData.emergencyContact}
                          onChange={(e) => updateFormData("emergencyContact", e.target.value)}
                          required
                          className="border-slate-300"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="emergencyPhone">Emergency Phone</Label>
                        <Input
                          id="emergencyPhone"
                          type="tel"
                          placeholder="+1 (555) 987-6543"
                          value={formData.emergencyPhone}
                          onChange={(e) => updateFormData("emergencyPhone", e.target.value)}
                          required
                          className="border-slate-300"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Terms and Privacy */}
                <div className="space-y-4 border-t border-slate-200 pt-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => updateFormData("agreeToTerms", checked as boolean)}
                    />
                    <Label htmlFor="agreeToTerms" className="text-sm">
                      I agree to the{" "}
                      <Link href="/terms" className="text-blue-600 hover:text-blue-700">
                        Terms of Service
                      </Link>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeToPrivacy"
                      checked={formData.agreeToPrivacy}
                      onCheckedChange={(checked) => updateFormData("agreeToPrivacy", checked as boolean)}
                    />
                    <Label htmlFor="agreeToPrivacy" className="text-sm">
                      I agree to the{" "}
                      <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
                        Privacy Policy
                      </Link>{" "}
                      and HIPAA compliance terms
                    </Label>
                  </div>
                </div>

                {/* Error/Success Messages */}
                {error && (
                  <Alert variant="destructive">
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                {success && (
                  <Alert className="border-green-200 bg-green-50">
                    <Info className="w-4 h-4 text-green-600" />
                    <AlertDescription className="text-green-800">{success}</AlertDescription>
                  </Alert>
                )}

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700" 
                  disabled={isLoading}
                >
                  {isLoading ? "Creating Account..." : "Create Account"}
                </Button>

                {/* Login Link */}
                <div className="text-center">
                  <p className="text-sm text-slate-600">
                    Already have an account?{" "}
                    <Link href="/auth/login" className="text-blue-600 hover:text-blue-700 font-medium">
                      Sign In
                    </Link>
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Security Notice */}
          <div className="mt-8 text-center">
            <p className="text-xs text-slate-500">
              All information is encrypted and stored securely in compliance with HIPAA regulations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}