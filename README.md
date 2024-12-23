# 🌟 **Pcell Website**

A comprehensive platform to streamline placement-related activities with features like user authentication, announcement management, placement stats, and role-based access control. This README outlines the functionality, API endpoints, setup, and technologies used.

---

## 🌐 **Live Demo**

🔗 **[Pcell Website](https://pcell-frontend-deploy-iok8.vercel.app/)**

---

## ✨ **Features**

### 🔒 **Core Functionalities**

1. **Authentication and Authorization**
   - 🔑 Secure login and registration using **JWT tokens** and **bcrypt**.
   - 🛡️ Role-based access control supporting Admin and User roles.

2. **Account Management**
   - 🔄 Password reset and updates.
   - ✏️ Profile updates with resume uploads using **Multer** and **Cloudinary**.

3. **Announcements**
   - 📢 Three-tiered announcement system with CRUD operations.
   - 💬 Comment functionality for announcements.

4. **Placement Management**
   - 📊 Optimized data schema for company visits and placements.
   - 📈 User-friendly display of placement stats.

5. **User Management**
   - 👥 Explore and manage user and admin profiles.
   - 🛠️ Update user data and manage other profiles.

### 🖥️ **Frontend Pages**

- **Authentication Pages:** Login, Registration, Forgot Password, Reset Password.
- **Profile Management:** User Profiles, Admin Profiles, Other User Profiles.
- **Announcement Management:** All Announcements, Single Announcement, Add/Edit Announcements.
- **Placement Management:** Results, Openings, Selection Data.
- **Error Handling:** Error Pages and Page Not Found.

### 📡 **Backend API Features**

Over **20+ CRUD APIs** to handle:

- 📢 Announcements
- 📜 Results
- 👥 User Data
- 📈 Placement Stats

---

## 🛠️ **API Endpoints**

### **Authentication**

- `POST /auth/register` - Register a new user.
- `POST /auth/login` - User login.
- `POST /auth/forgot-password` - Send reset password email.
- `POST /auth/reset-password` - Reset user password.

### **Users**

- `GET /api/user/profile` - Fetch user profile data.
- `PUT /api/user/update/:id` - Update user details.
- `DELETE /api/user/delete/:id` - Delete a user.

### **Announcements**

- `GET /api/announcements` - Fetch all announcements.
- `POST /api/announcements/add` - Add a new announcement.
- `PUT /api/announcements/edit/:id` - Edit an announcement.
- `DELETE /api/announcements/delete/:id` - Delete an announcement.

### **Comments**

- `POST /api/comments/add` - Add a comment to an announcement.
- `GET /api/comments/:announcementId` - Get all comments for a specific announcement.

### **Openings**

- `GET /api/opening` - Fetch all job openings.
- `POST /api/opening/add` - Add a new job opening.

### **Selections**

- `GET /api/selection` - Fetch selection data.
- `POST /api/selection/add/:_id` - Add selection data.

### **Branches**

- `GET /api/branch` - Fetch branch information.
- `POST /api/branch/add` - Add branch data.

---

## 💻 **Technologies Used**

### 🖥️ **Frontend**
- 🌟 React.js
- 🎨 JavaScript
- 💅 CSS

### 🌐 **Backend**
- ⚙️ Node.js
- 🧩 Express.js

### 🗄️ **Database**
- 🟢 MongoDB

### 🔧 **Other Tools**
- 📂 Multer (File uploads)
- ☁️ Cloudinary (Resume/Image storage)

---

## 🚀 **Setup Instructions**

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

4. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_NAME=your_cloudinary_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```

5. Start the server:
   ```bash
   npm start
   ```

6. Access the app at: `http://localhost:3000`

---

## 🔮 **Future Enhancements**

- 📈 Advanced analytics for placement statistics.
- 🎨 Improved UI/UX for better accessibility.
- 🔔 Notifications for announcements and results.
- 🌍 Scalability for larger audiences.

---

## 📂 **Repository**

🔗 [GitHub Repository](https://github.com/kaifhb/PcellWebsite)

---

> Designed and developed with ❤️ to simplify placement activities.
