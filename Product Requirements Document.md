# **Product Requirements Document (PRD)**

**Project Name:** Profile Builder

**Platform:** Mobile (iOS & Android via React Native Expo)

**Environment:** 100% Offline

## **1\. Overview**

Profile Builder is a fast, lightweight, offline mobile application designed to collect user demographic, educational, and professional data through a single, seamless form. Upon completion, the app instantly compiles this data into a professional, ready-to-use PDF resume that can be previewed, saved, or shared using the device's native sharing capabilities.

## **2\. Target Audience**

Students, professionals, and individuals who need to rapidly generate a structured resume on the go without relying on internet connectivity or complex web-based builders.

## **3\. Core Features**

* **Single-Page Data Entry:** A continuous, scrollable interface to minimize navigation friction.  
* **Local Image Capture:** Ability to upload a profile picture directly from the device gallery.  
* **Dynamic Data Tables:** Users can add multiple rows for their General and Technical education dynamically.  
* **On-Device PDF Generation:** Converts user input into a beautifully formatted PDF document instantly.  
* **Native Share Sheet:** Integration with iOS/Android share options to email, save to files, or message the PDF.

## **4\. Data Requirements**

The form must capture the following specific fields:

1. **Photo:** Local Image URI.  
2. **Personal Details:** Name, Father's Name, Mother's Name, Phone Number, Mail ID, Address.  
3. **Identification:** Aadhar Number, Date of Birth (must be visually grouped below Aadhar).  
4. **Education (Tabular):** \* *General Education* (e.g., SSLC, HSC): Dynamic rows containing Course, Institution, Year, and Grade.  
   * *Technical Education*: Dynamic rows for degrees/diplomas.  
5. **Experience:** Text area for professional work history.

## **5\. User Flow**

1. **Launch:** User opens the app to the main scrollable form.  
2. **Input:** User uploads a photo and types in personal, identification, and experience details.  
3. **Dynamic Input:** User clicks "Add Qualification" in the education sections to build their academic tables.  
4. **Action:** User taps the prominent "Generate Resume" button at the bottom.  
5. **Output:** App generates an HTML string, converts it to a PDF, and immediately opens the system Share/Preview sheet.