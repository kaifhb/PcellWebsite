# PCell Website

The PCell Website is  comprehensive platform designed to manage and streamline placement-related activities. It offers features such as user authentication, announcement management, placement stats, and role-based access control for seamless coordination between users and admins.

## Live Demo

[PCell Website](https://pcell-frontend-deploy-iok8.vercel.app/)

## Features

### Core Functionalities
1. **Authentication and Authorization**
   - Secure login and registration using **JWT tokens** and **bcrypt**.
   - Role-based access control with support for two user types (Admin and User).

2. **Account Management**
   - Password reset functionality.
   - Profile updates, including resume uploads using **Multer** and **Cloudinary**.

3. **Announcements**
   - Three-tiered announcement system with full CRUD operations.
   - Comment functionality for announcements.

4. **User Management**
   - Explore and manage profiles of all users and admins.
   - Update user details and manage other users' profiles.

5. **Placement Management**
   - Data schema optimized for features like company visits and user placements.
   - Placement stats displayed in an efficient and user-friendly table format.

6. **Other Features**
   - Intuitive profile exploration.
   - Engagement with announcements.
   - Comprehensive error handling with dedicated error pages.

### Frontend Pages
1. **Login Page:** For secure user authentication.
2. **Registration Page:** Allows new users to sign up.
3. **Profile Page:** Displays and allows updates to user profiles.
4. **All Announcements Page:** Shows all announcements.
5. **Single Announcement Page:** Details of a specific announcement with engagement options.
6. **Results and Openings Pages:** Display results and job openings.
7. **Admin Pages:**
   - Manage users and admins.
   - Add and edit announcements, results, and job openings.
8. **Password Management Pages:**
   - Forgot Password Page.
   - Reset Password Page.
9. **Error and Not Found Pages:** Handle errors and invalid routes gracefully.

## API Features
- Developed and integrated **20+ CRUD APIs** for:
  - Announcements
  - Results
  - User management
  - Placement data
- APIs are optimized for efficient front-end data rendering and interaction.

## Technologies Used

### Frontend
- React.js
- JavaScript
- CSS

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Other Tools
- Multer (for file uploads)
- Cloudinary (for storing resumes and images)

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/kaifhb/PcellWebsite.git
   ```

2. Navigate to the project directory:
   ```bash
   cd PcellWebsite
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_NAME=your_cloudinary_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```

5. Start the development server:
   ```bash
   npm start
   ```

6. Access the application at `http://localhost:3000`.

## Future Enhancements
- Add advanced analytics for placement statistics.
- Improve UI/UX for better accessibility and responsiveness.
- Implement notifications for announcements and results.
- Scale the application for broader usage.

## Repository

[GitHub Repository](https://github.com/kaifhb/PcellWebsite)
