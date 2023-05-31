import React from "react";
import "./FullScreenCard.css";

export default function FullScreenCard({ children }) {
  return (
    <div className="fullscreen-card">
      <div className="fullscreen-card-body">{children}</div>
      <div className="fullscreen-card-below">{children}</div>
    </div>
  );
}

FullScreenCard.Body = function FullScreenCardBody({ children }) {
  return <div className="fullscreen-card-body">{children}</div>;
};

FullScreenCard.BelowCard = function FullScreenCardBelowCard({ children }) {
  return <div className="fullscreen-card-below">{children}</div>;
};