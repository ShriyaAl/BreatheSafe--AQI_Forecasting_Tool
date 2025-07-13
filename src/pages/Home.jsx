import React from 'react'
import landingImg from '../assets/pic1.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // AQI issue data for cards
  const aqiIssues = [
    {
      title: 'PM2.5 Health Risks',
      description: 'Fine particulate matter can penetrate deep into lungs, causing respiratory and cardiovascular issues.',
      icon: '🫁',
      color: 'from-red-400 to-red-600'
    },
    {
      title: 'Vehicle Emissions',
      description: 'Cars and trucks release pollutants like NO₂, contributing to urban air quality decline.',
      icon: '🚗',
      color: 'from-blue-400 to-blue-600'
    },
    {
      title: 'Industrial Pollution',
      description: 'Factories emit sulfur dioxide and VOCs, worsening AQI and affecting community health.',
      icon: '🏭',
      color: 'from-gray-400 to-gray-600'
    },
    {
      title: 'Ozone Exposure',
      description: 'Ground-level ozone can trigger asthma and reduce lung function, especially in children.',
      icon: '☀️',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      title: 'Wildfire Smoke',
      description: 'Smoke particles from wildfires can travel long distances and severely impact air quality.',
      icon: '🔥',
      color: 'from-orange-400 to-orange-600'
    },
    {
      title: 'Construction Dust',
      description: 'Building activities generate dust and particulates that contribute to local air pollution.',
      icon: '🏗️',
      color: 'from-yellow-600 to-yellow-800'
    },
  ];

  const features = [
    {
      title: 'Real-Time Monitoring',
      description: 'Get instant air quality updates from thousands of monitoring stations worldwide',
      icon: '📊',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      title: 'Health Recommendations',
      description: 'Receive personalized health advice based on current air quality conditions',
      icon: '💊',
      color: 'bg-green-50 border-green-200'
    },
    {
      title: 'Location-Based Alerts',
      description: 'Get notified when air quality changes in your area or planned destinations',
      icon: '📍',
      color: 'bg-purple-50 border-purple-200'
    },
    {
      title: 'Historical Data',
      description: 'Access detailed pollution trends and patterns over time',
      icon: '📈',
      color: 'bg-orange-50 border-orange-200'
    },
    {
      title: 'Multi-Pollutant Tracking',
      description: 'Monitor PM2.5, PM10, O3, NO2, SO2, and CO levels simultaneously',
      icon: '🌬️',
      color: 'bg-cyan-50 border-cyan-200'
    },
    {
      title: 'Forecast & Predictions',
      description: 'Plan ahead with 7-day air quality forecasts and pollution predictions',
      icon: '🔮',
      color: 'bg-pink-50 border-pink-200'
    }
  ];

  return (
    <div>
      <section className='bg-gradient-to-r from-blue-300 via-cyan-300 to-green-300 h-[97.5vh] w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12'>
        {/* Left: Text with various sizes */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 text-black">
          <h1 className="text-4xl md:text-6xl font-bold">Your Personal Air Quality Guardian</h1>
          <h2 className="text-2xl md:text-3xl font-semibold">Real-Time Air Quality Insights</h2>
          <p className="text-lg md:text-xl">Stay informed about the air you breathe. Track pollution levels, get health recommendations, and make smarter choices for you and your family.</p>
          <button className="bg-white text-cyan-500 px-6 py-2 rounded-md transition-all duration-300 hover:scale-105 w-fit cursor-pointer">
            Get Started
          </button>
        </div>
        {/* Right: Large image */}
        <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            src={landingImg} // Adjust path if in src/assets/
            alt="Landing page image"
            className="w-full max-w-lg md:max-w-2xl object-cover"
          />
        </div>
      </section>

      <section className='w-full max-w-6xl mx-auto mt-20 px-4'>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Air Quality Matters
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding the various factors that affect air quality helps you make informed decisions about your health and lifestyle.
          </p>
        </div>
        
        <div className="slider-container">
          <Slider {...settings}>
            {aqiIssues.map((issue, index) => (
              <div key={index} className="px-3">
                <div className={`slider-card bg-gradient-to-br ${issue.color} relative overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full"></div>
                    <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="text-5xl mb-2 filter drop-shadow-lg">
                        {issue.icon}
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-3 drop-shadow-md">
                        {issue.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed drop-shadow-sm">
                        {issue.description}
                      </p>
                    </div>
                    
                    <div className="mt-4 flex justify-center">
                      <button className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white/30 transition-all duration-300 border border-white/30">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className='w-full bg-gray-50 py-20 mt-20'>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              See Our App in Action
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch how easy it is to monitor air quality and get personalized recommendations for your health and daily activities.
            </p>
          </div>
          
          {/* Video Container */}
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">▶️</div>
                  <span className="text-gray-600 text-xl font-semibold">Video Demo Placeholder</span>
                  <p className="text-gray-500 mt-2">Your product demo video will go here</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Video Description */}
          <div className="text-center mt-8">
            <p className="text-gray-600 max-w-3xl mx-auto">
              This demo showcases the key features of our air quality monitoring app, including real-time data visualization, 
              personalized health recommendations, and location-based alerts to help you make informed decisions about your daily activities.
            </p>
          </div>
        </div>
      </section>

      {/* Product Features Section */}
      <section className='w-full py-20'>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Powerful Features for Better Air Quality Awareness
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive suite of tools helps you stay informed and make healthier choices based on real-time air quality data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`feature-card p-6 rounded-lg border-2 ${feature.color} hover:shadow-lg transition-all duration-300`}>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-600 transition-all duration-300 hover:scale-105">
              Try All Features Free
            </button>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .slider-container {
          position: relative;
          padding: 0 20px;
        }
        
        .slider-card {
          height: 350px;
          border-radius: 20px;
          transition: all 0.3s ease;
          cursor: pointer;
          margin: 10px 0;
        }
        
        .slider-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        /* Custom Slick Dots */
        .slider-container :global(.slick-dots) {
          bottom: -50px;
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }
        
        .slider-container :global(.slick-dots li) {
          width: auto;
          height: auto;
          margin: 0;
        }
        
        .slider-container :global(.slick-dots li button) {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #cbd5e1;
          border: none;
          transition: all 0.3s ease;
        }
        
        .slider-container :global(.slick-dots li button:before) {
          display: none;
        }
        
        .slider-container :global(.slick-dots li.slick-active button) {
          background: #0891b2;
          transform: scale(1.2);
        }
        
        .slider-container :global(.slick-dots li button:hover) {
          background: #0891b2;
        }
        
        /* Custom Arrows */
        .slider-container :global(.slick-prev),
        .slider-container :global(.slick-next) {
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          z-index: 10;
        }
        
        .slider-container :global(.slick-prev:hover),
        .slider-container :global(.slick-next:hover) {
          background: #0891b2;
          transform: scale(1.1);
        }
        
        .slider-container :global(.slick-prev) {
          left: -25px;
        }
        
        .slider-container :global(.slick-next) {
          right: -25px;
        }
        
        .slider-container :global(.slick-prev:before),
        .slider-container :global(.slick-next:before) {
          font-size: 20px;
          color: #0891b2;
        }
        
        .slider-container :global(.slick-prev:hover:before),
        .slider-container :global(.slick-next:hover:before) {
          color: white;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          .slider-card {
            height: 320px;
          }
          
          .slider-container {
            padding: 0 10px;
          }
          
          .slider-container :global(.slick-prev),
          .slider-container :global(.slick-next) {
            width: 40px;
            height: 40px;
          }
          
          .slider-container :global(.slick-prev) {
            left: -20px;
          }
          
          .slider-container :global(.slick-next) {
            right: -20px;
          }
        }
        
        @media (max-width: 480px) {
          .slider-container :global(.slick-prev),
          .slider-container :global(.slick-next) {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Home
