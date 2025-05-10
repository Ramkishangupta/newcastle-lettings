import React from 'react'
import { FaRocket } from "react-icons/fa";
import Card from "./Sections/ServiceCard";

function Service() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card
        backgroundImage="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80"
        icon={<FaRocket />}
        title="Launch Your Project"
        description="Quickly get started with powerful tools and support."
        link="/start"
      />
    </div>
  )
}

export default Service
