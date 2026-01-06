import { platformInfo } from '../data/mockReviews';

export default function ReviewCard({ review }) {
  const platform = platformInfo[review.platform];
  
  // Unique: Sentiment-based border color
  const getSentimentColor = (sentiment) => {
    if (sentiment >= 0.85) return '#10B981'; // Green
    if (sentiment >= 0.7) return '#3B82F6';  // Blue
    if (sentiment >= 0.6) return '#F59E0B';  // Orange
    return '#6B7280'; // Gray
  };

  // Unique: Make dates feel recent and human
  const getRelativeTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date('2025-01-06'); // Using current date from system prompt
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'today';
    if (diffDays === 1) return 'yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '16px',
      padding: '24px',
      border: `3px solid ${getSentimentColor(review.sentiment)}`,
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      cursor: 'pointer',
      position: 'relative'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
    }}>
      
      {/* Header: Platform + Verified */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '16px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '20px' }}>{platform.icon}</span>
          <span style={{ 
            fontSize: '12px', 
            fontWeight: '600',
            color: platform.color 
          }}>
            {platform.label}
          </span>
        </div>
        
        {review.verified && (
          <span style={{
            background: '#DBEAFE',
            color: '#1E40AF',
            fontSize: '11px',
            padding: '4px 8px',
            borderRadius: '12px',
            fontWeight: '600'
          }}>
            ✓ Verified
          </span>
        )}
      </div>

      {/* Username */}
      <div style={{ 
        fontWeight: '600', 
        marginBottom: '12px',
        color: '#1F2937'
      }}>
        {review.username}
      </div>

      {/* Review text - the star of the show */}
      <p style={{ 
        color: '#4B5563',
        lineHeight: '1.6',
        marginBottom: '16px',
        fontSize: '15px'
      }}>
        "{review.reviewText}"
      </p>

      {/* Content type badge */}
      <div style={{ marginBottom: '12px' }}>
        <span style={{
          background: '#F3F4F6',
          color: '#6B7280',
          fontSize: '11px',
          padding: '4px 10px',
          borderRadius: '8px',
          fontWeight: '500'
        }}>
          {review.contentType === 'text' && '📝 Text'}
          {review.contentType === 'image' && '🖼️ Image'}
          {review.contentType === 'video' && '🎥 Video'}
        </span>
      </div>

      {/* Footer: Concern + Date + Helpful count */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '12px',
        borderTop: '1px solid #E5E7EB',
        fontSize: '12px',
        color: '#9CA3AF'
      }}>
        <span>
          About: <strong style={{ color: '#6B7280' }}>
            {review.concern.charAt(0).toUpperCase() + review.concern.slice(1)}
          </strong>
        </span>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span>👍 {review.helpfulCount}</span>
          <span>{getRelativeTime(review.date)}</span>
        </div>
      </div>
    </div>
  );
}