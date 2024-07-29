import React from 'react';

interface PageOpenProps {
    selectedPage: string;
  }

const ContentOverview = ({ selectedPage }:PageOpenProps) => {
  const renderContent = () => {
    switch (selectedPage) {
      case 'Hello Section':
        return <section className=''>
            <p>Hello Section</p>
        </section>;
      case 'About us':
        return <p>This is the About us content.</p>;
      case 'Destinations':
        return <p>This is the Destinations content.</p>;
      case 'Services':
        return <p>This is the Services content.</p>;
      case 'Cars Booking':
        return <p>This is the Cars Booking content.</p>;
      case 'Gallery':
        return <p>This is the Gallery content.</p>;
      case 'Overview':
        return <p>This is the Overview content.</p>;
      case 'Our Story':
        return <p>This is the Our Story content.</p>;
      case 'Cars':
        return <p>This is the Cars content.</p>;
      case 'Activities':
        return <p>This is the Activities content.</p>;
      case 'Destination Marketing':
        return <p>This is the Destination Marketing content.</p>;
      default:
        return <p>Please select a section from the menu.</p>;
    }
  };

  return (
    <div className='p-4'>
      {renderContent()}
    </div>
  );
};

export default ContentOverview;
