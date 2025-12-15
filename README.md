# 📚 OEG Course Feedback System

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF.svg)](https://vitejs.dev/)
[![PHP](https://img.shields.io/badge/PHP-7.4+-777BB4.svg)](https://php.net/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0+-4479A1.svg)](https://mysql.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A comprehensive feedback collection system for OEG Learning's professional training courses, featuring an interactive video player, real-time feedback submission, and an admin dashboard for data analysis.

![OEG Learning Logo](frontend/course-feedback/public/oeg.png)

## 🌟 Features

### 🎥 Interactive Course Experience
- **Embedded Video Player**: Seamless YouTube video integration for course content
- **Professional UI**: Modern, responsive design with OEG branding
- **Interactive Feedback**: Star rating system with hover effects and animations

### 📊 Feedback Collection
- **Real-time Submission**: Instant feedback collection with validation
- **Rich Data Capture**: Rating (1-5 stars), comments, video context, and user IP tracking
- **Thank You Experience**: Confirmation screen with smooth animations

### 🔐 Admin Dashboard
- **Secure Authentication**: Admin login with password hashing
- **Data Analytics**: View and analyze all feedback submissions
- **User Management**: Admin user creation and management
- **Responsive Design**: Mobile-friendly admin interface

### 🛠️ Technical Features
- **CORS Enabled**: Cross-origin resource sharing for seamless frontend-backend communication
- **Error Handling**: Comprehensive error handling and user feedback
- **Loading States**: Smooth loading animations and user feedback
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimizations

## 🏗️ Tech Stack

### Frontend
- **React 19.2.0** - Modern JavaScript library for building user interfaces
- **Vite 7.2.4** - Fast build tool and development server
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **ESLint** - Code linting and formatting

### Backend
- **PHP 7.4+** - Server-side scripting language
- **MySQL 8.0+** - Relational database management system
- **PDO** - PHP Data Objects for database access

### Development Tools
- **XAMPP** - Local development environment (Apache, MySQL, PHP)
- **npm** - Package management
- **Git** - Version control

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **XAMPP** (or any Apache/MySQL/PHP stack)
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **Git** (for cloning the repository)

## 🚀 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/oeg-course-feedback.git
cd oeg-course-feedback
```

### 2. Database Setup
```bash
# Start XAMPP and ensure Apache and MySQL are running
# Open phpMyAdmin (http://localhost/phpmyadmin)

# Run the database schema
mysql -u root -p < database_schema.sql
```

This will create:
- `oeg_feedback` database
- `feedback` table for storing user feedback
- `admin_users` table for admin authentication
- Default admin user: `admin` / `admin123`

### 3. Backend Configuration
```bash
# Ensure backend files are in XAMPP's htdocs directory
# Default location: C:/xampp/htdocs/OEG/
```

### 4. Frontend Setup
```bash
cd frontend/course-feedback

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 🗄️ Database Schema

### Feedback Table
```sql
CREATE TABLE feedback (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    video_id VARCHAR(255) NOT NULL,
    user_ip VARCHAR(45) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Admin Users Table
```sql
CREATE TABLE admin_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 📖 Usage

### For Students
1. **Access the Course**: Navigate to the main course page
2. **Watch Content**: Use the embedded video player to view lessons
3. **Provide Feedback**: Click "Give Feedback" to open the feedback modal
4. **Rate & Comment**: Select a star rating and add optional comments
5. **Submit**: Click submit to send your feedback

### For Administrators
1. **Access Admin**: Click "Admin Access" from the main page
2. **Login**: Use admin credentials (default: admin/admin123)
3. **View Dashboard**: Access feedback analytics and management
4. **Analyze Data**: Review ratings, comments, and user engagement

## 🔌 API Endpoints

### Feedback Submission
```http
POST /backend/submit_feedback.php
Content-Type: application/x-www-form-urlencoded

Parameters:
- rating: integer (1-5)
- comment: string (optional)
- video_id: string (default: "HKLnBv3wxUg")
```

**Response:**
```json
{
  "status": "success",
  "message": "Feedback saved"
}
```

### Admin Login
```http
POST /backend/admin_login.php
Content-Type: application/x-www-form-urlencoded

Parameters:
- username: string
- password: string
```

**Response:**
```json
{
  "status": "success",
  "message": "Login successful"
}
```

### Get Feedback Data
```http
GET /backend/get_feedback.php
Authorization: Bearer {admin_token}
```

**Response:**
```json
{
  "status": "success",
  "data": [
    {
      "id": 1,
      "rating": 5,
      "comment": "Excellent course!",
      "video_id": "HKLnBv3wxUg",
      "user_ip": "192.168.1.1",
      "created_at": "2024-01-15 10:30:00"
    }
  ]
}
```

## 🎨 UI/UX Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Dark/Light Theme**: Automatic theme detection with manual override
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Performance**: Optimized loading with lazy images and code splitting

## 📱 Screenshots

### Course Dashboard
![Course Dashboard](screenshots/course-dashboard.png)
*Main course interface with video player and feedback button*

### Feedback Modal
![Feedback Modal](screenshots/feedback-modal.png)
*Interactive star rating system with comment field*

### Admin Dashboard
![Admin Dashboard](screenshots/admin-dashboard.png)
*Comprehensive analytics and feedback management*

### Mobile View
![Mobile View](screenshots/mobile-view.png)
*Responsive design optimized for mobile devices*

## 🧪 Testing

### Frontend Testing
```bash
cd frontend/course-feedback
npm run lint    # Check code quality
npm run build   # Production build test
npm run preview # Preview production build
```

### Backend Testing
- Test API endpoints using Postman or curl
- Verify database connections
- Check CORS headers
- Validate input sanitization

### End-to-End Testing
1. Submit feedback through the UI
2. Verify data appears in database
3. Test admin login and dashboard access
4. Check responsive design on different devices

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines
- Follow ESLint configuration
- Write clear, concise commit messages
- Test your changes thoroughly
- Update documentation as needed
- Maintain code quality standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OEG Learning** for the opportunity to build this system
- **React Community** for the amazing framework
- **Tailwind CSS** for the utility-first approach
- **Vite** for the lightning-fast development experience

## 📞 Support

For support, email support@oeglearning.com or create an issue in this repository.

---

**Built with ❤️ for OEG Learning's professional training platform**
