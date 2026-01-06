// Deliberately imperfect data - real customers make typos, use casual language
export const mockReviews = [
  {
    id: 1,
    platform: 'twitter',
    contentType: 'text',
    username: '@sarah_makes_stuff',
    reviewText: 'ok so I was skeptical but this thing actually works?? been using for 3 weeks and my plants haven\'t died yet lmao. shipping took forever tho ngl',
    concern: 'delivery',
    date: '2024-12-18',
    verified: true,
    sentiment: 0.65, // Unique: sentiment scoring
    helpfulCount: 23
  },
  {
    id: 2,
    platform: 'instagram',
    contentType: 'image',
    username: 'craftymom2024',
    reviewText: 'Obsessed!! Finally something that does what it says. My 6yo even figured it out 😂 Quality is better than I expected for the price tbh',
    concern: 'quality',
    date: '2024-12-22',
    verified: true,
    sentiment: 0.89,
    helpfulCount: 47
  },
  {
    id: 3,
    platform: 'youtube',
    contentType: 'video',
    username: 'TechReviewDude',
    reviewText: 'Honest review: it\'s good but not perfect. The build quality is solid, usage is intuitive, but the instructions were confusing. Would I buy again? Probably.',
    concern: 'usage',
    date: '2024-12-15',
    verified: true,
    sentiment: 0.72,
    helpfulCount: 156
  },
  {
    id: 4,
    platform: 'website',
    contentType: 'text',
    username: 'Anonymous',
    reviewText: 'decent product. does the job. nothing special but nothing bad either. came in 4 days which was nice',
    concern: 'delivery',
    date: '2024-12-20',
    verified: false,
    sentiment: 0.58,
    helpfulCount: 8
  },
  {
    id: 5,
    platform: 'twitter',
    contentType: 'text',
    username: '@design_nerd',
    reviewText: 'The attention to detail here is *chef\'s kiss* 👌 You can tell someone actually cares about quality. Been recommending to everyone in my studio',
    concern: 'quality',
    date: '2024-12-25',
    verified: true,
    sentiment: 0.94,
    helpfulCount: 89
  },
  {
    id: 6,
    platform: 'instagram',
    contentType: 'image',
    username: 'busymom_3kids',
    reviewText: 'This has been a LIFESAVER. I don\'t write reviews but had to for this one. Easy to use even when I\'m juggling everything. Worth every penny',
    concern: 'usage',
    date: '2024-12-10',
    verified: true,
    sentiment: 0.91,
    helpfulCount: 34
  },
  {
    id: 7,
    platform: 'youtube',
    contentType: 'video',
    username: 'BudgetLifeHacks',
    reviewText: 'For the price point? Can\'t complain. I\'ve seen worse quality for double the cost. Shipping was standard, nothing crazy. Does what it needs to do.',
    concern: 'quality',
    date: '2024-12-28',
    verified: true,
    sentiment: 0.68,
    helpfulCount: 203
  },
  {
    id: 8,
    platform: 'website',
    contentType: 'text',
    username: 'FirstTimeBuyer',
    reviewText: 'I had questions about how to use it and customer service actually helped me same day. Product itself is fine, but that support made the difference for me',
    concern: 'usage',
    date: '2024-12-12',
    verified: true,
    sentiment: 0.77,
    helpfulCount: 12
  },
  {
    id: 9,
    platform: 'twitter',
    contentType: 'text',
    username: '@skeptical_shopper',
    reviewText: 'update: okay I take back what I said before. after using it properly (read the manual lol) it\'s actually pretty great. my bad for the earlier tweet',
    concern: 'usage',
    date: '2024-12-30',
    verified: true,
    sentiment: 0.81,
    helpfulCount: 56
  },
  {
    id: 10,
    platform: 'instagram',
    contentType: 'image',
    username: 'sustainable_living',
    reviewText: 'Love that this is built to last. So tired of cheap stuff breaking in 2 months. This feels solid and the company seems to actually care about their impact',
    concern: 'quality',
    date: '2024-12-08',
    verified: true,
    sentiment: 0.87,
    helpfulCount: 67
  }
];

// Unique addition: Platform metadata
export const platformInfo = {
  twitter: { color: '#1DA1F2', icon: '𝕏', label: 'X/Twitter' },
  instagram: { color: '#E4405F', icon: '📷', label: 'Instagram' },
  youtube: { color: '#FF0000', icon: '▶', label: 'YouTube' },
  website: { color: '#6B7280', icon: '⭐', label: 'Review' }
};