import { useState } from "react";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage";
import Notfoundpage from "./pages/Notfoundpage";
import BlogDetailpage from "./pages/BlogDetailpage";
import ChangePassword from "./pages/ChangePassword";
import Aboutpage from "./pages/Aboutpage";
import Blogpage from "./pages/Blogpage";
import ContactPage from "./pages/ContactPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import CourseOrderPage from "./pages/CourseOrderPage";
import CoursesPage from "./pages/CoursesPage";
import PaymentPage from "./pages/PaymentPage";
import PrivacyPage from "./pages/PrivacyPage";
import ProfilePage from "./pages/ProfilePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyInfo from "./pages/ProfilePage/MyInfo";
import MyCourse from "./pages/ProfilePage/MyCourse";
import MyPayment from "./pages/ProfilePage/MyPayment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />

          <Route path="/course" element={<CoursesPage />} />
          <Route path="/course/:courseId" element={<CourseDetailPage />} />
          <Route path="/course-order" element={<CourseOrderPage />} />

          <Route path="/blog" element={<Blogpage />} />
          <Route path="/blog/:blogId" element={<BlogDetailpage />} />

          <Route path="/profile" element={<ProfilePage />}>
            <Route index element={<MyInfo />} />
            <Route path="/profile/my-course" element={<MyCourse />} />
            <Route path="/profile/my-payment" element={<MyPayment />} />
          </Route>

          <Route path="/payment-method" element={<PaymentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/privacy" element={<PrivacyPage />} />

          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
