import { useState } from 'react';
import { mockReviews } from '../data/mockReviews';
import ReviewCard from '../components/ReviewCard';
import FilterBar from '../components/FilterBar';
import TrustScore from '../components/TrustScore';

export default function WallOfLove() {
  const [filters, setFilters] = useState({
    contentType: 'all',
    concern: 'all'
  });

  // Filter logic
  const filteredReviews = mockReviews.filter(review => {
    const typeMatch = filters.contentType === 'all' || review.contentType === filters.contentType;
    const concernMatch = filters.concern === 'all' || review.concern === filters.concern;
    return typeMatch && concernMatch;
  });

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Unique: Trust score at the top */}
      <TrustScore reviews={filteredReviews} totalReviews={mockReviews.length} />
      
      <header style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ 
          fontSize: '48px', 
          fontWeight: '700',
          marginBottom: '12px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Wall of Love ❤️
        </h1>
        <p style={{ 
          fontSize: '18px', 
          color: '#6B7280',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Real voices. Real experiences. No BS.
        </p>
      </header>

      <FilterBar filters={filters} setFilters={setFilters} />

      {/* Unique: Show filter results count */}
      <div style={{ 
        textAlign: 'center', 
        margin: '24px 0',
        color: '#6B7280',
        fontSize: '14px'
      }}>
        Showing {filteredReviews.length} of {mockReviews.length} reviews
      </div>

      {/* Grid layout - masonry feel */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '24px',
        marginTop: '32px'
      }}>
        {filteredReviews.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {filteredReviews.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '80px 20px',
          color: '#9CA3AF'
        }}>
          <p style={{ fontSize: '24px', marginBottom: '8px' }}>🤷</p>
          <p>No reviews match these filters</p>
        </div>
      )}
    </div>
  );
}