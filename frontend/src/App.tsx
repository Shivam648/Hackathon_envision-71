import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import MyAgents from "./pages/MyAgents";
import AgentWorkspace from "./pages/AgentWorkspace";
import AppShell from "./components/layout/AppShell";

export default function App() {
  return (
    <HashRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Navigate to="/agents" replace />} />
          <Route path="/agents" element={<MyAgents />} />
          <Route path="/agents/:agentId" element={<AgentWorkspace />} />
        </Routes>
      </AppShell>
    </HashRouter>
  );
}
