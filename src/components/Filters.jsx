export default function FilterBar({ filters, setFilters }) {
  const contentTypes = [
    { value: 'all', label: 'All', icon: '🌐' },
    { value: 'text', label: 'Text', icon: '📝' },
    { value: 'image', label: 'Image', icon: '🖼️' },
    { value: 'video', label: 'Video', icon: '🎥' }
  ];

  const concerns = [
    { value: 'all', label: 'All Topics' },
    { value: 'quality', label: 'Quality' },
    { value: 'delivery', label: 'Delivery' },
    { value: 'usage', label: 'Usage' }
  ];

  const buttonStyle = (isActive) => ({
    padding: '10px 16px',
    border: isActive ? '2px solid #667eea' : '2px solid #E5E7EB',
    background: isActive ? '#EEF2FF' : 'white',
    color: isActive ? '#667eea' : '#6B7280',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    transition: 'all 0.2s'
  });

  return (
    <div style={{ 
      background: 'white',
      padding: '24px',
      borderRadius: '16px',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
    }}>
      {/* Content Type Filters */}
      <div style={{ marginBottom: '20px' }}>
        <label style={{ 
          display: 'block', 
          fontSize: '13px', 
          fontWeight: '600',
          color: '#6B7280',
          marginBottom: '12px'
        }}>
          CONTENT TYPE
        </label>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {contentTypes.map(type => (
            <button
              key={type.value}
              style={buttonStyle(filters.contentType === type.value)}
              onClick={() => setFilters({ ...filters, contentType: type.value })}
              onMouseEnter={(e) => {
                if (filters.contentType !== type.value) {
                  e.currentTarget.style.borderColor = '#667eea';
                }
              }}
              onMouseLeave={(e) => {
                if (filters.contentType !== type.value) {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }
              }}
            >
              <span style={{ marginRight: '6px' }}>{type.icon}</span>
              {type.label}
            </button>
          ))}
        </div>
      </div>

      {/* Concern Filters */}
      <div>
        <label style={{ 
          display: 'block', 
          fontSize: '13px', 
          fontWeight: '600',
          color: '#6B7280',
          marginBottom: '12px'
        }}>
          WHAT MATTERS TO YOU
        </label>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {concerns.map(concern => (
            <button
              key={concern.value}
              style={buttonStyle(filters.concern === concern.value)}
              onClick={() => setFilters({ ...filters, concern: concern.value })}
              onMouseEnter={(e) => {
                if (filters.concern !== concern.value) {
                  e.currentTarget.style.borderColor = '#667eea';
                }
              }}
              onMouseLeave={(e) => {
                if (filters.concern !== concern.value) {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                }
              }}
            >
              {concern.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}