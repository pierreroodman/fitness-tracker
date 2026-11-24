import PropTypes from 'prop-types';

const levelColors = {
  Beginner: '#16a34a',
  Intermediate: '#d97706',
  Advanced: '#dc2626',
};

function Badge({ label }) {
  // Inline style: a JavaScript object, written with camelCase keys
  const style = {
    background: levelColors[label] || '#6b7280',
    color: 'white',
    padding: '2px 8px',
    borderRadius: '12px',
    fontSize: '0.75rem',
  };

  return <span style={style}>{label}</span>;
}

Badge.propTypes = { label: PropTypes.string.isRequired };

export default Badge;