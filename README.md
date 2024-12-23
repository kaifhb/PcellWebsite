# 🌟 **PCell Website**

The **PCell Website** is a comprehensive platform designed to manage and streamline placement-related activities. It offers features such as user authentication, announcement management, placement stats, and role-based access control for seamless coordination between users and admins.

---

## 🌐 **Live Demo**

🔗 [PCell Website](https://pcell-frontend-deploy-iok8.vercel.app/)

---

## ✨ **Features**

### 🔒 **Core Functionalities**
1. **Authentication and Authorization**
   - 🔑 Secure login and registration using **JWT tokens** and **bcrypt**.
   - 🛡️ Role-based access control with support for two user types (Admin and User).

2. **Account Management**
   - 🔄 Password reset functionality.
   - ✏️ Profile updates, including resume uploads using **Multer** and **Cloudinary**.

3. **Announcements**
   - 📢 Three-tiered announcement system with full CRUD operations.
   - 💬 Comment functionality for announcements.

4. **User Management**
   - 👥 Explore and manage profiles of all users and admins.
   - 🛠️ Update user details and manage other users' profiles.

5. **Placement Management**
   - 📊 Data schema optimized for features like company visits and user placements.
   - 📈 Placement stats displayed in an efficient and user-friendly table format.

6. **Other Features**
   - 🔍 Intuitive profile exploration.
   - 📝 Engagement with announcements.
   - 🚨 Comprehensive error handling with dedicated error pages.

---

## 🖥️ **Frontend Pages**

| **Page**                  | **Description**                                              |
|---------------------------|--------------------------------------------------------------|
| **Login Page**            | For secure user authentication.                              |
| **Registration Page**     | Allows new users to sign up.                                 |
| **Profile Page**          | Displays and allows updates to user profiles.               |
| **All Announcements Page**| Shows all announcements.                                     |
| **Single Announcement Page** | Details of a specific announcement with engagement options. |
| **Results Page**          | Displays placement results.                                  |
| **Openings Page**         | Lists job openings.                                          |
| **Admin Pages**           | Manage users, admins, announcements, results, and openings. |
| **Password Management Pages** | Forgot and reset password functionality.                  |
| **Error and Not Found Pages** | Handles errors and invalid routes gracefully.             |

---

## 📡 **API Endpoints**

### **Authentication**
| Method | Endpoint        | Description             |
|--------|-----------------|-------------------------|
| POST   | `/auth/login`   | Login user.            |
| POST   | `/auth/register`| Register user.         |
| POST   | `/auth/reset`   | Reset user password.   |

### **User Management**
| Method | Endpoint                | Description                    |
|--------|-------------------------|--------------------------------|
| GET    | `/api/user`             | Fetch all users.              |
| GET    | `/api/user/:id`         | Fetch a user by ID.           |
| PATCH  | `/api/user/:id`         | Update user data.             |
| DELETE | `/api/user/:id`         | Delete user account.          |

### **Announcements**
| Method | Endpoint                     | Description                           |
|--------|------------------------------|---------------------------------------|
| GET    | `/api/announcements`         | Fetch all announcements.             |
| POST   | `/api/announcements`         | Create a new announcement.           |
| GET    | `/api/announcements/:id`     | Fetch a single announcement by ID.   |
| PATCH  | `/api/announcements/:id`     | Update an announcement.              |
| DELETE | `/api/announcements/:id`     | Delete an announcement.              |

### **Comments**
| Method | Endpoint                  | Description               |
|--------|---------------------------|---------------------------|
| GET    | `/api/comments/:postId`   | Fetch comments for a post.|
| POST   | `/api/comments`           | Add a comment.            |
| DELETE | `/api/comments/:id`       | Delete a comment.         |

### **Job Openings**
| Method | Endpoint             | Description                   |
|--------|----------------------|-------------------------------|
| GET    | `/api/opening`       | Fetch all job openings.       |
| POST   | `/api/opening`       | Create a new job opening.     |
| GET    | `/api/opening/:id`   | Fetch a single job opening.   |
| PATCH  | `/api/opening/:id`   | Update a job opening.         |
| DELETE | `/api/opening/:id`   | Delete a job opening.         |

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

### 🛠️ **Other Tools**
- 📂 Multer (for file uploads)
- ☁️ Cloudinary (for storing resumes and images)

---

## 🚀 **Installation and Setup**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/kaifhb/PcellWebsite.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd PcellWebsite
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_NAME=your_cloudinary_name
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     ```

5. **Start the development server:**
   ```bash
   npm start
   ```

6. **Access the application at:** `http://localhost:3000`

---

## 🔮 **Future Enhancements**

- 📈 Add advanced analytics for placement statistics.
- 🎨 Improve UI/UX for better accessibility and responsiveness.
- 🔔 Implement notifications for announcements and results.
- 🌍 Scale the application for broader usage.

---

## 📂 **Repository**

🔗 [GitHub Repository](https://github.com/kaifhb/PcellWebsite)
