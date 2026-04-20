⚡ IronTrack AI
IronTrack AI is a sleek, React-based fitness tracking application designed to help users log their workouts and maintain consistency through an automated streak system. It leverages Firebase for real-time data synchronization and secure authentication.

🚀 Features
Secure Authentication: User signup and login powered by Firebase Auth.

Protected Routes: React Router ensures only logged-in users can access their dashboard.

Real-time Workout Feed: Log exercises, sets, and reps with instant updates via Firestore onSnapshot.

AI Streak System: A built-in logic that tracks consecutive days active to keep users motivated.

Personalized Data: Each user sees only their own fitness data, secured by unique User IDs (UIDs).

🛠️ Tech Stack
Frontend: React (Hooks, Context API)

Routing: React Router v6

Backend/Database: Firebase Firestore

Authentication: Firebase Auth

Styling: Custom CSS (Fade-in animations and Grid layouts)

📦 Installation & Setup
Clone the repository:

Bash
git clone https://github.com/your-username/irontrack-ai.git
cd irontrack-ai
Install dependencies:

Bash
npm install
Configure Firebase:
Ensure your src/firebase.js file contains your unique API keys. (Note: The current configuration is already set for the irontrack-239df project).

Run the application:

Bash
npm start
📂 Project Structure
Plaintext
src/
├── components/        # Reusable UI (WorkoutCard, WorkoutForm, etc.)
├── context/           # AuthContext for global user state
├── pages/             # Login, Signup, and Dashboard views
├── firebase.js        # Firebase initialization and config
└── App.js             # Route definitions and Protected Route logic
💡 How the Streak System Works
The dashboard calculates your streak by:

Retrieving all workouts tied to your UID.

Filtering for unique dates.

Sorting dates and checking the difference between "Today" and previous workout entries.

Incrementing the count as long as the gap between entries is exactly 0 or 1 day.

🛡️ Security Note
The Firebase configuration is currently hardcoded in firebase.js. For production environments, it is highly recommended to move these credentials into a .env file to prevent exposing API keys in version control.
