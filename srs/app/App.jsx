import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import RootLayout from "./layout/RootLayout";

import Chats from "./pages/Chats";
import Feed from "./pages/Feed";
import Groups from "./pages/Groups";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Navigate to="/chats" replace />} />

          <Route path="/chats" element={<Chats />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import RootLayout from "./layout/RootLayout";
import ChatsPage from "./pages/ChatsPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import GroupsPage from "./pages/GroupsPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<ChatsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/groups" element={<GroupsPage />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import ProfilePage from "./pages/Profile";
import SettingsPage from "./pages/Settings";
import { ProtectedRoute } from "./layout/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <RootLayout />
          </ProtectedRoute>
        }
      >
        <Route path="profile" element={<ProfilePage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

