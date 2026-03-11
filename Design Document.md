# **UI/UX & Design Document**

**Project Name:** Profile Builder

## **1\. Design Philosophy**

The UI will follow a "Dark Mode First" aesthetic. A deep black background will reduce eye strain and give the app a premium feel. We will introduce a vibrant blue as the primary accent color to guide the user's eye toward interactive elements, creating a striking, high-contrast experience.

## **2\. Visual Identity & Theming**

* **Primary Background:** Pure Black (\#000000) or Deep Charcoal (\#121212).  
* **Surface/Card Backgrounds:** Dark Gray (\#1E1E1E) for input fields and table cards to separate them from the background.  
* **Accent Color:** Electric Blue (\#2563EB or \#3B82F6) for primary buttons, active input borders, and "Add Row" text.  
* **Text Colors:** \* Primary Text: Pure White (\#FFFFFF).  
  * Secondary Text/Placeholders: Light Gray (\#A1A1AA).  
* **Typography:** **Google Sans (Normal)**.  
  * Used globally. Headers will use a slightly larger font size, while inputs will use a highly legible baseline size (e.g., 16px).

## **3\. Layout Architecture (Single Page)**

The app will utilize a ScrollView with keyboardShouldPersistTaps="handled" to ensure smooth scrolling while typing.

**Section Breakdown:**

1. **Hero/Header:** Sticky or static title "Profile Builder" in Blue.  
2. **Profile Picture:** A circular placeholder centered at the top. Tapping opens the image picker.  
3. **Basic Info Card:** Name, Father's name, Mother's name, Phone, Email, Address.  
4. **Identification Card:** \* Aadhar Number input.  
   * DOB input (placed immediately below Aadhar, utilizing a date picker).  
5. **Education Tables:**  
   * Rendered as lists of cards.  
   * Includes a "+ Add General Education" and "+ Add Technical Education" subtle blue text button.  
6. **Experience:** A multi-line text input (textAlignVertical="top").  
7. **Sticky Footer:** A fixed bottom container with a full-width, bright blue button: "Generate & Share PDF".

## **4\. PDF Template Design**

The generated PDF will use a clean, white background (standard for printing/resumes). It will utilize the app's Blue accent color for section headers (e.g., a blue bar for the Name/Contact header) to maintain brand consistency between the app and the document.