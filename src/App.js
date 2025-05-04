import LoadingComponent from "./components/Loading";
import Header from "./sections/header";
import MainSection from "./sections/mainSection";
// import { Suspense } from "react";
import React, { useEffect, useState } from 'react';
import ServicesSection from "./sections/servicesSection";
import ProjectsSection from "./sections/projectsSection";


function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Minimum 1 second loader on initial page load
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer); // cleanup
    }, []);
  
    if (loading) {
      return <LoadingComponent />; 
    }

    return (
        <div className="App">
            <Header />
            <MainSection />
            <ServicesSection />
            <ProjectsSection />
        </div>
    );
}

export default App;
